import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "../firebase";
import { listenToSiteAnalytics, listenToArchivedPeriods, resetSiteAnalyticsPeriod, TRACKED_PAGES, type ArchivedPeriod, type PageAnalytics } from "../lib/siteAnalytics";
import {
  listenToHusketAnalytics,
  listenToKvittekAnalytics,
  listenToQrAnalytics,
  type AnalyticsData,
} from "../lib/kvittekAnalytics";

const ADMIN_EMAIL = "morningcoffeelabs@gmail.com";

const emptyAnalytics: AnalyticsData = {
  landingViews: 0,
  googlePlayClicks: 0,
  appStoreClicks: 0,
  downloadClicks: 0,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--line, rgba(255,255,255,0.12))",
  borderRadius: 18,
  padding: "1rem",
  background: "var(--panel, rgba(255,255,255,0.04))",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 0.9rem",
  borderRadius: 10,
  border: "1px solid var(--line, rgba(255,255,255,0.12))",
  background: "var(--panel, rgba(255,255,255,0.04))",
  color: "inherit",
  font: "inherit",
};

function numberValue(value: unknown): number {
  return typeof value === "number" ? value : 0;
}

function formatTimestamp(value: unknown): string {
  if (!value || typeof value !== "object") return "Ikke registrert ennå";

  const maybeTimestamp = value as { toDate?: () => Date };

  if (typeof maybeTimestamp.toDate !== "function") {
    return "Ikke registrert ennå";
  }

  return new Intl.DateTimeFormat("no-NO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(maybeTimestamp.toDate());
}

function StatCard(props: {
  title: string;
  value: number | string;
  description?: string;
}) {
  return (
    <div style={cardStyle}>
      <p style={{ margin: "0 0 0.45rem", opacity: 0.72 }}>{props.title}</p>
      <strong style={{ display: "block", fontSize: "2rem", lineHeight: 1.1 }}>
        {props.value}
      </strong>
      {props.description ? (
        <p style={{ margin: "0.55rem 0 0", opacity: 0.72 }}>{props.description}</p>
      ) : null}
    </div>
  );
}

function AnalyticsSection(props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ ...cardStyle, marginBottom: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>{props.title}</h2>
      <p style={{ marginTop: "-0.35rem", opacity: 0.72 }}>{props.description}</p>
      {props.children}
    </section>
  );
}

const AdminPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [adminView,setAdminView]=useState<"home"|"analytics">("home");

  const [siteStats, setSiteStats] = useState<Record<string, PageAnalytics>>({});
  const [periodHistory, setPeriodHistory] = useState<ArchivedPeriod[]>([]);
  const [resetError, setResetError] = useState("");
  const [resetBusy, setResetBusy] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>("mosaic-me");

  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    return (() => {
      const unsubscribers = TRACKED_PAGES.map((page) =>
        listenToSiteAnalytics(page.id, (data) => setSiteStats((current) => ({ ...current, [page.id]: data })))
      );
      return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
    })();
  }, [user]);

  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;
    return listenToArchivedPeriods(selectedPage, setPeriodHistory);
  }, [user, selectedPage]);

  const handlePeriodReset = async () => {
    const label = TRACKED_PAGES.find((page) => page.id === selectedPage)?.label ?? selectedPage;
    if (!window.confirm(`Nullstille gjeldende periode for ${label}? Totaltallene beholdes.`)) return;
    setResetBusy(true);
    setResetError("");
    try {
      await resetSiteAnalyticsPeriod(selectedPage);
    } catch {
      setResetError("Nullstilling feilet. Kontroller Firestore-regler og administratorrettigheter.");
    } finally {
      setResetBusy(false);
    }
  };

  const [kvittek, setKvittek] = useState<AnalyticsData>(emptyAnalytics);
  const [qr, setQr] = useState<AnalyticsData>(emptyAnalytics);
  const [husket, setHusket] = useState<AnalyticsData>(emptyAnalytics);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;

    const unsubKvittek = listenToKvittekAnalytics(setKvittek);
    const unsubQr = listenToQrAnalytics(setQr);
    const unsubHusket = listenToHusketAnalytics(setHusket);

    return () => {
      unsubKvittek();
      unsubQr();
      unsubHusket();
    };
  }, [user]);

  const kvittekStoreClicks =
    numberValue(kvittek.googlePlayClicks) + numberValue(kvittek.appStoreClicks);

  const kvittekStoreClickRate = useMemo(() => {
    const views = numberValue(kvittek.landingViews);
    if (!views) return "0 %";
    return `${Math.round((kvittekStoreClicks / views) * 100)} %`;
  }, [kvittek.landingViews, kvittekStoreClicks]);

  const qrDownloadRate = useMemo(() => {
    const views = numberValue(qr.landingViews);
    const downloads = numberValue(qr.downloadClicks);
    if (!views) return "0 %";
    return `${Math.round((downloads / views) * 100)} %`;
  }, [qr.landingViews, qr.downloadClicks]);

  const husketClickRate = useMemo(() => {
    const views = numberValue(husket.landingViews);
    const clicks = numberValue(husket.googlePlayClicks);
    if (!views) return "0 %";
    return `${Math.round((clicks / views) * 100)} %`;
  }, [husket.landingViews, husket.googlePlayClicks]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError("");

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setPassword("");
    } catch {
      setLoginError("Innlogging feilet. Sjekk e-post og passord.");
    }
  };

  if (!authChecked) {
    return (
      <main className="page">
        <section style={cardStyle}>
          <h1 style={{ marginTop: 0 }}>Admin</h1>
          <p>Laster innlogging...</p>
        </section>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="page" style={{ maxWidth: 560 }}>
        <section style={cardStyle}>
          <h1 style={{ marginTop: 0 }}>Admin</h1>
          <p style={{ opacity: 0.76 }}>
            Logg inn for å se statistikk for MCL-nettsiden.
          </p>

          <form onSubmit={handleLogin} style={{ display: "grid", gap: "0.9rem" }}>
            <label>
              <span style={{ display: "block", marginBottom: "0.35rem" }}>E-post</span>
              <input
                style={inputStyle}
                type="email"
                value={email}
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label>
              <span style={{ display: "block", marginBottom: "0.35rem" }}>Passord</span>
              <input
                style={inputStyle}
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            {loginError ? (
              <p style={{ margin: 0, color: "#ff9f9f" }}>{loginError}</p>
            ) : null}

            <button type="submit" className="status-button">
              Logg inn
            </button>
          </form>
        </section>
      </main>
    );
  }

  if (user.email !== ADMIN_EMAIL) {
    return (
      <main className="page">
        <section style={cardStyle}>
          <h1 style={{ marginTop: 0 }}>Ingen tilgang</h1>
          <p>Denne brukeren har ikke tilgang til adminpanelet.</p>
          <button type="button" className="status-button" onClick={() => signOut(auth)}>
            Logg ut
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="page" style={{ maxWidth: 1100 }}>
      <section style={{ ...cardStyle, marginBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>Morning Coffee Labs – Admin</h1>
            <p style={{ margin: "0.4rem 0 0", opacity: 0.72 }}>
              Administrasjon og statistikk for MCL-produktene.
            </p>
          </div>

          <button type="button" className="status-button" onClick={() => signOut(auth)}>
            Logg ut
          </button>
        </div>
      </section>

      {adminView==="home"?<section style={{...cardStyle,marginBottom:"1rem"}}>
       <h2 style={{marginTop:0}}>Administrasjonsforside</h2>
       <p>Velg området du vil administrere.</p>
       <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:18}}>
        <Link to="/admin/elkrafttorget" style={{...cardStyle,display:"block",minHeight:155,color:"inherit",textDecoration:"none"}}>
         <h2>ElKraftTorget</h2>
         <p>Kontoverifisering, rapportering og moderering</p>
         <strong>Åpne administrasjon →</strong>
        </Link>
        <button type="button" onClick={()=>setAdminView("analytics")} style={{...cardStyle,textAlign:"left",cursor:"pointer",minHeight:155,color:"inherit"}}>
         <h2>MCL Analytics</h2>
         <p>Statistikk for hovedsiden og alle produktsidene</p>
         <strong>Åpne statistikk →</strong>
        </button>
       </div>
      </section>:<div>
        <button type="button" className="status-button" style={{marginBottom:"1rem"}} onClick={()=>setAdminView("home")}>← Oversikt</button>
      {<AnalyticsSection title="Alle sider" description="Nye målinger fra aktiveringstidspunktet. Tidligere statistikk for Kvittek, QR-generator og Husk’et ligger i egne faner.">
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",textAlign:"right"}}>
            <thead><tr><th style={{textAlign:"left",padding:8}}>Side</th><th>Periode</th><th>Totalt</th><th>Butikk-klikk periode</th><th>Butikk-klikk totalt</th></tr></thead>
            <tbody>{TRACKED_PAGES.map((page) => {
              const data = siteStats[page.id];
              const p = data?.period;
              const t = data?.total;
              return <tr key={page.id} style={{borderTop:"1px solid var(--mcl-border)"}}>
                <td style={{padding:8,textAlign:"left"}}>{page.label}</td>
                <td>{p?.views ?? 0}</td><td>{t?.views ?? 0}</td>
                <td>{(p?.googlePlay ?? 0)+(p?.appStore ?? 0)}</td>
                <td>{(t?.googlePlay ?? 0)+(t?.appStore ?? 0)}</td>
              </tr>;
            })}</tbody>
          </table>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:"1rem",marginTop:"1.5rem"}}>
          <StatCard title="Sidevisninger – periode" value={TRACKED_PAGES.reduce((sum,page)=>sum+(siteStats[page.id]?.period.views ?? 0),0)}/>
          <StatCard title="Sidevisninger – totalt" value={TRACKED_PAGES.reduce((sum,page)=>sum+(siteStats[page.id]?.total.views ?? 0),0)}/>
        </div>
        <div style={{marginTop:"1.5rem",display:"grid",gap:12}}>
          <h3 style={{margin:0}}>Detaljer og nullstilling</h3>
          <select className="admin-analytics-select" style={inputStyle} value={selectedPage} onChange={(event)=>setSelectedPage(event.target.value)}>
            {TRACKED_PAGES.map((page)=><option key={page.id} value={page.id}>{page.label}</option>)}
          </select>
          <p style={{margin:0}}>Siste nullstilling: {formatTimestamp(siteStats[selectedPage]?.resetAt)}</p>
          <p style={{margin:0}}>Siste registrering: {formatTimestamp(siteStats[selectedPage]?.lastEventAt)}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12}}>
            {(["views","googlePlay","appStore"] as const).map((metric)=><div key={metric} style={cardStyle}>
              <strong>{metric==="views"?"Sidevisninger":metric==="googlePlay"?"Google Play":"App Store"}</strong>
              <p style={{margin:"0.5rem 0"}}>Periode: {siteStats[selectedPage]?.period[metric] ?? 0}</p>
              <p style={{margin:0}}>Totalt: {siteStats[selectedPage]?.total[metric] ?? 0}</p>
            </div>)}
          </div>
          <button type="button" className="status-button" disabled={resetBusy} onClick={handlePeriodReset}>
            {resetBusy?"Nullstiller...":"Nullstill periode for valgt side"}
          </button>
          <h3 style={{margin:"0.5rem 0 0"}}>Tidligere perioder</h3>
          {periodHistory.length === 0 ? <p style={{margin:0,opacity:0.7}}>Ingen avsluttede perioder ennå.</p> :
            <div style={{display:"grid",gap:8}}>
              {periodHistory.map((period) => <div key={period.id} style={cardStyle}>
                <strong>{formatTimestamp(period.startedAt)} – {formatTimestamp(period.endedAt)}</strong>
                <p style={{margin:"0.4rem 0 0"}}>Visninger: {period.counts.views ?? 0} · Google Play: {period.counts.googlePlay ?? 0} · App Store: {period.counts.appStore ?? 0}</p>
              </div>)}
            </div>}
          {resetError && <p role="alert" style={{color:"#ff9f9f"}}>{resetError}</p>}
        </div>
      </AnalyticsSection>}

      <details style={{...cardStyle,marginBottom:"1rem"}}><summary style={{cursor:"pointer",fontWeight:700}}>Tidligere statistikk – Kvittek</summary><div style={{marginTop:"1rem"}}><AnalyticsSection
        title="Kvittek"
        description="Landingssiden /receipts og klikk videre til appbutikkene."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <StatCard title="Landingsside åpnet" value={numberValue(kvittek.landingViews)} />
          <StatCard title="Google Play-klikk" value={numberValue(kvittek.googlePlayClicks)} />
          <StatCard title="App Store-klikk" value={numberValue(kvittek.appStoreClicks)} />
          <StatCard
            title="Videre til butikk"
            value={kvittekStoreClickRate}
            description={`${kvittekStoreClicks} butikk-klikk totalt.`}
          />
        </div>

        <div style={{ display: "grid", gap: "0.65rem" }}>
          <p style={{ margin: 0 }}>
            <strong>Siste landingsside-visning:</strong>{" "}
            {formatTimestamp(kvittek.lastLandingViewAt)}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Siste Google Play-klikk:</strong>{" "}
            {formatTimestamp(kvittek.lastGooglePlayClickAt)}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Siste App Store-klikk:</strong>{" "}
            {formatTimestamp(kvittek.lastAppStoreClickAt)}
          </p>
        </div>
      </AnalyticsSection></div></details>

      <details style={{...cardStyle,marginBottom:"1rem"}}><summary style={{cursor:"pointer",fontWeight:700}}>Tidligere statistikk – QR-generator</summary><div style={{marginTop:"1rem"}}><AnalyticsSection
        title="QR-generator"
        description="Besøk på QR-generatoren og klikk på Last ned-knappen."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <StatCard title="Side åpnet" value={numberValue(qr.landingViews)} />
          <StatCard title="Nedlastinger" value={numberValue(qr.downloadClicks)} />
          <StatCard title="Nedlastingsrate" value={qrDownloadRate} />
        </div>

        <div style={{ display: "grid", gap: "0.65rem" }}>
          <p style={{ margin: 0 }}>
            <strong>Siste sidevisning:</strong> {formatTimestamp(qr.lastLandingViewAt)}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Siste nedlasting:</strong> {formatTimestamp(qr.lastDownloadClickAt)}
          </p>
        </div>
      </AnalyticsSection></div></details>

      <details style={{...cardStyle,marginBottom:"1rem"}}><summary style={{cursor:"pointer",fontWeight:700}}>Tidligere statistikk – Husk’et</summary><div style={{marginTop:"1rem"}}><AnalyticsSection
        title="Husk’et"
        description="Besøk på Husk’et-siden og klikk videre til Google Play."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <StatCard title="Side åpnet" value={numberValue(husket.landingViews)} />
          <StatCard title="Google Play-klikk" value={numberValue(husket.googlePlayClicks)} />
          <StatCard title="Videre til butikk" value={husketClickRate} />
        </div>

        <div style={{ display: "grid", gap: "0.65rem" }}>
          <p style={{ margin: 0 }}>
            <strong>Siste sidevisning:</strong> {formatTimestamp(husket.lastLandingViewAt)}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Siste Google Play-klikk:</strong>{" "}
            {formatTimestamp(husket.lastGooglePlayClickAt)}
          </p>
        </div>
      </AnalyticsSection></div></details>
      </div>}
    </main>
  );
};

export default AdminPage;

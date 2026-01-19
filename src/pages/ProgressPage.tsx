import React from "react";
import { Link } from "react-router-dom";

const ProgressPage: React.FC = () => {
  return (
    <main className="page">
      {/* HERO */}
      <section className="fs-hero">
        <h1>Manage Progress</h1>

        <p className="fs-tagline" style={{ maxWidth: 980 }}>
          Fremdriftsplanlegging uten støy.
        </p>

        <p style={{ maxWidth: 980, marginTop: "1rem" }}>
          Manage Progress er et rendyrket Gantt-verktøy for prosjektbasert arbeid.
          Utviklet for daglig bruk under tidspress – og for situasjoner der oversikt,
          forutsigbarhet og dokumentasjon faktisk betyr noe.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "1rem" }}>
          <span className="badge">Lanseres 1. februar</span>

          <Link
            to="/kontakt"
            style={{
              alignSelf: "center",
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            Ønsker du beskjed ved lansering? Ta kontakt →
          </Link>
        </div>
      </section>

      {/* INNHOLD */}
      <section className="intro-grid">
        <div className="intro-card">
          <h3>Én plan, én sannhet</h3>
          <p>
            Tabellen er kilden til sannhet. Gantt-visningen speiler nøyaktig det samme
            innholdet. Ingen skjult logikk, ingen overraskelser.
          </p>
        </div>

        <div className="intro-card">
          <h3>Bygget for virkelige prosjekter</h3>
          <p>
            Endringer, avhengigheter, forskyvninger og omplanlegging håndteres uten at
            strukturen kollapser. Dette er laget for prosjekter som faktisk lever.
          </p>
        </div>

        <div className="intro-card">
          <h3>Print er en funksjon</h3>
          <p>
            Utskrift og eksport er ikke ettertanker. Planer kan tas med i møter, legges
            i dokumentasjon og brukes videre – med forutsigbart resultat hver gang.
          </p>
        </div>

        <div className="intro-card">
          <h3>Lav terskel, høy presisjon</h3>
          <p>
            Kom i gang raskt og hold planen ryddig. Fokus er å gi struktur og kontroll
            uten at verktøyet blir et eget prosjekt.
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>Hvem dette passer for</h3>
          <p style={{ maxWidth: 980 }}>
            Manage Progress passer for prosjektledere, tekniske miljøer og team som
            jobber prosjektbasert – og som trenger en plan som tåler endringer, kan
            dokumenteres og er enkel å ta med videre i møter og leveranser.
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>Videre</h3>
          <p style={{ maxWidth: 980, marginBottom: 0 }}>
            Manage Progress er del av det som over tid blir Manage System – et
            økosystem av små, selvstendige verktøy som kan fungere alene, men også
            sammen når behovet oppstår.
          </p>

          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <Link to="/">← Tilbake til Morning Coffee Labs</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProgressPage;

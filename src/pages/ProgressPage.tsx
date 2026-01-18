import React from "react";
import { Link } from "react-router-dom";

const ProgressPage: React.FC = () => {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">Manage Progress</h1>

        <p className="hero-tagline">
          Fremdriftsplanlegging uten støy.
        </p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Manage Progress er et rendyrket Gantt-verktøy for prosjektbasert
          arbeid. Utviklet for daglig bruk, under tidspress, og for situasjoner
          der oversikt, forutsigbarhet og dokumentasjon faktisk betyr noe.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
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

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva Progress er</h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>Én plan, én sannhet</h3>
            <p>
              Tabellen er kilden til sannhet. Gantt-visningen speiler nøyaktig
              det samme innholdet. Ingen skjult logikk, ingen overraskelser.
            </p>
          </div>

          <div className="intro-card">
            <h3>Bygget for virkelige prosjekter</h3>
            <p>
              Endringer, avhengigheter, forskyvninger og omplanlegging håndteres
              uten at strukturen kollapser. Dette er laget for prosjekter som
              faktisk lever.
            </p>
          </div>

          <div className="intro-card">
            <h3>Print er en funksjon</h3>
            <p>
              Utskrift og eksport er ikke ettertanker. Planer kan tas med i
              møter, legges i dokumentasjon og brukes videre – med forutsigbart
              resultat hver gang.
            </p>
          </div>
        </section>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva Progress ikke er</h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>Ikke et dashboardsystem</h3>
            <p>
              Ingen overflødige grafer, KPI-er eller visuelle distraksjoner.
              Fokus ligger på planen – ikke på pynt.
            </p>
          </div>

          <div className="intro-card">
            <h3>Ikke et enterprise-mareritt</h3>
            <p>
              Ingen kurs for å komme i gang. Ingen skjulte regler. Ingen
              prosesser som tvinger brukeren til å jobbe på systemets premisser.
            </p>
          </div>

          <div className="intro-card">
            <h3>Ikke bygget for hype</h3>
            <p>
              Ingen buzzwords. Ingen funksjoner bare for å se imponerende ut.
              Hvis noe ikke tåler tid og reell bruk, hører det ikke hjemme her.
            </p>
          </div>
        </section>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hvem dette passer for</h2>
        <p style={{ maxWidth: 820 }}>
          Manage Progress er laget for folk som har ansvar: prosjektledere,
          tekniske miljøer og team som trenger oversikt, kontroll og
          dokumenterbar fremdrift – uten å bruke mer tid på verktøyet enn på
          selve prosjektet.
        </p>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Videre</h2>
        <p style={{ maxWidth: 820 }}>
          Manage Progress er del av det som over tid blir Manage System – et
          økosystem av små, selvstendige verktøy som kan fungere alene, men også
          sammen når behovet oppstår.
        </p>

        <p style={{ marginTop: "1rem" }}>
          <Link to="/">← Tilbake til Morning Coffee Labs</Link>
        </p>
      </section>
    </main>
  );
};

export default ProgressPage;

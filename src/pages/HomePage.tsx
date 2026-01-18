import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <main className="page home-page">
      <section className="hero">
        <h1 className="hero-title">Morning Coffee Labs</h1>

        <p className="hero-tagline">
          Verktøy for folk som faktisk har ansvar.
        </p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Et lite verksted for digitale arbeidsverktøy – bygget for virkeligheten,
          ikke for demoer. Her prioriteres ro, kontroll og tillit foran støy,
          hype og funksjonslister.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <Link to="/progress" className="hero-cta">
            Se Progress → (lanseres 1. februar)
          </Link>

          <Link
            to="/kontakt"
            style={{
              alignSelf: "center",
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            Spørsmål? Ta kontakt →
          </Link>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva som bygges</h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>Verktøy for prosjekter</h3>
            <p>
              Løsninger for planlegging, oppfølging og dokumentasjon – laget for
              ekte arbeid. Enkle å ta i bruk på dag én, uten å låse når behovene
              vokser.
            </p>
          </div>

          <div className="intro-card">
            <h3>Manage Progress</h3>
            <p>
              En ren Gantt-app med lav terskel og høy presisjon. Bygget for
              daglig bruk under tidspress – og for å tåle endring, print og
              dokumentasjon uten overraskelser.
            </p>
            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/progress">Se mer om Progress →</Link>
            </p>
          </div>

          <div className="intro-card">
            <h3>Idébank</h3>
            <p>
              Et rom for idéer som fortjener å bli realisert, men som mangler
              struktur, timing eller gjennomføring. Et tydelig “nei” til hype –
              og et tydelig “ja” til praktisk verdi.
            </p>
            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/idebank">Gå til Idébanken →</Link>
            </p>
          </div>
        </section>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Prinsipper</h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>Én kilde til sannhet</h3>
            <p>
              Ingen dobbeltlogikk, ingen skjult magi. Det som gjelder, gjelder –
              og kan forklares, feilsøkes og stoles på.
            </p>
          </div>

          <div className="intro-card">
            <h3>Forutsigbarhet foran wow</h3>
            <p>
              Samme handling gir samme resultat. Design og teknikk henger sammen
              – eller så bygges det ikke.
            </p>
          </div>

          <div className="intro-card">
            <h3>Respekt for tid og hode</h3>
            <p>
              Alt som stjeler fokus uten å gi verdi regnes som en feil. Målet er
              rolig trygghet: “det bare fungerer”.
            </p>
          </div>
        </section>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hvem dette passer for</h2>
        <p style={{ maxWidth: 820 }}>
          Ikke laget for alle – og det er bevisst. Dette treffer best hos folk
          som kjenner smerten: prosjektbasert arbeid, ansvar, tidspress og behov
          for dokumenterbar kontroll.
        </p>
      </section>
    </main>
  );
};

export default HomePage;

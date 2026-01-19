import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <main className="page home-page">
      {/* ================= Hero ================= */}
      <section className="hero">
        <h1 className="hero-title">Enkle verktøy for komplekst arbeid</h1>

        <p className="hero-tagline">
          Digitale verktøy for struktur, oversikt og gjennomføring – bygget for
          virkeligheten, ikke for demoer.
        </p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Her prioriteres tydelig struktur, forutsigbar funksjonalitet og
          verktøy som er enkle å ta i bruk – også når behovene vokser. Løsninger
          laget for daglig bruk, under reelle rammer.
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

      {/* ================= Hva som bygges ================= */}
      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva som bygges</h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>Fremdrift og planlegging</h3>
            <p>
              Verktøy som gir rask oversikt og tydelig struktur – uten tunge
              oppsett eller skjulte avhengigheter.
            </p>
          </div>

          <div className="intro-card">
            <h3>Struktur og dokumentasjon</h3>
            <p>
              Løsninger som gjør det enkelt å følge opp arbeid, beslutninger og
              endringer – og hente det frem igjen når det faktisk trengs.
            </p>
          </div>

          <div className="intro-card">
            <h3>Verktøy som tåler virkeligheten</h3>
            <p>
              Bygget for daglig bruk under tidspress, endringer og reelle
              rammebetingelser – ikke for perfekte demo-scenarier.
            </p>
          </div>
        </section>
      </section>

      {/* ================= Progress – egen bred flis ================= */}
      <section>
        <section className="intro-card" style={{ marginTop: "1.5rem" }}>
          <h3>Manage Progress</h3>
          <p>
            Manage Progress er et lavterskel verktøy for planlegging og
            oppfølging av prosjekter. Det er laget for å gi rask oversikt,
            tydelig struktur og kontroll – uten tunge oppsett, komplekse
            begreper eller unødvendige valg.
          </p>

          <p>
            Start enkelt. Utvid når behovet oppstår.
          </p>

          <p style={{ marginTop: "0.7rem" }}>
            <Link to="/progress">Se mer om Progress →</Link>
          </p>
        </section>
      </section>

      {/* ================= Prinsipper ================= */}
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

      {/* ================= Hvem dette passer for ================= */}
      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hvem dette passer for</h2>
        <p style={{ maxWidth: 820 }}>
          Morning Coffee Labs lager verktøy for alle som har behov for struktur,
          oversikt og dokumenterbar kontroll i arbeidet sitt.
          <br />
          <br />
          Enten du jobber alene eller i team, med små eller større prosjekter,
          er målet det samme: å gjøre arbeidet enklere å planlegge, følge opp og
          fullføre – uten unødvendig kompleksitet.
        </p>
      </section>
    </main>
  );
};

export default HomePage;

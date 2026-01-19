import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <main className="page home-page">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Enkle verktøy for komplekst arbeid</h1>

        <p className="hero-tagline">
          Digitale verktøy for struktur, oversikt og gjennomføring – bygget for
          virkeligheten, ikke for demoer.
        </p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Her prioriteres tydelig struktur, forutsigbar funksjonalitet og verktøy
          som er enkle å ta i bruk – også når behovene vokser. Løsninger laget
          for daglig bruk, under reelle rammer.
        </p>
      </section>

      {/* HVA SOM BYGGES */}
      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva som bygges</h2>

        <section className="intro-grid">
          {/* MANAGE PROGRESS – FULL BREDD */}
          <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
            <h3>Manage Progress</h3>
            <p>
              Manage Progress er et lettvekts verktøy for planlegging og
              oppfølging av prosjekter. Det er laget for å gi rask oversikt,
              tydelig struktur og kontroll – uten tunge oppsett, komplekse
              begreper eller unødvendige valg.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                marginTop: "1rem",
              }}
            >
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
          </div>

          {/* TJENESTER (erstatter "Fremdrift og planlegging") */}
          <div className="intro-card">
            <h3>Tjenester</h3>
            <p>
              Vi bygger apper på bestilling for bedrifter som trenger et konkret
              verktøy – levert som et produkt dere eier. I tillegg driver vi en
              idébank der gode idéer kan bli til lisensprodukter over tid.
            </p>

            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/idebank">Se tjenester og idébank →</Link>
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
              rammebetingelser – ikke for perfekte demo-scenarioer.
            </p>
          </div>
        </section>
      </section>

      {/* PRINSIPPER */}
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

      {/* HVEM DETTE PASSER FOR */}
      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hvem dette passer for</h2>
        <p style={{ maxWidth: 820 }}>
          Dette er verktøy for folk som jobber strukturert med prosjekter,
          oppfølging og gjennomføring – og som ønsker oversikt, kontroll og
          dokumentasjon uten at verktøyet blir en belastning i seg selv.
        </p>
      </section>
    </main>
  );
};

export default HomePage;

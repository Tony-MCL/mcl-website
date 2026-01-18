import React from "react";
import { Link } from "react-router-dom";

const ProgressPage: React.FC = () => {
  return (
    <main className="page">
      <section className="hero" style={{ paddingLeft: 0 }}>
        <span className="badge">Lanseres 1. februar 2026</span>
        <h1 className="hero-title" style={{ marginTop: "0.7rem" }}>
          Manage Progress
        </h1>

        <p className="hero-tagline" style={{ maxWidth: 820 }}>
          Et praktisk fremdriftsverktøy for folk som faktisk jobber i prosjekter.
          Enkelt å komme i gang med, laget for oversikt, struktur og gjennomføring.
        </p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Denne siden er en midlertidig presentasjon frem til lansering. Når vi
          går live, kommer full beskrivelse, priser og app-tilgang her (på
          Manage System-domenet i neste steg).
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <Link to="/kontakt" className="hero-cta">
            Kontakt oss om Progress →
          </Link>
          <Link
            to="/"
            style={{
              alignSelf: "center",
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            Tilbake til forsiden →
          </Link>
        </div>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva er Progress?</h2>
        <section className="intro-grid">
          <div className="intro-card">
            <h3>Plan</h3>
            <p>
              Lag en tydelig plan med aktiviteter, datoer og ansvar – uten å
              bygge et helt “prosjekt-system”.
            </p>
          </div>

          <div className="intro-card">
            <h3>Følg opp</h3>
            <p>
              Hold oversikt når virkeligheten treffer: endringer, avhengigheter,
              og det som må kommuniseres videre.
            </p>
          </div>

          <div className="intro-card">
            <h3>Del</h3>
            <p>
              Enkelt å dele fremdrift med kollegaer og kunder, med et uttrykk som
              er lett å lese og forstå.
            </p>
          </div>
        </section>

        <p style={{ marginTop: "1rem", color: "var(--mcl-text-dim)" }}>
          Neste steg: Når du publiserer Manage System-siden, bytter vi denne til
          en ekstern lenke (og MCL blir “portal/brand”).
        </p>
      </section>
    </main>
  );
};

export default ProgressPage;

import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <main className="page home-page">
      <section className="hero">
        <h1 className="hero-title">Morning Coffee Labs</h1>

        <p className="hero-tagline">
          Vi bygger digitale verktøy som gjør prosjekthverdagen enklere.
        </p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Morning Coffee Labs er et lite verksted for digitale verktøy – med
          fokus på praktisk nytte, kvalitet og enkle arbeidsflyter.
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
        <h2 style={{ marginBottom: "0.6rem" }}>Hva vi gjør</h2>
        <section className="intro-grid">
          <div className="intro-card">
            <h3>Verktøy for prosjekter</h3>
            <p>
              Vi lager løsninger som hjelper deg å planlegge, følge opp og
              kommunisere arbeid uten unødvendig kompleksitet.
            </p>
          </div>

          <div className="intro-card">
            <h3>Idébank</h3>
            <p>
              Sitter du på en idé du gjerne skulle sett komme til live, men
              mangler midler til å realisere den? Idébanken kan være en måte å
              få det til.
            </p>
            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/idebank">Gå til Idébanken →</Link>
            </p>
          </div>

          <div className="intro-card">
            <h3>Kort vei til beslutning</h3>
            <p>
              Du snakker direkte med de som designer og bygger. Det gir rask
              avklaring og mindre friksjon.
            </p>
            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/kontakt">Ta kontakt →</Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HomePage;

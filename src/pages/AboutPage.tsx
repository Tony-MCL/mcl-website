import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <h1>Om Morning Coffee Labs</h1>
        <p className="about-tagline">
          Vi bygger digitale verktøy med praktisk nytte og et helhetlig uttrykk.
        </p>
      </section>

      <section className="about-section">
        <h2>Filosofi</h2>
        <p>
          Vi lager verktøy som skal være enkle å forstå, raske å bruke, og
          robuste i virkelige prosjekter.
        </p>
      </section>

      <section className="about-section">
        <h2>Produkter</h2>
        <p>
          Første produkt ut er Manage Progress. Flere verktøy kan komme på MCL
          etter hvert.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;

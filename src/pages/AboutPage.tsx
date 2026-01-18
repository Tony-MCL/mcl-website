import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <h1>Om Morning Coffee Labs</h1>
        <p className="about-tagline">
          Et produktverksted for verktøy som gir ro, kontroll og tillit.
        </p>
      </section>

      <section className="about-section">
        <h2>Et verksted, ikke en fabrikk</h2>
        <p>
          Morning Coffee Labs fremstår mer som et fagmiljø som bygger verktøy enn
          et generisk SaaS-selskap. Tempoet kan være høyt, men retningen er
          stabil: lav terskel, høy presisjon – og null toleranse for støy.
        </p>
      </section>

      <section className="about-section">
        <h2>Kvalitet betyr kontroll</h2>
        <p>
          Kvalitet handler ikke om perfeksjon, men om kontroll: kontroll på data,
          flyt, eierskap og forutsigbarhet. Robusthet prioriteres foran “smart”
          magi som ikke tåler tid.
        </p>
      </section>

      <section className="about-section">
        <h2>Prinsipper som styrer alt</h2>
        <p>
          Én kilde til sannhet. Tydelig ansvar og hard lagdeling. Forutsigbarhet
          foran wow-effekter. Respekt for brukerens tid og hode. Bygget for ekte
          arbeid – inkludert print, dokumentasjon og sporbarhet.
        </p>
      </section>

      <section className="about-section">
        <h2>Produkter og retning</h2>
        <p>
          Første produkt ut er Manage Progress: en ren Gantt-app med lav terskel
          og høy faglig integritet. Over tid kan flere verktøy komme – men aldri
          på bekostning av klarhet, struktur og reell nytte.
        </p>
      </section>

      <section className="about-section">
        <h2>Hva dette aldri skal bli</h2>
        <p>
          Aldri et buzzword-selskap som selger “features”. Aldri et system som
          tvinger brukeren til å jobbe på verktøyets premisser. Aldri et produkt
          som vokser i kompleksitet raskere enn i verdi. Aldri “Microsoft Project
          med bedre farger”.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;

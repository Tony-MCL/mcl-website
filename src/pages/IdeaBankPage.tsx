import React from "react";
import { Link } from "react-router-dom";

const IdeaBankPage: React.FC = () => {
  return (
    <main className="page services-page">
      {/* HERO */}
      <section className="fs-hero">
        <h1>Tjenester</h1>
        <p className="fs-tagline">
          To måter å bygge verdi på: enten en løsning på bestilling som kunden eier,
          eller en idé som kan bli til et MCL-produkt.
        </p>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" className="status-button" style={{ textDecoration: "none" }}>
            ← Tilbake til forsiden
          </Link>
          <Link
            to="/kontakt"
            className="status-button"
            style={{ textDecoration: "none" }}
          >
            Ta kontakt →
          </Link>
        </div>
      </section>

      {/* GENERELL INTRO (gjelder begge modeller) */}
      <section className="fs-section" style={{ maxWidth: 980 }}>
        <h2>Felles for begge</h2>
        <p>
          Morning Coffee Labs bygger digitale arbeidsverktøy med lav terskel og høy
          presisjon. Enten det gjelder bestillingsutvikling eller idébanken er målet
          det samme: tydelig struktur, forutsigbar funksjonalitet og løsninger som
          tåler reell bruk over tid.
        </p>
        <p>
          Vi starter alltid med å forstå arbeidsflyt, friksjon og ønsket effekt – og
          vi prioriterer det som gir praktisk verdi fremfor “features” og støy.
        </p>
      </section>

      {/* TO MODELLER – TO FLISER */}
      <section className="fs-layout">
        {/* BESTILLINGSUTVIKLING */}
        <div className="fs-product-card">
          <div className="fs-badge">Modell 1</div>
          <h2 style={{ marginTop: "0.4rem" }}>Bestillingsutvikling</h2>
          <p className="fs-product-lead">
            For bedrifter som trenger et konkret verktøy – levert mot avtalt betaling
            og overlevert som kundens eiendel.
          </p>

          <ul className="fs-product-list">
            <li>
              <strong>Behov → leveranse:</strong> dere beskriver mål, rammer og ønsket
              resultat
            </li>
            <li>
              <strong>Utvikling:</strong> leveres mot avtalt betaling og scope
            </li>
            <li>
              <strong>Eierskap:</strong> løsningen overleveres og eies av kunden
            </li>
          </ul>

          <p style={{ marginTop: "0.9rem" }}>
            Ved overlevering er løsningen kundens ansvar – på godt og vondt. En
            begrenset serviceperiode for feilretting/vedlikehold kan inngå, men
            langsiktig drift og videreutvikling bør normalt ligge hos kunden.
          </p>

          <div style={{ marginTop: "1rem" }}>
            <Link to="/kontakt">Ta kontakt om bestillingsutvikling →</Link>
          </div>
        </div>

        {/* IDÉBANKEN */}
        <div className="fs-product-card">
          <div className="fs-badge">Modell 2</div>
          <h2 style={{ marginTop: "0.4rem" }}>Idébanken</h2>
          <p className="fs-product-lead">
            For idéer som kan bli til et nytt MCL-produkt. Her er eierskap og risiko
            på MCL – og produktet kan senere tilbys som lisensiert løsning.
          </p>

          <ul className="fs-product-list">
            <li>
              <strong>Du deler en idé:</strong> problem, målgruppe og ønsket effekt
            </li>
            <li>
              <strong>Vi vurderer:</strong> praktisk nytte, lav terskel og produktretning
            </li>
            <li>
              <strong>Hvis idéen bygges:</strong> utvikles den som et MCL-produkt og
              lanseres
            </li>
          </ul>

          <p style={{ marginTop: "0.9rem" }}>
            Idébanken er ikke en bestilling og gir ingen garanti for at idéen blir
            realisert. Men hvis idéen faktisk ender som en lansert MCL-app, får
            idé-giver som takk <strong>livstidstilgang</strong> til produktet
            (gratis abonnement).
          </p>

          <div style={{ marginTop: "1rem" }}>
            <Link to="/kontakt">Send inn en idé via kontakt →</Link>
          </div>
        </div>
      </section>

      {/* HVA SOM GJØR EN IDÉ GOD */}
      <section className="fs-section" style={{ maxWidth: 980 }}>
        <h2>Hva som gjør en idé interessant</h2>
        <p>
          De beste idéene har lav terskel og høy verdi: et konkret problem, en tydelig
          brukergruppe og et resultat som kan dokumenteres.
        </p>
        <ul>
          <li>Beskriv dagens arbeidsflyt og hvor friksjonen oppstår</li>
          <li>Beskriv hva som må bli enklere eller tryggere</li>
          <li>Beskriv hvem som bruker verktøyet og i hvilken situasjon</li>
          <li>Beskriv hva som bør være “nok” – og hva som ikke trengs</li>
        </ul>

        <p style={{ marginTop: "0.9rem" }}>
          Ønsker du et eksempel på et MCL-produkt? <Link to="/progress">Se Progress →</Link>
        </p>
      </section>

      {/* LITEN LAYOUT-HJELP (uten å røre global CSS) */}
      <style>{`
        /* Two cards side-by-side on desktop, stacked on mobile */
        .fs-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          align-items: start;
          margin-top: 1.2rem;
        }
        @media (max-width: 900px) {
          .fs-layout {
            grid-template-columns: 1fr;
          }
        }
        .fs-product-card h2 {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </main>
  );
};

export default IdeaBankPage;

import React from "react";
import { Link } from "react-router-dom";

const IdeaBankPage: React.FC = () => {
  return (
    <main className="page services-page">
      {/* HERO */}
      <section className="fs-hero">
        <h1>Arbeidsmodeller</h1>
        <p className="fs-tagline" style={{ maxWidth: 900 }}>
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

      {/* INNHOLD I FLISER (ikke tekst rett på bakgrunnen) */}
      <section>
        <section className="intro-grid">
          {/* Intro / felles ramme – full bredde */}
          <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
            <h2 style={{ marginTop: 0 }}>To spor – samme prinsipper</h2>
            <p>
              Morning Coffee Labs bygger digitale arbeidsverktøy med lav terskel og høy
              presisjon. Enten det gjelder bestillingsutvikling eller idébanken er
              målet det samme: tydelig struktur, forutsigbar funksjonalitet og
              løsninger som tåler reell bruk over tid.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vi starter med å forstå arbeidsflyt, friksjon og ønsket effekt – og vi
              prioriterer det som gir praktisk verdi fremfor “features” og støy.
            </p>
          </div>

          {/* Modell 1 */}
          <div className="intro-card">
            <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>Modell 1</p>
            <h3 style={{ marginTop: "0.35rem" }}>Bestillingsutvikling</h3>
            <p>
              For bedrifter som trenger et konkret verktøy – levert mot avtalt betaling
              og overlevert som kundens eiendel.
            </p>

            <ul style={{ marginTop: "0.9rem" }}>
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
              Ved overlevering er løsningen kundens ansvar. En begrenset serviceperiode
              kan inngå, men langsiktig drift og videreutvikling bør normalt ligge hos
              kunden.
            </p>

            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/kontakt">Ta kontakt om bestillingsutvikling →</Link>
            </p>
          </div>

          {/* Modell 2 */}
          <div className="intro-card">
            <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>Modell 2</p>
            <h3 style={{ marginTop: "0.35rem" }}>Idébanken</h3>
            <p>
              For idéer som kan bli til et nytt MCL-produkt. Her er eierskap og risiko
              på MCL – og produktet kan senere tilbys som lisensiert løsning.
            </p>

            <ul style={{ marginTop: "0.9rem" }}>
              <li>
                <strong>Du deler en idé:</strong> problem, målgruppe og ønsket effekt
              </li>
              <li>
                <strong>Vi vurderer:</strong> praktisk nytte, lav terskel og produktretning
              </li>
              <li>
                <strong>Hvis idéen bygges:</strong> utvikles den som et MCL-produkt og lanseres
              </li>
            </ul>

            <p style={{ marginTop: "0.9rem" }}>
              Idébanken er ikke en bestilling og gir ingen garanti for realisering.
              Men hvis idéen ender som en lansert MCL-app, får idé-giver som takk{" "}
              <strong>livstidstilgang</strong> til produktet (gratis abonnement).
            </p>

            <p style={{ marginTop: "0.7rem" }}>
              <Link to="/kontakt">Send inn en idé via kontakt →</Link>
            </p>
          </div>

          {/* Hva som gjør en idé interessant – full bredde */}
          <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
            <h2 style={{ marginTop: 0 }}>Hva som gjør en idé interessant</h2>
            <p>
              De beste idéene har lav terskel og høy verdi: et konkret problem, en tydelig
              brukergruppe og et resultat som kan dokumenteres.
            </p>

            <ul style={{ marginTop: "0.9rem" }}>
              <li>Beskriv dagens arbeidsflyt og hvor friksjonen oppstår</li>
              <li>Beskriv hva som må bli enklere eller tryggere</li>
              <li>Beskriv hvem som bruker verktøyet – og i hvilken situasjon</li>
              <li>Beskriv hva som bør være “nok” – og hva som ikke trengs</li>
            </ul>

            <p style={{ marginTop: "0.9rem", marginBottom: 0 }}>
              Ønsker du et eksempel på et MCL-produkt? <Link to="/progress">Se Progress →</Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default IdeaBankPage;

import React from "react";
import { Link } from "react-router-dom";

const IdeaBankPage: React.FC = () => {
  return (
    <main className="page services-page">
      {/* HERO / INTRO (uten flis) */}
      <section className="fs-hero">
        <h1>Tjenester</h1>

        <p className="fs-tagline" style={{ maxWidth: 900 }}>
          Fra utfordringer til idéer – og videre til løsninger som tåler virkeligheten.
        </p>

        <p style={{ maxWidth: 980, marginTop: "0.9rem" }}>
          Morning Coffee Labs bygger digitale arbeidsverktøy med lav terskel og høy
          presisjon. Enten det gjelder bestillingsutvikling eller idébanken er målet
          det samme: tydelig struktur, forutsigbar funksjonalitet og løsninger som
          tåler reell bruk over tid.
        </p>

        <p style={{ maxWidth: 980 }}>
          Vi starter med et problem som faktisk koster tid, fokus eller kvalitet. Deretter gjør vi det om til en idé som kan testes og bygges.
          Til slutt leverer vi en løsning som er enkel å ta i bruk, lett å vedlikeholde – og tydelig i hva den gjør.
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

      {/* MODELLER + VIDERE INNHOLD (i fliser) */}
      <section className="intro-grid two-columns">
        {/* Modell 1 */}
        <div className="intro-card">
          <p className="model-label">Modell 1</p>
          <h3 style={{ marginTop: "0.35rem" }}>Bestillingsutvikling</h3>
          <p>
            For bedrifter som trenger et konkret verktøy – overlevert som kundens eiendel.
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
            Ved overlevering er løsningen kundens eiendom. En begrenset serviceperiode
            kan avtales, men ansvaret for langsiktig drift og eventuell videreutvikling vil normalt ligge hos
            kunden.
          </p>

          <p style={{ marginTop: "0.7rem" }}>
            <Link to="/kontakt">Ta kontakt om bestillingsutvikling →</Link>
          </p>
        </div>

        {/* Modell 2 */}
        <div className="intro-card">
          <p className="model-label">Modell 2</p>
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
              <strong>Hvis idéen bygges:</strong> utvikles den som et MCL-produkt og
              lanseres
            </li>
          </ul>

          <p style={{ marginTop: "0.9rem" }}>
            Idébanken er ikke en bestilling og gir ingen garanti for realisering. Men
            hvis idéen ender som en lansert MCL-app, får idé-giver som takk{" "}
            <strong>livstidstilgang</strong> til produktet (gratis abonnement).
          </p>

          <p style={{ marginTop: "0.7rem" }}>
            <a href="mailto:idebank@morningcoffeelabs.no">
              Send inn en idé → idebank@morningcoffeelabs.no
            </a>
          </p>
        </div>

        {/* Hva som gjør en idé interessant (full bredde flis) */}
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>Hva som gjør en idé interessant</h3>
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
    </main>
  );
};

export default IdeaBankPage;

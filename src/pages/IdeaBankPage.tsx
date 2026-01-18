import React from "react";
import { Link } from "react-router-dom";

const IdeaBankPage: React.FC = () => {
  return (
    <main className="page services-page">
      <section className="fs-hero">
        <h1>Idébanken</h1>
        <p className="fs-tagline">
          Et sted for idéer som fortjener å bli til verktøy. Noen idéer blir til
          produkter. Andre blir til løsninger på bestilling.
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

      <section className="fs-layout">
        {/* HOVEDINNHOLD */}
        <div className="fs-main">
          <section className="fs-section">
            <h2>To modeller</h2>
            <p>
              Morning Coffee Labs tilbyr to tydelige modeller – avhengig av om
              behovet er en <strong>bestilt løsning</strong> eller en{" "}
              <strong>idé som kan bli et produkt</strong>.
            </p>
          </section>

          <section className="fs-section">
            <h2>1) Bestillingsutvikling</h2>
            <p>
              Når en bedrift trenger en konkret app eller et internt verktøy,
              kan det bygges på bestilling. Modellen er enkel:
            </p>

            <ul>
              <li>Bedrift beskriver behovet og ønsket leveranse</li>
              <li>Utvikling leveres mot avtalt betaling</li>
              <li>Løsningen overleveres som kundens eiendel</li>
            </ul>

            <p>
              Ved overlevering er løsningen kundens ansvar – på godt og vondt.
              En begrenset serviceperiode for feilretting/vedlikehold kan inngå,
              men langsiktig drift og videreutvikling bør normalt ligge hos
              kunden.
            </p>
          </section>

          <section className="fs-section">
            <h2>2) Idébanken</h2>
            <p>
              Idébanken er for idéer som kan bli til et nytt MCL-produkt.
              Forskjellen er eierskap og risiko:
            </p>

            <ul>
              <li>En idé deles (problem, målgruppe, ønsket effekt)</li>
              <li>Idéen vurderes opp mot praktisk nytte og produktretning</li>
              <li>Hvis idéen bygges, utvikles den som et MCL-produkt</li>
              <li>Produktet lanseres og selges som lisensiert løsning</li>
            </ul>

            <p>
              Den som donerer idéen får som takk{" "}
              <strong>livstidstilgang til produktet</strong> (gratis abonnement),
              dersom idéen faktisk ender som lansert MCL-app.
            </p>

            <p>
              Dette er ikke en bestilling, og gir ingen garanti for at idéen
              realiseres. Idébanken er et rom for gode forslag – og en måte å
              bygge produkter med ekte forankring i reelle arbeidsbehov.
            </p>
          </section>

          <section className="fs-section">
            <h2>Hva som gjør en idé interessant</h2>
            <p>
              De beste idéene har lav terskel og høy verdi: et konkret problem,
              en tydelig brukergruppe og et resultat som kan dokumenteres.
            </p>
            <ul>
              <li>Beskriv dagens arbeidsflyt og hvor friksjonen oppstår</li>
              <li>Beskriv hva som må bli enklere eller tryggere</li>
              <li>Beskriv hvem som bruker verktøyet og i hvilken situasjon</li>
              <li>Beskriv hva som bør være “nok” – og hva som ikke trengs</li>
            </ul>
          </section>

          <section className="fs-section">
            <h2>Del en idé</h2>
            <p>
              En kort beskrivelse er nok til å starte: problem, målgruppe og
              ønsket effekt. Resten kan konkretiseres i dialog.
            </p>

            <p style={{ marginTop: "0.8rem" }}>
              <Link to="/kontakt">Send idé via kontakt →</Link>
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="fs-side">
          <div className="fs-product-card">
            <div className="fs-badge">Kort oppsummert</div>
            <h3>Hvilken modell passer?</h3>

            <ul className="fs-product-list">
              <li>
                <strong>Bestillingsutvikling:</strong> kundeeid løsning, betalt
                utvikling, overlevering til kunden
              </li>
              <li>
                <strong>Idébanken:</strong> MCL-eid produkt, lisensiert salg,
                idé-giver får livstidstilgang ved lansering
              </li>
            </ul>

            <div className="fs-note" style={{ marginTop: "0.9rem" }}>
              Ønskes et eksempel på et MCL-produkt?
              <div style={{ marginTop: "0.6rem" }}>
                <Link to="/progress">Se Progress →</Link>
              </div>
            </div>
          </div>

          <div className="fs-product-card" style={{ marginTop: "1.2rem" }}>
            <div className="fs-badge">Forventninger</div>
            <h3>Hva idébanken ikke er</h3>
            <p className="fs-product-lead">
              Idébanken er ikke en bestillingsportal, og idéer garanteres ikke
              utviklet.
            </p>
            <ul className="fs-product-list">
              <li>Ingen løfte om levering eller tidsplan</li>
              <li>Ingen kundespesifikk skreddersøm</li>
              <li>Fokus på produkter som tåler bred bruk</li>
            </ul>

            <div className="fs-note" style={{ marginTop: "0.9rem" }}>
              Trengs en løsning med eierskap og overlevering?
              <div style={{ marginTop: "0.6rem" }}>
                <Link to="/tjenester">Se bestillingsutvikling →</Link>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default IdeaBankPage;

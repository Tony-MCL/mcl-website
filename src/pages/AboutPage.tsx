import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <main className="page about-page">
      {/* HERO */}
      <section className="fs-hero">
        <h1>Om Morning Coffee Labs</h1>

        <p className="fs-tagline" style={{ maxWidth: 980 }}>
          Et lite produktverksted som lager digitale arbeidsverktøy – med lav terskel,
          høy presisjon og respekt for hvordan arbeid faktisk gjøres.
        </p>
      </section>

      {/* CONTENT (fliser) */}
      <section className="intro-grid two-columns">
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>Hvordan dette startet</h2>
          <p>
            Morning Coffee Labs ble til av et ganske enkelt behov: å få bedre flyt og
            bedre oversikt i arbeid som ofte er komplekst, fullt av avhengigheter – og
            hvor endringer skjer underveis. Vi tror ikke at mer “system” alltid gir
            mer kontroll. Ofte er det motsatt: kontroll kommer av tydelige valg,
            forutsigbarhet og verktøy som ikke står i veien.
          </p>
          <p style={{ marginBottom: 0 }}>
            Derfor bygger vi heller få ting skikkelig, enn mange ting halvveis. Som et
            verksted – ikke som en fabrikk.
          </p>
        </div>

        <div className="intro-card">
          <h3>Et verksted, ikke en fabrikk</h3>
          <p>
            Vi bygger med samme tankesett som i godt fagarbeid: det skal tåle bruk,
            tåle tid og være lett å forstå. Tempoet kan være høyt, men retningen er
            stabil: lav terskel, høy presisjon og null toleranse for støy.
          </p>
          <p style={{ marginBottom: 0 }}>
            Når vi legger til noe, skal det gjøre jobben enklere – ikke bare gi flere
            knapper.
          </p>
        </div>

        <div className="intro-card">
          <h3>Kvalitet betyr kontroll</h3>
          <p>
            For oss handler kvalitet mer om kontroll enn om perfeksjon: kontroll på
            data, flyt, eierskap og konsekvens. Samme handling skal gi samme resultat.
            Det som lagres, skal kunne forklares. Og det som vises, skal være mulig å
            stole på.
          </p>
          <p style={{ marginBottom: 0 }}>
            Vi prioriterer robusthet foran “smart” magi som virker – helt til det ikke
            gjør det.
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>Prinsippene våre</h2>
          <p>
            Vi har noen enkle prinsipper som går igjen i alt vi lager. De er ikke
            “fine ord” – de er arbeidsregler:
          </p>
          <ul style={{ marginTop: "0.8rem" }}>
            <li>
              <strong>Én kilde til sannhet:</strong> ingen dobbeltlogikk, ingen skjulte
              avvik.
            </li>
            <li>
              <strong>Forutsigbarhet foran wow:</strong> design og teknikk må henge
              sammen – ellers bygges det ikke.
            </li>
            <li>
              <strong>Respekt for tid og hode:</strong> alt som stjeler fokus uten å gi
              verdi regnes som en feil.
            </li>
            <li>
              <strong>Bygget for ekte arbeid:</strong> også når det skal printes,
              dokumenteres og etterprøves.
            </li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Resultatet skal føles rolig: <em>“det bare fungerer.”</em>
          </p>
        </div>

        <section className="intro-grid two-columns">
          <h3>Hva vi leverer</h3>
          <p>
            Vi bygger egne produkter – og vi kan også bygge løsninger på bestilling.
            Fellesnevneren er alltid den samme: tydelig struktur, lav friksjon og
            praktisk nytte.
          </p>
          <p style={{ marginBottom: 0 }}>
            Vil du lese mer om hvordan vi jobber? <Link to="/idebank">Se arbeidsmodeller →</Link>
          </p>
        </div>

        <div className="intro-card">
          <h3>Produkter og retning</h3>
          <p>
            Første produkt ut er <strong>Manage Progress</strong>: en ren Gantt-app med
            lav terskel og høy presisjon. Over tid kan flere verktøy komme – men aldri
            på bekostning av klarhet, struktur og reell nytte.
          </p>
          <p style={{ marginBottom: 0 }}>
            Se produktet her: <Link to="/progress">Manage Progress →</Link>
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>Hva dette aldri skal bli</h2>
          <p>
            Vi prøver bevisst å styre unna noen klassiske feller:
          </p>
          <ul style={{ marginTop: "0.8rem" }}>
            <li>Et buzzword-selskap som selger “features” uten verdi.</li>
            <li>Et system som tvinger brukeren til å jobbe på verktøyets premisser.</li>
            <li>Et produkt som vokser i kompleksitet raskere enn i nytte.</li>
            <li>“Microsoft Project med bedre farger.”</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Vi vil heller være lille og presise, enn store og uklare.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

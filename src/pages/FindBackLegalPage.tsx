import React from "react";
import { useI18n } from "../i18n/useI18n";

type LegalType = "privacy" | "terms";

type Props = {
  type: LegalType;
};

type Section = {
  title: string;
  body?: string;
  lead?: string;
  bullets?: string[];
};

type LegalDocument = {
  title: string;
  intro: string;
  sections: Section[];
};

const legalContent: Record<"no" | "en", Record<LegalType, LegalDocument>> = {
  no: {
    privacy: {
      title: "Personvern for FindBack",
      intro:
        "Denne personvernerklæringen beskriver hvordan FindBack håndterer posisjonsdata og annen informasjon når du bruker appen.",
      sections: [
        {
          title: "1. Behandlingsansvarlig",
          body:
            "Mathisens Morning Coffee Labs er behandlingsansvarlig for personopplysninger som eventuelt behandles i forbindelse med FindBack.",
        },
        {
          title: "2. Posisjonstilgang",
          body:
            "FindBack ber om tilgang til enhetens posisjon når du velger å lagre stedet du befinner deg på. Posisjonstilgangen brukes kun for å hente koordinatene som skal lagres i appen.",
        },
        {
          title: "3. Lokal lagring",
          body:
            "Den lagrede posisjonen oppbevares lokalt på enheten din. FindBack har ingen konto, ingen skylagring og ingen synkronisering. Morning Coffee Labs mottar ikke den lagrede posisjonen.",
        },
        {
          title: "4. Ingen analyse, annonser eller sporing",
          body:
            "FindBack bruker ikke analyseverktøy, annonsetjenester eller sporingsteknologi. Appen samler ikke inn informasjon om hvordan du bruker den.",
        },
        {
          title: "5. Karttjenester",
          body:
            "Når du velger å finne tilbake, åpner FindBack den lagrede posisjonen i en kartapp på enheten din. Kartappen leveres av en tredjepart, for eksempel Apple eller Google, og behandlingen av opplysninger i kartappen reguleres av den aktuelle leverandørens personvernregler.",
        },
        {
          title: "6. Sletting",
          body:
            "En ny lagret posisjon erstatter den forrige. Den lokalt lagrede posisjonen slettes også når appens data slettes eller appen avinstalleres, avhengig av hvordan enheten håndterer lokal appdata.",
        },
        {
          title: "7. Barn",
          body:
            "FindBack er ikke laget for å samle inn personopplysninger fra barn og inneholder ingen konto, kommunikasjon eller deling mellom brukere.",
        },
        {
          title: "8. Endringer",
          body:
            "Personvernerklæringen kan bli oppdatert dersom funksjonaliteten i FindBack endres. Gjeldende versjon vil alltid være tilgjengelig på denne siden.",
        },
        {
          title: "9. Kontakt",
          body:
            "Spørsmål om FindBack eller personvern kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Brukervilkår for FindBack",
      intro:
        "Disse brukervilkårene gjelder for bruk av FindBack, levert av Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Bruk av appen",
          body:
            "FindBack gir deg en personlig, ikke-overførbar rett til å bruke appen i samsvar med funksjonaliteten som tilbys i den aktuelle versjonen. Appen skal ikke videreselges, redistribueres eller brukes i strid med gjeldende lovverk.",
        },
        {
          title: "2. Hva FindBack gjør",
          body:
            "FindBack lagrer én posisjon lokalt på enheten din og kan åpne denne posisjonen i en kartapp. Når du lagrer en ny posisjon, erstattes den tidligere lagrede posisjonen.",
        },
        {
          title: "3. Posisjonsnøyaktighet",
          body:
            "Nøyaktigheten avhenger blant annet av enheten, GPS-signalet, omgivelsene og tilgjengelige posisjonstjenester. Vi kan ikke garantere at en lagret posisjon alltid er fullstendig nøyaktig.",
        },
        {
          title: "4. Kart og navigasjon",
          body:
            "FindBack utfører ikke navigasjon. Når du åpner en lagret posisjon, overtar en ekstern kartapp. Kart, rutevalg, trafikkdata og navigasjonsveiledning leveres av kartleverandøren og er underlagt leverandørens egne vilkår.",
        },
        {
          title: "5. Brukerens ansvar",
          body:
            "Du er selv ansvarlig for å vurdere om posisjonen, kartet, ruten og forholdene rundt deg er trygge. FindBack er et hjelpemiddel og skal ikke brukes som eneste grunnlag i situasjoner der feil posisjon kan medføre fare, skade eller tap.",
        },
        {
          title: "6. Tilgjengelighet og endringer",
          body:
            "Vi tilstreber at FindBack fungerer stabilt, men kan ikke garantere at appen alltid er tilgjengelig eller feilfri. Appen kan oppdateres, forbedres eller endres over tid.",
        },
        {
          title: "7. Ansvarsbegrensning",
          body:
            "FindBack leveres som den er. Så langt loven tillater det, er Morning Coffee Labs ikke ansvarlig for indirekte tap, tap av data, feilnavigering eller andre følgeskader som oppstår ved bruk av appen eller tredjeparts karttjenester.",
        },
        {
          title: "8. Kontakt",
          body:
            "Spørsmål om appen eller disse vilkårene kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy for FindBack",
      intro:
        "This privacy policy explains how FindBack handles location data and other information when you use the app.",
      sections: [
        {
          title: "1. Data controller",
          body:
            "Mathisens Morning Coffee Labs is the data controller for any personal data processed in connection with FindBack.",
        },
        {
          title: "2. Location access",
          body:
            "FindBack requests access to your device location when you choose to save where you are. Location access is used only to retrieve the coordinates that will be stored in the app.",
        },
        {
          title: "3. Local storage",
          body:
            "The saved position is stored locally on your device. FindBack has no account, cloud storage, or synchronization. Morning Coffee Labs does not receive the saved position.",
        },
        {
          title: "4. No analytics, advertising, or tracking",
          body:
            "FindBack does not use analytics tools, advertising services, or tracking technology. The app does not collect information about how you use it.",
        },
        {
          title: "5. Map services",
          body:
            "When you choose to find your way back, FindBack opens the saved position in a map app on your device. The map app is provided by a third party, such as Apple or Google, and its handling of information is governed by that provider's privacy policy.",
        },
        {
          title: "6. Deletion",
          body:
            "Saving a new position replaces the previous one. The locally stored position is also removed when the app data is cleared or the app is uninstalled, depending on how your device handles local app data.",
        },
        {
          title: "7. Children",
          body:
            "FindBack is not designed to collect personal data from children and contains no account, communication, or sharing between users.",
        },
        {
          title: "8. Changes",
          body:
            "This privacy policy may be updated if FindBack's functionality changes. The current version will always be available on this page.",
        },
        {
          title: "9. Contact",
          body:
            "Questions about FindBack or privacy may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Terms of Use for FindBack",
      intro:
        "These terms of use apply to FindBack, provided by Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Use of the app",
          body:
            "FindBack gives you a personal, non-transferable right to use the app according to the functionality offered in the current version. The app must not be resold, redistributed, or used in violation of applicable law.",
        },
        {
          title: "2. What FindBack does",
          body:
            "FindBack stores one position locally on your device and can open that position in a map app. Saving a new position replaces the previously saved position.",
        },
        {
          title: "3. Location accuracy",
          body:
            "Accuracy depends on factors including the device, GPS signal, surroundings, and available location services. We cannot guarantee that a saved position will always be completely accurate.",
        },
        {
          title: "4. Maps and navigation",
          body:
            "FindBack does not provide navigation. When you open a saved position, an external map app takes over. Maps, routes, traffic data, and navigation guidance are provided by the map provider and are subject to that provider's own terms.",
        },
        {
          title: "5. Your responsibility",
          body:
            "You are responsible for deciding whether the position, map, route, and surrounding conditions are safe. FindBack is a convenience tool and must not be used as the sole basis in situations where an incorrect position could lead to danger, injury, or loss.",
        },
        {
          title: "6. Availability and changes",
          body:
            "We aim for FindBack to work reliably, but we cannot guarantee that the app will always be available or error-free. The app may be updated, improved, or changed over time.",
        },
        {
          title: "7. Limitation of liability",
          body:
            "FindBack is provided as is. To the extent permitted by law, Morning Coffee Labs is not liable for indirect losses, loss of data, incorrect navigation, or other consequential damages arising from use of the app or third-party map services.",
        },
        {
          title: "8. Contact",
          body:
            "Questions about the app or these terms may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
  },
};

const FindBackLegalPage: React.FC<Props> = ({ type }) => {
  const { lang } = useI18n();
  const document = legalContent[lang][type];

  return (
    <main className="page legal-page findback-legal-page">
      <section className="fs-hero">
        <h1>{document.title}</h1>
        <p className="fs-tagline">{document.intro}</p>
      </section>

      <section className="legal-content-card">
        {document.sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.lead ? <p>{section.lead}</p> : null}
            {Array.isArray(section.bullets) ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </section>
    </main>
  );
};

export default FindBackLegalPage;

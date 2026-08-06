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
      title: "Personvern for Fury O",
      intro:
        "Denne personvernerklæringen beskriver hvordan Fury O håndterer informasjon når du bruker spillet.",
      sections: [
        {
          title: "1. Behandlingsansvarlig",
          body:
            "Mathisens Morning Coffee Labs er behandlingsansvarlig for personopplysninger som eventuelt behandles i forbindelse med Fury O.",
        },
        {
          title: "2. Lokal spilldata",
          body:
            "Fury O lagrer spilldata som high score og enkelte innstillinger lokalt på enheten din. Denne informasjonen brukes for at spillet skal kunne huske fremdrift og innstillinger mellom spilløkter.",
        },
        {
          title: "3. Annonser",
          body:
            "Fury O viser annonser, inkludert bannerannonser og belønnede annonser som du selv kan velge å se for å få en fordel i spillet, for eksempel en ekstra sjanse til å fortsette en runde. Annonser leveres av tredjeparts annonsetjenester. Disse leverandørene kan behandle teknisk informasjon om enheten, annonsevisninger, interaksjoner og andre opplysninger i samsvar med sine egne personvernregler og gjeldende samtykkekrav.",
        },
        {
          title: "4. Samtykke og annonseinnstillinger",
          body:
            "Der lovverket krever det, vil nødvendig samtykke eller valg knyttet til personlig tilpassede annonser håndteres gjennom løsningen som tilbys av annonseleverandøren eller plattformen. Du kan få andre annonsevalg avhengig av enhet, region og plattform.",
        },
        {
          title: "5. Konto og skylagring",
          body:
            "Fury O krever ikke brukerregistrering eller innlogging. Med mindre en senere versjon uttrykkelig opplyser om noe annet, lagres ikke high score eller annen vanlig spillfremdrift i en konto eller Morning Coffee Labs-sky.",
        },
        {
          title: "6. Tredjepartstjenester",
          body:
            "Spillet kan bruke tjenester levert av blant andre Apple, Google og valgt annonseleverandør for distribusjon, betaling, annonsering, samtykke eller andre tekniske funksjoner. Opplysninger som behandles direkte av slike tjenester reguleres av den aktuelle leverandørens egne vilkår og personvernregler.",
        },
        {
          title: "7. Barn",
          body:
            "Fury O er et enkelt arkadespill og inneholder ingen åpen chat eller direkte kommunikasjon mellom brukere. Dersom spillet brukes av barn, kan enkelte tredjepartstjenester likevel behandle tekniske data som beskrevet ovenfor. Vi følger de kravene til annonsering og samtykke som gjelder for distribusjonsplattformene og annonsetjenestene vi bruker.",
        },
        {
          title: "8. Sletting",
          body:
            "Lokal spilldata kan normalt fjernes ved å slette appdata eller avinstallere spillet, avhengig av hvordan enheten og plattformen håndterer lokal appdata. Opplysninger som eventuelt behandles av tredjepartstjenester må håndteres i samsvar med den aktuelle leverandørens løsninger og personvernregler.",
        },
        {
          title: "9. Endringer",
          body:
            "Personvernerklæringen kan bli oppdatert dersom funksjonaliteten i Fury O eller tjenestene spillet bruker endres. Gjeldende versjon vil alltid være tilgjengelig på denne siden.",
        },
        {
          title: "10. Kontakt",
          body:
            "Spørsmål om Fury O eller personvern kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Brukervilkår for Fury O",
      intro:
        "Disse brukervilkårene gjelder for bruk av Fury O, levert av Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Bruk av spillet",
          body:
            "Fury O gir deg en personlig, ikke-overførbar rett til å bruke spillet i samsvar med funksjonaliteten som tilbys i den aktuelle versjonen. Spillet skal ikke videreselges, redistribueres, manipuleres eller brukes i strid med gjeldende lovverk.",
        },
        {
          title: "2. Spillopplevelse og score",
          body:
            "Fury O er et arkadespill der score, high score, vanskelighetsgrad og annen spillfremdrift kan påvirkes av oppdateringer, balansering og tekniske endringer. Vi garanterer ikke at bestemte scorer, rekorder, nivåer eller spillmekanikker forblir uendret for alltid.",
        },
        {
          title: "3. Lokal lagring",
          body:
            "Enkelte opplysninger, som high score og innstillinger, kan lagres lokalt på enheten. Lokal data kan gå tapt ved avinstallering, sletting av appdata, enhetsbytte, feil eller andre forhold. Morning Coffee Labs garanterer ikke gjenoppretting av lokalt lagrede data.",
        },
        {
          title: "4. Annonser og belønnede annonser",
          body:
            "Fury O kan vise bannerannonser og belønnede annonser. Belønnede annonser er valgfrie og kan gi en fordel i spillet, for eksempel mulighet til å fortsette etter Game Over. Tilgjengeligheten av annonser og belønninger kan variere etter region, enhet, nettverk, annonsetilbud og tredjepartstjenester.",
        },
        {
          title: "5. Tredjepartstjenester",
          body:
            "Fury O distribueres gjennom tredjepartsplattformer og kan bruke tjenester fra blant andre Apple, Google og annonseleverandører. Bruk av slike tjenester kan også være underlagt leverandørenes egne vilkår.",
        },
        {
          title: "6. Tilgjengelighet og endringer",
          body:
            "Vi tilstreber at Fury O fungerer stabilt, men kan ikke garantere at spillet alltid er tilgjengelig, feilfritt eller kompatibelt med alle enheter. Spillet kan oppdateres, forbedres, balanseres, endres eller avvikles over tid.",
        },
        {
          title: "7. Brukerens ansvar",
          body:
            "Du er selv ansvarlig for hvordan og når du bruker spillet. Fury O skal ikke brukes på en måte som distraherer deg under bilkjøring, sykling, arbeid med maskiner eller andre aktiviteter der oppmerksomheten bør være rettet mot sikkerhet.",
        },
        {
          title: "8. Ansvarsbegrensning",
          body:
            "Fury O leveres som den er. Så langt loven tillater det, er Morning Coffee Labs ikke ansvarlig for indirekte tap, tap av lokal spilldata, avbrudd, manglende annonsetilgjengelighet eller andre følgeskader som oppstår ved bruk av spillet eller tredjepartstjenester.",
        },
        {
          title: "9. Endringer i vilkårene",
          body:
            "Disse vilkårene kan oppdateres dersom Fury O eller tjenestene spillet bruker endres. Gjeldende versjon vil alltid være tilgjengelig på denne siden.",
        },
        {
          title: "10. Kontakt",
          body:
            "Spørsmål om spillet eller disse vilkårene kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy for Fury O",
      intro:
        "This privacy policy explains how Fury O handles information when you use the game.",
      sections: [
        {
          title: "1. Data controller",
          body:
            "Mathisens Morning Coffee Labs is the data controller for any personal data processed in connection with Fury O.",
        },
        {
          title: "2. Local game data",
          body:
            "Fury O stores game data such as high scores and certain settings locally on your device. This information is used so the game can remember progress and settings between play sessions.",
        },
        {
          title: "3. Advertising",
          body:
            "Fury O displays advertising, including banner ads and rewarded ads that you may choose to watch in exchange for an in-game benefit, such as an additional chance to continue a run. Ads are provided by third-party advertising services. These providers may process technical information about your device, ad impressions, interactions, and other information in accordance with their own privacy policies and applicable consent requirements.",
        },
        {
          title: "4. Consent and ad preferences",
          body:
            "Where required by law, consent or choices relating to personalized advertising will be handled through the solution provided by the advertising provider or platform. Available advertising choices may vary depending on your device, region, and platform.",
        },
        {
          title: "5. Accounts and cloud storage",
          body:
            "Fury O does not require user registration or sign-in. Unless a later version explicitly states otherwise, high scores and ordinary game progress are not stored in a Morning Coffee Labs account or cloud service.",
        },
        {
          title: "6. Third-party services",
          body:
            "The game may use services provided by Apple, Google, and the selected advertising provider for distribution, payments, advertising, consent management, or other technical functions. Information processed directly by these services is governed by the relevant provider's own terms and privacy policy.",
        },
        {
          title: "7. Children",
          body:
            "Fury O is a simple arcade game and does not contain open chat or direct communication between users. If the game is used by children, some third-party services may still process technical data as described above. We follow the advertising and consent requirements that apply to the distribution platforms and advertising services we use.",
        },
        {
          title: "8. Deletion",
          body:
            "Local game data can generally be removed by clearing the app's data or uninstalling the game, depending on how your device and platform handle local app data. Information processed by third-party services must be handled through the relevant provider's tools and privacy practices.",
        },
        {
          title: "9. Changes",
          body:
            "This privacy policy may be updated if Fury O's functionality or the services used by the game change. The current version will always be available on this page.",
        },
        {
          title: "10. Contact",
          body:
            "Questions about Fury O or privacy may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Terms of Use for Fury O",
      intro:
        "These terms of use apply to Fury O, provided by Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Use of the game",
          body:
            "Fury O gives you a personal, non-transferable right to use the game according to the functionality offered in the current version. The game must not be resold, redistributed, manipulated, or used in violation of applicable law.",
        },
        {
          title: "2. Gameplay and scores",
          body:
            "Fury O is an arcade game in which scores, high scores, difficulty, and other game progression may be affected by updates, balancing, and technical changes. We do not guarantee that particular scores, records, levels, or gameplay mechanics will remain unchanged indefinitely.",
        },
        {
          title: "3. Local storage",
          body:
            "Certain information, such as high scores and settings, may be stored locally on your device. Local data may be lost if the app is uninstalled, app data is cleared, the device is replaced, an error occurs, or for other reasons. Morning Coffee Labs does not guarantee recovery of locally stored data.",
        },
        {
          title: "4. Advertising and rewarded ads",
          body:
            "Fury O may display banner ads and rewarded ads. Rewarded ads are optional and may provide an in-game benefit, such as the opportunity to continue after Game Over. The availability of ads and rewards may vary by region, device, network, ad inventory, and third-party services.",
        },
        {
          title: "5. Third-party services",
          body:
            "Fury O is distributed through third-party platforms and may use services from providers including Apple, Google, and advertising providers. Use of those services may also be subject to the provider's own terms.",
        },
        {
          title: "6. Availability and changes",
          body:
            "We aim for Fury O to work reliably, but we cannot guarantee that the game will always be available, error-free, or compatible with every device. The game may be updated, improved, rebalanced, changed, or discontinued over time.",
        },
        {
          title: "7. Your responsibility",
          body:
            "You are responsible for when and how you use the game. Fury O must not be used in a way that distracts you while driving, cycling, operating machinery, or during other activities where your attention should be focused on safety.",
        },
        {
          title: "8. Limitation of liability",
          body:
            "Fury O is provided as is. To the extent permitted by law, Morning Coffee Labs is not liable for indirect losses, loss of local game data, interruptions, unavailable advertising, or other consequential damages arising from use of the game or third-party services.",
        },
        {
          title: "9. Changes to these terms",
          body:
            "These terms may be updated if Fury O or the services used by the game change. The current version will always be available on this page.",
        },
        {
          title: "10. Contact",
          body:
            "Questions about the game or these terms may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
  },
};

const FuryOLegalPage: React.FC<Props> = ({ type }) => {
  const { lang } = useI18n();
  const document = legalContent[lang][type];

  return (
    <main className="page legal-page fury-o-legal-page">
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

export default FuryOLegalPage;

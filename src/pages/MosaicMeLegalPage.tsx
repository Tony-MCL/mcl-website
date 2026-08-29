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
      title: "Personvern for Mosaic ME",
      intro:
        "Denne personvernerklæringen beskriver hvordan Mosaic ME lagrer og behandler informasjon når du bruker appen, oppretter konto, finner venner og deler alterinformasjon.",
      sections: [
        {
          title: "1. Behandlingsansvarlig",
          body:
            "Mathisens Morning Coffee Labs er behandlingsansvarlig for personopplysninger som behandles i forbindelse med Mosaic ME.",
        },
        {
          title: "2. Lokal lagring",
          body:
            "Mosaic ME er bygget med lokal lagring som utgangspunkt. Kjerneinformasjon som alters, fronting, historikk og journal lagres lokalt på enheten. Disse lokale dataene blir ikke automatisk knyttet til Firebase-kontoen din og blir ikke automatisk lastet opp til skyen.",
        },
        {
          title: "3. Konto og innlogging",
          body:
            "Hvis du oppretter en konto, brukes Firebase Authentication til innlogging. Kontoopplysninger omfatter blant annet e-postadresse, bruker-ID og visningsnavn. Kontoen brukes til nettfunksjoner som vennesøk og deling.",
        },
        {
          title: "4. Vennesøk",
          body:
            "For at andre innloggede Mosaic ME-brukere skal kunne finne deg som venn, lagres et begrenset sett med opplysninger i en egen brukerkatalog. Denne katalogen inneholder opplysninger som er nødvendige for vennesøk, som bruker-ID, e-postadresse og visningsnavn. Katalogen er bare tilgjengelig for autentiserte brukere.",
        },
        {
          title: "5. Vennskap og deling",
          body:
            "Når du sender eller godtar en venneforespørsel, lagres vennskapsinformasjon i Firebase. Når du aktivt velger å dele et alter, lagres den delbare alterinformasjonen som er nødvendig for at mottakeren skal kunne se den. Private alterdata, journal og interne notater skal ikke inngå i delingen.",
        },
        {
          title: "6. Avatarer",
          body:
            "Hvis du bruker et bilde som alter-avatar, lagres originalen som del av appens lokale data. Når du velger å dele et alter, kan en avatar som er nødvendig for delingen lastes opp til Firebase Storage slik at mottakeren kan se den. Tilgang og sletting styres av appens sikkerhetsregler og delingslogikk.",
        },
        {
          title: "7. Skybackup og Mosaic Cloud",
          body:
            "Mosaic ME har teknisk støtte for skybackup og gjenoppretting, men Mosaic Cloud er ikke aktivert som offentlig tjeneste i versjon 1.0. Lokal informasjon skal derfor ikke anses som sikkerhetskopiert til skyen med mindre appen senere uttrykkelig viser at Mosaic Cloud er aktivert for brukeren.",
        },
        {
          title: "8. Tjenesteleverandører",
          body:
            "Mosaic ME bruker Google Firebase til autentisering, databasefunksjoner og lagring som støtter konto, vennskap og deling. Behandling som utføres av Google som underleverandør er også underlagt deres relevante vilkår og personvernregler.",
        },
        {
          title: "9. Sletting av konto",
          body:
            "Du kan slette Mosaic ME-kontoen fra appen. Ved kontosletting forsøker appen å fjerne kontoprofil, brukerkatalogoppføring, vennskap, delinger, skybackupdata og eide avatarfiler før selve Firebase-kontoen slettes. Lokale Mosaic ME-data på enheten slettes ikke automatisk når kontoen slettes.",
        },
        {
          title: "10. Lokal sletting",
          body:
            "Lokale data håndteres på enheten. Avinstallering av appen eller sletting av appdata kan fjerne lokale data avhengig av hvordan operativsystemet håndterer appens lagring. Brukeren bør bruke eksportfunksjonen dersom en kopi av lokale data skal bevares utenfor appen.",
        },
        {
          title: "11. Ingen annonsering eller salg av personopplysninger",
          body:
            "Mosaic ME selger ikke personopplysninger. Versjon 1.0 er ikke basert på annonseprofilering eller salg av brukerdata.",
        },
        {
          title: "12. Barn",
          body:
            "Mosaic ME er ikke utviklet med det formål å samle inn personopplysninger fra barn. Dersom bruk av appen av en mindreårig krever samtykke etter gjeldende lov, er brukeren eller foresatt ansvarlig for at dette foreligger.",
        },
        {
          title: "13. Endringer",
          body:
            "Denne personvernerklæringen kan bli oppdatert dersom Mosaic ME får ny funksjonalitet, nye integrasjoner eller endret databehandling. Gjeldende versjon vil være tilgjengelig på denne siden.",
        },
        {
          title: "14. Kontakt",
          body:
            "Spørsmål om Mosaic ME, personvern eller sletting av data kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Brukervilkår for Mosaic ME",
      intro:
        "Disse brukervilkårene gjelder for bruk av Mosaic ME, levert av Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Bruk av appen",
          body:
            "Mosaic ME gir deg en personlig, ikke-overførbar rett til å bruke appen i samsvar med funksjonaliteten som tilbys i den aktuelle versjonen. Appen skal ikke videreselges, redistribueres eller brukes i strid med gjeldende lovverk.",
        },
        {
          title: "2. Formål og avgrensning",
          body:
            "Mosaic ME er et personlig organiserings- og kommunikasjonsverktøy for plural-systemer. Appen er ikke en medisinsk tjeneste, terapiplattform, diagnostisk tjeneste eller erstatning for profesjonell helsehjelp.",
        },
        {
          title: "3. Lokale data og ansvar for sikkerhetskopi",
          body:
            "Kjerneinformasjon lagres lokalt på enheten. Du er ansvarlig for å eksportere eller på annen måte sikre data du ikke ønsker å miste. Morning Coffee Labs kan ikke garantere gjenoppretting av lokale data som går tapt ved sletting, avinstallering, enhetsfeil eller andre lokale hendelser.",
        },
        {
          title: "4. Konto og nettfunksjoner",
          body:
            "En konto er nødvendig for enkelte nettfunksjoner, blant annet vennesøk og deling. Du er ansvarlig for å oppgi korrekte kontoopplysninger, beskytte passordet ditt og bruke kontoen på en lovlig måte.",
        },
        {
          title: "5. Deling",
          body:
            "Du velger selv om et alter skal deles og med hvem. Du er ansvarlig for at informasjon du deler kan deles med den valgte mottakeren. Ikke legg inn eller del informasjon du ikke har rett til å behandle eller videreformidle.",
        },
        {
          title: "6. Vennskap og mottatt informasjon",
          body:
            "Informasjon du mottar fra andre brukere gjennom Mosaic ME er gjort tilgjengelig av den aktuelle brukeren. Du skal behandle delt informasjon på en respektfull og lovlig måte og ikke bruke appen til trakassering, misbruk eller uautorisert videreformidling.",
        },
        {
          title: "7. Tredjepartstjenester",
          body:
            "Mosaic ME bruker tredjepartstjenester, blant annet Google Firebase, for konto-, database- og lagringsfunksjoner. Tilgjengelighet og enkelte deler av funksjonaliteten kan derfor påvirkes av disse tjenestene og deres vilkår.",
        },
        {
          title: "8. Tilgjengelighet og endringer",
          body:
            "Vi tilstreber at Mosaic ME fungerer stabilt, men kan ikke garantere at appen alltid er tilgjengelig, feilfri eller kompatibel med alle fremtidige operativsystemversjoner. Appen og nettfunksjonene kan oppdateres, forbedres eller endres over tid.",
        },
        {
          title: "9. Betaling og fremtidige tjenester",
          body:
            "Kjernefunksjonaliteten i Mosaic ME er gratis i versjon 1.0. Betalte tjenester, som Mosaic Cloud eller frivillig støtte, kan innføres senere. Dersom slike tjenester tilbys, skal pris og hva som eventuelt inngår fremgå tydelig før kjøp.",
        },
        {
          title: "10. Misbruk og stenging",
          body:
            "Vi kan begrense eller avslutte tilgang til nettfunksjoner ved alvorlig misbruk, ulovlig bruk, forsøk på å omgå sikkerhet eller handlinger som kan skade tjenesten eller andre brukere.",
        },
        {
          title: "11. Ansvarsbegrensning",
          body:
            "Mosaic ME leveres som den er. Så langt loven tillater det, er Morning Coffee Labs ikke ansvarlig for indirekte tap, tap av lokale data, tap som skyldes tredjepartstjenester eller konsekvenser av informasjon som brukere selv velger å dele eller stole på.",
        },
        {
          title: "12. Endringer i vilkårene",
          body:
            "Vilkårene kan oppdateres når funksjonalitet eller tjenester endres. Gjeldende versjon vil være tilgjengelig på denne siden.",
        },
        {
          title: "13. Kontakt",
          body:
            "Spørsmål om Mosaic ME eller disse vilkårene kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy for Mosaic ME",
      intro:
        "This privacy policy explains how Mosaic ME stores and processes information when you use the app, create an account, find friends, and share alter information.",
      sections: [
        {
          title: "1. Data controller",
          body:
            "Mathisens Morning Coffee Labs is the data controller for personal data processed in connection with Mosaic ME.",
        },
        {
          title: "2. Local storage",
          body:
            "Mosaic ME is designed around local storage. Core information such as alters, fronting, history, and journal data is stored locally on the device. This local data is not automatically tied to your Firebase account and is not automatically uploaded to the cloud.",
        },
        {
          title: "3. Account and sign-in",
          body:
            "If you create an account, Firebase Authentication is used for sign-in. Account information includes items such as your email address, user ID, and display name. The account is used for online features such as friend discovery and sharing.",
        },
        {
          title: "4. Friend discovery",
          body:
            "To allow other signed-in Mosaic ME users to find you as a friend, a limited set of information is stored in a separate user directory. This directory contains information required for friend discovery, such as user ID, email address, and display name. The directory is available only to authenticated users.",
        },
        {
          title: "5. Friendships and sharing",
          body:
            "When you send or accept a friend request, friendship information is stored in Firebase. When you actively choose to share an alter, the shareable alter information needed for the recipient to view it is stored. Private alter data, journals, and internal notes are not intended to be included in sharing.",
        },
        {
          title: "6. Avatars",
          body:
            "If you use an image as an alter avatar, the original is stored as part of the app's local data. When you choose to share an alter, an avatar required for that share may be uploaded to Firebase Storage so the recipient can view it. Access and deletion are controlled by the app's security rules and sharing logic.",
        },
        {
          title: "7. Cloud backup and Mosaic Cloud",
          body:
            "Mosaic ME has technical support for cloud backup and restore, but Mosaic Cloud is not enabled as a public service in version 1.0. Local information should therefore not be considered backed up to the cloud unless the app later explicitly shows that Mosaic Cloud is enabled for the user.",
        },
        {
          title: "8. Service providers",
          body:
            "Mosaic ME uses Google Firebase for authentication, database functions, and storage supporting accounts, friendships, and sharing. Processing performed by Google as a service provider is also subject to its applicable terms and privacy practices.",
        },
        {
          title: "9. Account deletion",
          body:
            "You can delete your Mosaic ME account from within the app. During account deletion, the app attempts to remove the account profile, user-directory entry, friendships, shares, cloud-backup data, and owned avatar files before deleting the Firebase Authentication account itself. Local Mosaic ME data on the device is not automatically deleted when the account is deleted.",
        },
        {
          title: "10. Local deletion",
          body:
            "Local data is managed on the device. Uninstalling the app or clearing app data may remove local information depending on how the operating system handles app storage. Use the export feature if you want to preserve a copy of local data outside the app.",
        },
        {
          title: "11. No sale of personal data or ad profiling",
          body:
            "Mosaic ME does not sell personal data. Version 1.0 is not based on advertising profiling or the sale of user data.",
        },
        {
          title: "12. Children",
          body:
            "Mosaic ME is not designed for the purpose of collecting personal data from children. If a minor's use of the app requires consent under applicable law, the user or guardian is responsible for ensuring that the required consent is in place.",
        },
        {
          title: "13. Changes",
          body:
            "This privacy policy may be updated if Mosaic ME gains new functionality, integrations, or data-processing practices. The current version will be available on this page.",
        },
        {
          title: "14. Contact",
          body:
            "Questions about Mosaic ME, privacy, or deletion of data may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Terms of Use for Mosaic ME",
      intro:
        "These terms of use apply to Mosaic ME, provided by Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Use of the app",
          body:
            "Mosaic ME gives you a personal, non-transferable right to use the app according to the functionality offered in the current version. The app must not be resold, redistributed, or used in violation of applicable law.",
        },
        {
          title: "2. Purpose and scope",
          body:
            "Mosaic ME is a personal organization and communication tool for plural systems. The app is not a medical service, therapy platform, diagnostic service, or substitute for professional healthcare.",
        },
        {
          title: "3. Local data and backup responsibility",
          body:
            "Core information is stored locally on the device. You are responsible for exporting or otherwise safeguarding data you do not want to lose. Morning Coffee Labs cannot guarantee recovery of local data lost through deletion, uninstallation, device failure, or other local events.",
        },
        {
          title: "4. Account and online features",
          body:
            "An account is required for some online features, including friend discovery and sharing. You are responsible for providing accurate account information, protecting your password, and using the account lawfully.",
        },
        {
          title: "5. Sharing",
          body:
            "You decide whether an alter is shared and with whom. You are responsible for ensuring that information you share may lawfully be shared with the selected recipient. Do not enter or share information you do not have the right to process or disclose.",
        },
        {
          title: "6. Friendships and received information",
          body:
            "Information you receive from other users through Mosaic ME is made available by those users. You must handle shared information respectfully and lawfully and must not use the app for harassment, abuse, or unauthorized redistribution.",
        },
        {
          title: "7. Third-party services",
          body:
            "Mosaic ME uses third-party services, including Google Firebase, for account, database, and storage functions. Availability and parts of the functionality may therefore be affected by those services and their terms.",
        },
        {
          title: "8. Availability and changes",
          body:
            "We aim for Mosaic ME to work reliably, but we cannot guarantee that the app will always be available, error-free, or compatible with every future operating-system version. The app and online features may be updated, improved, or changed over time.",
        },
        {
          title: "9. Payments and future services",
          body:
            "Core Mosaic ME functionality is free in version 1.0. Paid services, such as Mosaic Cloud or voluntary support, may be introduced later. If such services are offered, the price and what is included will be shown clearly before purchase.",
        },
        {
          title: "10. Misuse and suspension",
          body:
            "We may restrict or terminate access to online features in cases of serious misuse, unlawful use, attempts to bypass security, or actions that could harm the service or other users.",
        },
        {
          title: "11. Limitation of liability",
          body:
            "Mosaic ME is provided as is. To the extent permitted by law, Morning Coffee Labs is not liable for indirect losses, loss of local data, losses caused by third-party services, or consequences of information users choose to share or rely on.",
        },
        {
          title: "12. Changes to these terms",
          body:
            "These terms may be updated when functionality or services change. The current version will be available on this page.",
        },
        {
          title: "13. Contact",
          body:
            "Questions about Mosaic ME or these terms may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
  },
};

const MosaicMeLegalPage: React.FC<Props> = ({ type }) => {
  const { lang } = useI18n();
  const document = legalContent[lang][type];

  return (
    <main className="page legal-page mosaic-me-legal-page">
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

export default MosaicMeLegalPage;

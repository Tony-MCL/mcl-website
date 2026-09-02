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
      title: "Personvern for R4",
      intro:
        "Denne personvernerklæringen beskriver hvordan R4 håndterer informasjon når du bruker appen.",
      sections: [
        {
          title: "1. Behandlingsansvarlig",
          body:
            "Mathisens Morning Coffee Labs er behandlingsansvarlig for personopplysninger som eventuelt behandles i forbindelse med R4.",
        },
        {
          title: "2. Lokal lagring",
          body:
            "Meldinger, titler, valg av målapp og andre appinnstillinger lagres lokalt på enheten din. R4 har ingen brukerkonto, ingen skylagring og ingen synkronisering i den aktuelle versjonen.",
        },
        {
          title: "3. Innhold i andre apper",
          body:
            "R4 leser ikke innholdet i andre apper. Appen overvåker ikke chat, meldinger, skjerminnhold eller aktivitet i appene du bruker sammen med R4.",
        },
        {
          title: "4. Liste over startbare apper",
          body:
            "På Android kan R4 vise en liste over startbare apper som er installert på enheten når du velger hvilke apper du vil bruke sammen med R4. Dette brukes kun for at du skal kunne velge målapp. Valgene dine lagres lokalt på enheten.",
        },
        {
          title: "5. Overlay og tastaturtilgang",
          body:
            "På Android ber R4 om tillatelse til å vises over andre apper. Tillatelsen brukes kun til å vise den synlige, brukerbetjente R4-overlayen. På iPhone og iPad fungerer R4 som et eget tastatur for å gjøre lagrede tekster tilgjengelige i tekstfelt. R4 bruker ikke disse funksjonene til å lese, overvåke eller styre andre apper.",
        },
        {
          title: "6. Utklippstavle",
          body:
            "Når du velger en lagret melding, kopierer eller setter R4 inn meldingsteksten via funksjonene som er tilgjengelige på enheten din. R4 sender ikke teksten automatisk. Du velger selv hvor og om teksten skal limes inn eller sendes.",
        },
        {
          title: "7. Ingen analyse, annonser eller sporing",
          body:
            "R4 bruker ikke analyseverktøy, annonsetjenester eller sporingsteknologi i den aktuelle versjonen. Morning Coffee Labs mottar ikke innholdet i meldingene du lagrer.",
        },
        {
          title: "8. Sletting",
          body:
            "Du kan slette lagrede meldinger i appen. Lokalt lagrede data kan også fjernes ved å slette appdata eller avinstallere appen, avhengig av hvordan enheten håndterer lokal appdata.",
        },
        {
          title: "9. Barn",
          body:
            "R4 er ikke laget for å samle inn personopplysninger fra barn og inneholder ingen konto, sosial funksjon eller deling av brukerinnhold mellom brukere.",
        },
        {
          title: "10. Endringer",
          body:
            "Personvernerklæringen kan bli oppdatert dersom funksjonaliteten i R4 endres. Gjeldende versjon vil alltid være tilgjengelig på denne siden.",
        },
        {
          title: "11. Kontakt",
          body:
            "Spørsmål om R4 eller personvern kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Brukervilkår for R4",
      intro:
        "Disse brukervilkårene gjelder for bruk av R4, levert av Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Bruk av appen",
          body:
            "R4 gir deg en personlig, ikke-overførbar rett til å bruke appen i samsvar med funksjonaliteten som tilbys i den aktuelle versjonen. Appen skal ikke videreselges, redistribueres eller brukes i strid med gjeldende lovverk.",
        },
        {
          title: "2. Hva R4 gjør",
          body:
            "R4 lar deg opprette og lagre egne tekster lokalt på enheten og gjøre dem tilgjengelige raskt. På Android skjer dette gjennom en flytende overlay over andre apper. På iPhone og iPad skjer det gjennom et eget tastatur. Når du velger en lagret melding, kan teksten kopieres eller settes inn med funksjonene som er tilgjengelige på enheten.",
        },
        {
          title: "3. Ingen automatisk sending",
          body:
            "R4 skriver ikke, limer ikke inn og sender ikke meldinger automatisk i andre apper. Du er selv ansvarlig for å velge hvor teksten skal limes inn og for å sende eller publisere den.",
        },
        {
          title: "4. Brukerens innhold og ansvar",
          body:
            "Du er ansvarlig for innholdet du oppretter, lagrer, kopierer og bruker gjennom R4. Du må sikre at innholdet og bruken av det følger gjeldende lovverk, avtaler og eventuelle regler i tredjepartsapper eller tjenester.",
        },
        {
          title: "5. Tredjepartsapper",
          body:
            "R4 kan brukes sammen med andre apper, men Morning Coffee Labs er ikke tilknyttet eller ansvarlig for disse appene. Bruk av tredjepartsapper er underlagt deres egne vilkår, regler og personvernpraksis.",
        },
        {
          title: "6. Systemfunksjoner og begrensninger",
          body:
            "R4 er avhengig av systemfunksjoner som overlay, tastaturutvidelser og utklippstavle. Endringer i Android, iOS, iPadOS, enhetsprodusentens programvare eller andre apper kan påvirke hvordan funksjonen virker.",
        },
        {
          title: "7. Lokal lagring og sikkerhetskopi",
          body:
            "R4 er i den aktuelle versjonen ikke en sikkerhetskopitjeneste. Meldinger lagres lokalt, og du er selv ansvarlig for innhold du ønsker å bevare dersom appdata slettes, enheten mistes eller appen avinstalleres.",
        },
        {
          title: "8. Tilgjengelighet og endringer",
          body:
            "Vi tilstreber at R4 fungerer stabilt, men kan ikke garantere at appen alltid er tilgjengelig eller feilfri. Appen kan oppdateres, forbedres eller endres over tid.",
        },
        {
          title: "9. Ansvarsbegrensning",
          body:
            "R4 leveres som den er. Så langt loven tillater det, er Morning Coffee Labs ikke ansvarlig for indirekte tap, tap av lokalt lagret innhold, feil bruk av kopiert tekst eller andre følgeskader som oppstår ved bruk av R4 eller tredjepartsapper.",
        },
        {
          title: "10. Kontakt",
          body:
            "Spørsmål om appen eller disse vilkårene kan sendes til post@morningcoffeelabs.no.",
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy for R4",
      intro:
        "This privacy policy explains how R4 handles information when you use the app.",
      sections: [
        {
          title: "1. Data controller",
          body:
            "Mathisens Morning Coffee Labs is the data controller for any personal data processed in connection with R4.",
        },
        {
          title: "2. Local storage",
          body:
            "Messages, titles, selected target app, and other app settings are stored locally on your device. R4 has no user account, cloud storage, or synchronization in the current version.",
        },
        {
          title: "3. Content in other apps",
          body:
            "R4 does not read content from other apps. The app does not monitor chats, messages, screen content, or activity in apps you use together with R4.",
        },
        {
          title: "4. List of launchable apps",
          body:
            "On Android, R4 may display a list of launchable apps installed on your device when you choose which apps to use with R4. This is used only so you can select a target app. Your choices are stored locally on the device.",
        },
        {
          title: "5. Overlay and keyboard access",
          body:
            "On Android, R4 requests permission to display over other apps. This permission is used only to show the visible, user-controlled R4 overlay. On iPhone and iPad, R4 works as a custom keyboard to make saved texts available in text fields. R4 does not use these features to read, monitor, or control other apps.",
        },
        {
          title: "6. Clipboard",
          body:
            "When you select a saved message, R4 copies or inserts the message text using the functions available on your device. R4 does not automatically send the text. You choose where and whether to paste or send it.",
        },
        {
          title: "7. No analytics, advertising, or tracking",
          body:
            "R4 does not use analytics tools, advertising services, or tracking technology in the current version. Morning Coffee Labs does not receive the content of messages you save.",
        },
        {
          title: "8. Deletion",
          body:
            "You can delete saved messages in the app. Locally stored data may also be removed when app data is cleared or the app is uninstalled, depending on how your device handles local app data.",
        },
        {
          title: "9. Children",
          body:
            "R4 is not designed to collect personal data from children and contains no account, social functionality, or sharing of user content between users.",
        },
        {
          title: "10. Changes",
          body:
            "This privacy policy may be updated if R4's functionality changes. The current version will always be available on this page.",
        },
        {
          title: "11. Contact",
          body:
            "Questions about R4 or privacy may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
    terms: {
      title: "Terms of Use for R4",
      intro:
        "These terms of use apply to R4, provided by Mathisens Morning Coffee Labs.",
      sections: [
        {
          title: "1. Use of the app",
          body:
            "R4 gives you a personal, non-transferable right to use the app according to the functionality offered in the current version. The app must not be resold, redistributed, or used in violation of applicable law.",
        },
        {
          title: "2. What R4 does",
          body:
            "R4 lets you create and store your own text locally on your device and keep it quickly available. On Android, this is done through a floating overlay above other apps. On iPhone and iPad, it is done through a custom keyboard. When you select a saved message, the text can be copied or inserted using the functions available on your device.",
        },
        {
          title: "3. No automatic sending",
          body:
            "R4 does not type, paste, or send messages automatically in other apps. You are responsible for choosing where the text is pasted and for sending or publishing it.",
        },
        {
          title: "4. Your content and responsibility",
          body:
            "You are responsible for the content you create, store, copy, and use through R4. You must ensure that the content and your use of it comply with applicable law, agreements, and any rules of third-party apps or services.",
        },
        {
          title: "5. Third-party apps",
          body:
            "R4 may be used together with other apps, but Morning Coffee Labs is not affiliated with or responsible for those apps. Use of third-party apps is subject to their own terms, rules, and privacy practices.",
        },
        {
          title: "6. System features and limitations",
          body:
            "R4 depends on system features such as overlays, keyboard extensions and clipboard functionality. Changes to Android, iOS, iPadOS, device manufacturer software or other apps may affect how the functionality works.",
        },
        {
          title: "7. Local storage and backup",
          body:
            "R4 is not a backup service in the current version. Messages are stored locally, and you are responsible for content you wish to preserve if app data is deleted, the device is lost, or the app is uninstalled.",
        },
        {
          title: "8. Availability and changes",
          body:
            "We aim for R4 to work reliably, but we cannot guarantee that the app will always be available or error-free. The app may be updated, improved, or changed over time.",
        },
        {
          title: "9. Limitation of liability",
          body:
            "R4 is provided as is. To the extent permitted by law, Morning Coffee Labs is not liable for indirect losses, loss of locally stored content, misuse of copied text, or other consequential damages arising from use of R4 or third-party apps.",
        },
        {
          title: "10. Contact",
          body:
            "Questions about the app or these terms may be sent to post@morningcoffeelabs.no.",
        },
      ],
    },
  },
};

const R4LegalPage: React.FC<Props> = ({ type }) => {
  const { lang } = useI18n();
  const document = legalContent[lang][type];

  return (
    <main className="page legal-page r4-legal-page">
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

export default R4LegalPage;

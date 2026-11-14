import React from "react";
import { useI18n } from "../i18n/useI18n";

const EMAIL = "post@morningcoffeelabs.no";

const copy = {
  no: {
    title: "Slett ElKraftTorget-konto",
    intro: "Her finner du informasjon om hvordan du kan be om å få slettet ElKraftTorget-kontoen din og tilhørende personopplysninger.",
    sections: [
      {
        title: "Slett kontoen i appen",
        text: "Åpne ElKraftTorget og gå til Kontoadministrasjon. Velg funksjonen for å slette kontoen, og følg bekreftelsen i appen. Kontoen settes inaktiv, og annonsene skjules. Du har en angrefrist på syv dager."
      },
      {
        title: "Be om sletting uten appen",
        text: "Har du avinstallert appen eller mistet tilgangen, kan du fortsatt be om kontosletting. Send en e-post til adressen nedenfor, helst fra e-postadressen som er registrert på ElKraftTorget-kontoen. Oppgi at du ønsker å slette ElKraftTorget-kontoen din. Vi kan be om nødvendig informasjon for å bekrefte at du eier kontoen før vi behandler forespørselen."
      },
      {
        title: "Hva blir slettet?",
        text: "Slettingen omfatter kontoen og personopplysninger knyttet til tjenesten, blant annet registrert profil- og kontaktinformasjon, annonser og tilhørende bilder, søkeprofiler og varslingsinnstillinger. Enkelte opplysninger kan måtte oppbevares lenger ved lovpålagte plikter eller for å håndtere konkrete sikkerhetshendelser eller tvister."
      },
      {
        title: "Når slettes opplysningene?",
        text: "Ved kontosletting i appen gjelder en angrefrist på syv dager. Etter angrefristen gjennomføres permanent sletting av kontoen og tilhørende data. Ved forespørsel på e-post bekrefter vi først eierskapet til kontoen og gir informasjon om videre behandling og tidspunkt for sletting."
      },
      {
        title: "Personvern",
        text: "Du finner mer informasjon om behandling av personopplysninger i personvernerklæringen."
      }
    ],
    emailLabel: "Send forespørsel om kontosletting",
    privacyLabel: "Les personvernerklæringen"
  },
  en: {
    title: "Delete your ElKraftTorget account",
    intro: "This page explains how to request deletion of your ElKraftTorget account and associated personal data.",
    sections: [
      {
        title: "Delete your account in the app",
        text: "Open ElKraftTorget, go to Account management and select the account deletion option. Follow the confirmation steps in the app. Your account becomes inactive and your listings are hidden. There is a seven-day reversal period."
      },
      {
        title: "Request deletion without the app",
        text: "If you have uninstalled the app or can no longer access it, you can still request account deletion. Email the address below, preferably from the email address registered to your ElKraftTorget account. State that you wish to delete your ElKraftTorget account. We may request information necessary to verify account ownership before processing the request."
      },
      {
        title: "What data is deleted?",
        text: "Deletion covers your account and service-related personal data, including profile and contact details, listings and associated images, saved searches and notification preferences. Certain information may need to be retained to meet legal obligations or resolve specific security incidents or disputes."
      },
      {
        title: "When is data deleted?",
        text: "Account deletion requested in the app includes a seven-day reversal period. Permanent deletion of the account and associated data takes place after that period. For email requests, we first verify account ownership and provide information about processing and the expected deletion date."
      },
      {
        title: "Privacy",
        text: "You can find more details about personal data processing in our privacy policy."
      }
    ],
    emailLabel: "Email an account deletion request",
    privacyLabel: "Read the privacy policy"
  }
} as const;

const ElKraftTorgetDeleteAccountPage: React.FC = () => {
  const { lang } = useI18n();
  const page = lang === "en" ? copy.en : copy.no;

  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>
      </section>

      {page.sections.map((section, index) => (
        <section className="legal-section" key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
          {index === 1 ? (
            <p>
              <a href={`mailto:${EMAIL}?subject=ElKraftTorget%20-%20kontosletting`}>
                {page.emailLabel}: {EMAIL}
              </a>
            </p>
          ) : null}
          {index === 4 ? (
            <p><a href="/elkrafttorget/personvern">{page.privacyLabel}</a></p>
          ) : null}
        </section>
      ))}
    </main>
  );
};

export default ElKraftTorgetDeleteAccountPage;

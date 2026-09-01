import React from "react";
import { useI18n } from "../i18n/useI18n";

type DeleteAccountContent = {
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body?: string;
    bullets?: string[];
  }>;
};

const content: Record<"no" | "en", DeleteAccountContent> = {
  no: {
    title: "Slett Mosaic ME-konto",
    intro:
      "Denne siden forklarer hvordan du kan slette Mosaic ME-kontoen din og hvilke data som berøres.",
    sections: [
      {
        title: "Slett kontoen i appen",
        body:
          "Hvis du fortsatt har tilgang til Mosaic ME, kan du slette kontoen direkte fra appens kontoinnstillinger ved å velge Delete account og følge bekreftelsestrinnene. Du kan bli bedt om å bekrefte passordet ditt før slettingen gjennomføres.",
      },
      {
        title: "Hvis du ikke lenger har tilgang til appen",
        body:
          "Du kan be Morning Coffee Labs om å slette Mosaic ME-kontoen din ved å sende en e-post til post@morningcoffeelabs.no fra e-postadressen som er knyttet til kontoen. Vi kan be om nødvendig informasjon for å bekrefte at forespørselen gjelder din egen konto.",
      },
      {
        title: "Data som slettes",
        body:
          "Når Mosaic ME-kontoen slettes, fjernes kontodata og nettdata som er knyttet til kontoen så langt de inngår i tjenesten.",
        bullets: [
          "Firebase Authentication-kontoen og tilhørende kontoprofil",
          "oppføringen i Mosaic MEs brukerkatalog",
          "vennskapsdata og aktive delinger knyttet til kontoen",
          "eventuelle Mosaic ME-skybackupdata som er knyttet til kontoen",
          "eide avatarfiler som er lagret for nettfunksjoner og deling",
        ],
      },
      {
        title: "Lokale data på enheten",
        body:
          "Mosaic ME er local-first. Kjerneinformasjon som alters, fronting, historikk og journal lagres lokalt på enheten og slettes ikke automatisk når nettkontoen slettes. Hvis du også vil fjerne lokale data, kan du slette appdata eller avinstallere appen. Eksporter først en .mome-fil dersom du ønsker å beholde en kopi.",
      },
      {
        title: "Oppbevaring",
        body:
          "Mosaic ME er ikke ment å beholde kontodata etter at kontoslettingen er fullført. Enkelte opplysninger kan bare beholdes dersom dette er nødvendig for å oppfylle lovpålagte krav eller håndtere sikkerhet og misbruk.",
      },
      {
        title: "Kontakt",
        body:
          "Spørsmål om kontosletting eller personvern kan sendes til post@morningcoffeelabs.no.",
      },
    ],
  },
  en: {
    title: "Delete your Mosaic ME account",
    intro:
      "This page explains how to delete your Mosaic ME account and what happens to the data associated with it.",
    sections: [
      {
        title: "Delete your account in the app",
        body:
          "If you still have access to Mosaic ME, you can delete your account directly from the app's account settings by selecting Delete account and following the confirmation steps. You may be asked to confirm your password before deletion is completed.",
      },
      {
        title: "If you no longer have access to the app",
        body:
          "You can ask Morning Coffee Labs to delete your Mosaic ME account by emailing post@morningcoffeelabs.no from the email address associated with the account. We may request information needed to verify that the request concerns your own account.",
      },
      {
        title: "Data that is deleted",
        body:
          "When a Mosaic ME account is deleted, account data and online data associated with the account are removed to the extent they are part of the service.",
        bullets: [
          "the Firebase Authentication account and associated account profile",
          "the entry in the Mosaic ME user directory",
          "friendship data and active shares associated with the account",
          "any Mosaic ME cloud-backup data associated with the account",
          "owned avatar files stored for online features and sharing",
        ],
      },
      {
        title: "Local data on your device",
        body:
          "Mosaic ME is local-first. Core information such as alters, fronting, history, and journal data is stored locally on the device and is not automatically deleted when the online account is deleted. If you also want to remove local data, clear the app's data or uninstall the app. Export a .mome file first if you want to keep a copy.",
      },
      {
        title: "Retention",
        body:
          "Mosaic ME is not intended to retain account data after account deletion has been completed. Certain information may only be retained where necessary to comply with legal obligations or to address security and abuse.",
      },
      {
        title: "Contact",
        body:
          "Questions about account deletion or privacy can be sent to post@morningcoffeelabs.no.",
      },
    ],
  },
};

const MosaicMeDeleteAccountPage: React.FC = () => {
  const { lang } = useI18n();
  const page = content[lang];

  return (
    <main className="page legal-page mosaic-me-legal-page">
      <section className="fs-hero">
        <h1>{page.title}</h1>
        <p className="fs-tagline">{page.intro}</p>
      </section>

      <section className="legal-content-card">
        {page.sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body ? <p>{section.body}</p> : null}
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

export default MosaicMeDeleteAccountPage;

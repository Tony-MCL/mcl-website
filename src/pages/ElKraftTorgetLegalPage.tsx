import React from "react";
import { useI18n } from "../i18n/useI18n";

type Kind = "privacy" | "terms";
type Section = { title: string; paragraphs: string[] };
type Document = { title: string; intro: string; sections: Section[] };
const CONTACT = "post@morningcoffeelabs.no";
const updated = "3. november 2026";

const content: Record<"no" | "en", Record<Kind, Document>> = {
  no: {
    privacy: {
      title: "Personvernerklæring for ElKraftTorget",
      intro: "ElKraftTorget er en markedsplass for bedrifter innen elkraft og tilknyttede bransjer. Her forklarer vi hvilke opplysninger som behandles og hvorfor.",
      sections: [
        { title: "1. Behandlingsansvarlig", paragraphs: ["Mathisens Morning Coffee Labs er behandlingsansvarlig for personopplysninger knyttet til ElKraftTorget. Spørsmål og henvendelser kan sendes til " + CONTACT + "."] },
        { title: "2. Konto og firmatilknytning", paragraphs: ["Når du registrerer deg, behandler vi e-postadresse, navn, telefonnummer, organisasjonsnummer, firmanavn og en intern bruker-ID. Firebase Authentication brukes til innlogging og håndtering av konto.", "Firmanavn og organisasjonsnummer kan kontrolleres ved oppslag hos Brønnøysundregistrene. Dersom du ber om manuell verifisering, lagres opplysningene i en verifiseringsforespørsel som administrator kan behandle."] },
        { title: "3. Annonser og kontaktopplysninger", paragraphs: ["Når du oppretter en annonse, lagres annonsetype, kategori, eventuelt underkategori, tittel, beskrivelse, sted, mengde, prisinformasjon, tekniske opplysninger, firmanavn og eventuelle bilder. Annonser og bilder kan være synlige for personer som bruker tjenesten, også uten innlogging.", "Navn, telefonnummer og e-postadresse til annonsens kontaktperson lagres separat og gjøres tilgjengelig for innloggede, aktive brukere. Du må ha rett til å oppgi kontaktinformasjon og publisere eventuelle bilder og opplysninger du legger inn."] },
        { title: "4. Varsler og enhetsidentifikatorer", paragraphs: ["Hvis du aktiverer annonsevarsler, lagres varslingsinnstillinger, søkeprofiler og innboksoppføringer. For å levere pushvarsler kan vi lagre en Expo-push-token, en installasjonsidentifikator og operativsystem (Android eller iOS). Pushvarsler kan styres fra appen og enhetens innstillinger."] },
        { title: "5. Rapportering og moderering", paragraphs: ["Rapporter om annonser kan inneholde begrunnelse, kommentarer, ID for den rapporterende kontoen og den aktuelle annonsen. Vi behandler også nødvendige opplysninger ved firmaverifisering, håndtering av regelbrudd, sperring og kontosletting. Slike opplysninger er ikke offentlige."] },
        { title: "6. Formål og behandlingsgrunnlag", paragraphs: ["Opplysningene brukes for å opprette og administrere kontoer, vise annonser, formidle kontakt mellom bedrifter, sende varsler brukeren har valgt, ivareta tjenestens sikkerhet og behandle henvendelser. Behandlingen er nødvendig for å levere tjenesten (GDPR artikkel 6 nr. 1 bokstav b) og, der det er relevant, for våre berettigede interesser i sikkerhet og forebygging av misbruk (bokstav f). Frivillige varsler og tillatelser kan slås av.", "Vi bruker ikke opplysningene til salg av persondata eller målrettet annonsering gjennom ElKraftTorget."] },
        { title: "7. Leverandører og overføringer", paragraphs: ["Vi benytter Google Firebase til autentisering, database, filoppbevaring og serverfunksjoner, og Expo-relaterte tjenester til levering av pushvarsler. Oppslag mot Brønnøysundregistrene brukes ved kontroll av organisasjonsnummer. Leverandørene kan behandle tekniske data etter sine databehandleravtaler og vilkår. Enkelte leverandørtjenester kan innebære behandling utenfor EØS med relevante overføringsmekanismer."] },
        { title: "8. Lagring, retting og sletting", paragraphs: ["Konto- og annonseopplysninger beholdes så lenge det er nødvendig for tjenesten eller for å håndtere relevante henvendelser og lovpålagte plikter. Du kan endre personlige opplysninger og administrere annonser i appen.", "Du kan be om kontosletting under Kontoadministrasjon. Kontoen settes da inaktiv, med en angrefrist på syv dager. Annonsene skjules fra ordinær bruk. Permanent sletting og opprydding i tilhørende data gjennomføres etter angrefristen når den avsluttende sletteløsningen er satt i drift. Kontakt oss dersom du vil få opplysninger slettet eller kontrollere status for en forespørsel. Enkelte opplysninger kan beholdes når det kreves etter lov eller er nødvendig for å håndtere en konkret tvist eller sikkerhetshendelse."] },
        { title: "9. Dine rettigheter", paragraphs: ["Du kan etter gjeldende regler be om innsyn, retting, sletting, begrensning og dataportabilitet, og gjøre innsigelser mot behandling basert på berettiget interesse. Ta kontakt på " + CONTACT + ". Du kan også klage til Datatilsynet."] },
        { title: "10. Endringer", paragraphs: ["Denne erklæringen oppdateres ved vesentlige endringer i tjenesten eller behandlingen av personopplysninger. Gjeldende versjon publiseres her."] }
      ]
    },
    terms: {
      title: "Brukervilkår for ElKraftTorget",
      intro: "Disse vilkårene gjelder for bruk av ElKraftTorget, en møteplass for bedrifter levert av Mathisens Morning Coffee Labs.",
      sections: [
        { title: "1. Hvem tjenesten er for", paragraphs: ["ElKraftTorget er beregnet på virksomheter og personer som bruker tjenesten på vegne av en virksomhet. Du er ansvarlig for å ha nødvendige fullmakter til å opprette konto, publisere annonser og opptre på vegne av firmaet. Kontoopplysninger må være korrekte."] },
        { title: "2. En møteplass, ikke en mellommann", paragraphs: ["Tjenesten lar bedrifter publisere materiell de ønsker å selge og forespørsler om materiell de ønsker å kjøpe. ElKraftTorget formidler kontakt, men er ikke selger, kjøper, betalingsformidler, transportør eller part i avtaler mellom brukerne.", "Pris, betaling, dokumentasjon, teknisk egnethet, tilstand, eventuell kontroll og transport avtales direkte mellom de involverte virksomhetene."] },
        { title: "3. Brukerens ansvar for materiell og innhold", paragraphs: ["Den som publiserer en annonse, er ansvarlig for at opplysninger, bilder, beskrivelse, pris og eventuell kontaktinformasjon er korrekte og lovlige. Publiser bare materiale du har rett til å dele.", "Partene må selv undersøke materiellets tilstand, samsvar med regelverk, relevant dokumentasjon og egnethet for tiltenkt bruk. At en annonse er tilgjengelig eller at en firmatilknytning er verifisert, innebærer ingen garanti eller godkjenning av materiellet fra ElKraftTorget."] },
        { title: "4. Akseptabel bruk", paragraphs: ["Det er ikke tillatt å publisere villedende annonser, spam, ulovlig materiell, krenkende innhold eller opplysninger som bryter andres rettigheter. Det er heller ikke tillatt å forsøke å omgå sikkerhet, få uautorisert tilgang eller misbruke andres kontaktinformasjon."] },
        { title: "5. Moderering og konto", paragraphs: ["Vi kan gjennomgå rapporter, skjule annonser og begrense eller sperre kontoer ved mistanke om eller dokumentert misbruk. Firmaverifisering kontrollerer oppgitte firmaopplysninger og er ikke en garanti for at en handelspart er pålitelig eller betalingsdyktig.", "Du kan be om sletting av kontoen i appen. Slettingsforespørselen gir en angrefrist på syv dager. Se personvernerklæringen for informasjon om databehandling."] },
        { title: "6. Priser, betaling og frivillig støtte", paragraphs: ["ElKraftTorget tilbyr for tiden annonsering uten kostnad for brukerne og tar ikke salgsprovisjon. Vi ønsker å finansiere drift og videreutvikling gjennom frivillig støtte og eventuelle andre inntektskilder.", "For å sikre videre drift og utvikling forbeholder vi oss retten til å innføre betaling for enkelte funksjoner eller for bruk av tjenesten. Eventuelle priser og betalingsvilkår vil bli tydelig kommunisert før de trer i kraft. Ingen brukere vil bli belastet uten å ha akseptert en betalingspliktig tjeneste.", "Frivillig støtte gir ingen handelsmessige fordeler. Muligheten for å gi støtte aktiveres når betalingsløsningen er klar."] },
        { title: "7. Tilgjengelighet og endringer", paragraphs: ["Vi arbeider for at tjenesten skal være stabil, men garanterer ikke uavbrutt drift eller at alle opplysninger er feilfrie. Funksjoner kan endres og tjenesten kan ved behov avvikles. Vesentlige endringer i vilkårene gjøres tilgjengelige på denne siden."] },
        { title: "8. Ansvar", paragraphs: ["Hver virksomhet er selv ansvarlig for egne avtaler og handler. Innenfor rammene av ufravikelig lovgivning er Mathisens Morning Coffee Labs ikke ansvarlig for tap som skyldes andre brukeres annonser, feil ved materiell, betaling, transport eller avtaler mellom partene. Denne bestemmelsen begrenser ikke ansvar som ikke lovlig kan fraskrives."] },
        { title: "9. Kontakt", paragraphs: ["Spørsmål om brukervilkårene eller tjenesten kan sendes til " + CONTACT + "."] }
      ]
    }
  },
  en: {
    privacy: {
      title: "ElKraftTorget Privacy Policy",
      intro: "ElKraftTorget is a business-to-business marketplace for the power industry. This policy describes the personal data processed through the service.",
      sections: [
        { title: "1. Data controller", paragraphs: ["Mathisens Morning Coffee Labs is the controller for personal data processed in connection with ElKraftTorget. Contact: " + CONTACT + "."] },
        { title: "2. Accounts and company verification", paragraphs: ["Registration involves your email address, name, phone number, organization number, company name and internal user ID. Firebase Authentication provides sign-in.", "Company details may be checked against the Norwegian Register of Business Enterprises (Brønnøysundregistrene). Manual verification requests are stored and may be reviewed by an administrator."] },
        { title: "3. Listings and contact details", paragraphs: ["Listings may include type, categories, title, description, location, quantity, price information, technical details, company name and uploaded photos. Listings and photos may be visible publicly, including to visitors who are not signed in.", "Listing contact names, phone numbers and email addresses are stored separately and made available to signed-in active users. Only publish information and images you are entitled to share."] },
        { title: "4. Notifications and device identifiers", paragraphs: ["If you enable listing alerts, we store notification settings, search profiles and inbox notifications. Push delivery may use an Expo push token, an installation identifier and device platform (Android or iOS). You can manage alerts in the app and device settings."] },
        { title: "5. Reports and moderation", paragraphs: ["Listing reports may contain the reporting account, listing ID, reason and optional comments. Verification, moderation, account restrictions and deletion requests may involve additional administrative records. These records are not public."] },
        { title: "6. Purposes and legal bases", paragraphs: ["We process data to provide accounts, listings, business contact, optional alerts, security and support. Our legal bases include performance of the service agreement (GDPR Article 6(1)(b)) and legitimate interests in service security and abuse prevention (Article 6(1)(f)). Optional alerts and device permissions may be disabled.", "We do not sell personal data or use ElKraftTorget for targeted advertising."] },
        { title: "7. Service providers and transfers", paragraphs: ["Google Firebase supports authentication, database, files and server functions. Expo-related services deliver push notifications. Company lookups use Brønnøysundregistrene. Providers may process technical information under their terms and relevant data processing agreements. Some processing may occur outside the EEA subject to applicable transfer safeguards."] },
        { title: "8. Retention and deletion", paragraphs: ["Data is held as needed to run the service, respond to requests and meet legal obligations. You can update account details and manage your listings in the app.", "You can request account deletion under Account Management. The account is then inactive for a seven-day reversal period, while its listings are hidden from normal use. Permanent deletion and cleanup after this period depend on activation of the final deletion process. Contact us to request erasure or check a deletion request. Some records may be retained where legally required or necessary for a specific dispute or security incident."] },
        { title: "9. Your rights", paragraphs: ["Subject to applicable law, you may request access, rectification, erasure, restriction, portability or object to processing based on legitimate interests. Contact " + CONTACT + ". You can also complain to the Norwegian Data Protection Authority (Datatilsynet)."] },
        { title: "10. Updates", paragraphs: ["We will update this policy to reflect material changes in our service and data handling. The current version is published here."] }
      ]
    },
    terms: {
      title: "ElKraftTorget Terms of Use",
      intro: "These terms govern use of ElKraftTorget, a business-to-business marketplace operated by Mathisens Morning Coffee Labs.",
      sections: [
        { title: "1. Business accounts", paragraphs: ["The service is intended for businesses and their authorized representatives. You must have authority to register, post listings and act on behalf of the company. Account details must be accurate."] },
        { title: "2. Marketplace, not an intermediary", paragraphs: ["Businesses may post equipment for sale or requests to buy equipment. ElKraftTorget facilitates contact but does not act as seller, buyer, payment provider, carrier or a party to transactions.", "Price, payment, technical suitability, condition, inspection, documentation and delivery are agreed directly between the businesses."] },
        { title: "3. Listings and equipment", paragraphs: ["You are responsible for the accuracy and legality of listing content, images, price and contact details. Only publish material you have the right to share.", "Parties must independently verify condition, applicable requirements, documentation and fitness for intended use. Publication or company verification does not certify any equipment or guarantee a counterparty."] },
        { title: "4. Acceptable use", paragraphs: ["Misleading listings, spam, unlawful equipment, infringing content, unauthorized access, security circumvention and misuse of contact details are prohibited."] },
        { title: "5. Moderation and deletion", paragraphs: ["We may investigate reports, hide listings or restrict accounts in response to misuse. Company verification only checks the submitted business details; it is not a guarantee of trustworthiness or creditworthiness.", "Account deletion can be requested in the app, subject to a seven-day reversal period. See the privacy policy for data handling details."] },
        { title: "6. Pricing, payments and voluntary support", paragraphs: ["ElKraftTorget currently offers listings at no cost to users and charges no sales commission. We aim to fund operations and further development through voluntary contributions and potentially other sources of income.", "To sustain the service, we reserve the right to introduce fees for certain features or for using the service. Any prices and payment terms will be clearly communicated before they take effect. No user will be charged without accepting a paid service.", "Voluntary contributions provide no trading advantage. The option to contribute will be enabled when the payment solution is ready."] },
        { title: "7. Availability and changes", paragraphs: ["We aim for a reliable service but cannot guarantee uninterrupted access or error-free content. Features may change and the service may be discontinued. Material term changes will be made available on this page."] },
        { title: "8. Responsibility", paragraphs: ["Each business remains responsible for its own agreements and transactions. To the extent permitted by mandatory law, Mathisens Morning Coffee Labs is not responsible for losses arising from other users' listings, defective equipment, payment, transport or agreements between parties. Nothing here excludes liability that cannot legally be excluded."] },
        { title: "9. Contact", paragraphs: ["Questions may be sent to " + CONTACT + "."] }
      ]
    }
  }
};

export default function ElKraftTorgetLegalPage({ kind }: { kind: Kind }) {
  const { lang } = useI18n();
  const doc = content[lang === "en" ? "en" : "no"][kind];
  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{doc.title}</h1>
        <p className="legal-intro">{doc.intro}</p>
        <p>{lang === "en" ? "Last updated: 3 November 2026" : "Sist oppdatert: " + updated}</p>
      </section>
      {doc.sections.map(section => (
        <section className="legal-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
      ))}
      <section className="legal-section">
        <p><a href={kind === "privacy" ? "/elkrafttorget/brukervilkar" : "/elkrafttorget/personvern"}>
          {lang === "en" ? (kind === "privacy" ? "Terms of Use" : "Privacy Policy") : (kind === "privacy" ? "Brukervilkår" : "Personvernerklæring")}
        </a></p>
      </section>
    </main>
  );
}

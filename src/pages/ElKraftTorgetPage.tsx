import React from "react";
import { useI18n } from "../i18n/useI18n";
import "./ElKraftTorgetPage.css";

const assetBase = import.meta.env.BASE_URL || "/";

const copy = {
  no: {
    eyebrow: "NY BRANSJEMARKEDSPLASS · UNDER UTVIKLING",
    intro: "En gratis møteplass for bedrifter innen elkraft, energi og tilknyttet industri. Her kan virksomheter tilby overskuddsmateriell, restpartier og tilgjengelige komponenter – eller etterlyse det de trenger.",
    free: "Gratis å bruke", direct: "Direkte kontakt mellom bedrifter", noFees: "Ingen salgsprovisjon",
    pointTitle: "La verdifullt materiell komme til nytte",
    pointBody: "Materiell som ligger på lager hos én virksomhet, kan være akkurat det en annen trenger. ElKraftTorget skal gjøre det enklere å koble disse behovene.",
    have: "HAR", haveTitle: "Tilby det du har", haveBody: "Har dere kabelrester, komponenter, prosjektoverskudd eller materiell som ikke lenger skal brukes? Gjør det synlig for andre i bransjen.",
    need: "TRENGER", needTitle: "Etterlys det du trenger", needBody: "Trenger du en spesialkomponent, et mindre parti eller materiell som er vanskelig å skaffe? Vis andre bedrifter hva du ser etter.",
    usesTitle: "Aktuelt for hele verdikjeden",
    uses: ["Nettselskaper og kraftprodusenter", "Entreprenører og prosjektledere", "Grossister og leverandører", "Industri og automasjon", "Verksteder og aktører innen rehabilitering"],
    benefitTitle: "Bedre ressursutnyttelse – i praksis",
    benefitBody: "Overskuddsmateriell representerer både verdi og ressurser. Ved å synliggjøre det som allerede finnes, vil vi gjøre det lettere å utforske alternativer til nyanskaffelser og åpne for ombruk og rehabilitering når materiellet er egnet.",
    processTitle: "En møteplass, ikke en mellommann",
    processBody: "ElKraftTorget formidler kontakt. Pris, teknisk egnethet, dokumentasjon, eventuell kontroll, transport og betaling avtales og håndteres direkte mellom bedriftene. ElKraftTorget er ikke part i handelen.",
    launchTitle: "ElKraftTorget er på vei",
    launchBody: "Vi bygger tjenesten nå. Denne siden oppdateres med lenker til Google Play og App Store når appene er publisert. Vil du vite mer eller bidra med innspill før lansering?",
    contact: "Ta kontakt", contactNote: "Inntil egen kontaktadresse er opprettet, bruker vi Morning Coffee Labs sin vanlige e-postadresse.",
    madeBy: "Et initiativ fra Morning Coffee Labs",
  },
  en: {
    eyebrow: "NEW INDUSTRY MARKETPLACE · IN DEVELOPMENT",
    intro: "A free marketplace for companies in electrical power, energy and related industries. Businesses can offer surplus equipment, leftover stock and available components – or post requests for what they need.",
    free: "Free to use", direct: "Direct business-to-business contact", noFees: "No sales commission",
    pointTitle: "Put valuable equipment to work",
    pointBody: "Equipment sitting in one company's warehouse may be exactly what another company needs. ElKraftTorget aims to connect supply and demand.",
    have: "HAVE", haveTitle: "Offer what you have", haveBody: "Spare cable, components, project surplus or equipment you no longer need? Make it visible to other companies in the industry.",
    need: "NEED", needTitle: "Ask for what you need", needBody: "Looking for a specialist component, a smaller quantity or hard-to-source equipment? Let other businesses know.",
    usesTitle: "For businesses across the sector",
    uses: ["Grid operators and power producers", "Contractors and project managers", "Wholesalers and suppliers", "Industry and automation", "Workshops and refurbishment businesses"],
    benefitTitle: "Better use of existing resources",
    benefitBody: "Surplus equipment represents both value and resources. By making existing stock visible, we want to help companies explore alternatives to buying new, and enable reuse or refurbishment where suitable.",
    processTitle: "A meeting place, not a middleman",
    processBody: "ElKraftTorget connects companies. Price, technical suitability, documentation, inspection where relevant, shipping and payment are arranged directly between them. ElKraftTorget is not a party to transactions.",
    launchTitle: "ElKraftTorget is coming",
    launchBody: "The service is under development. This page will be updated with Google Play and App Store links when the apps are released. Want to know more or share feedback before launch?",
    contact: "Get in touch", contactNote: "Until a dedicated contact address is ready, we use the main Morning Coffee Labs email.",
    madeBy: "An initiative from Morning Coffee Labs",
  },
} as const;

const ElKraftTorgetPage: React.FC = () => {
  const { lang } = useI18n();
  const c = lang === "en" ? copy.en : copy.no;
  return (
    <main className="page ekt-page">
      <section className="ekt-hero" aria-labelledby="ekt-heading">
        <div className="ekt-hero-brand">
          <img className="ekt-logo" src={`${assetBase}elkrafttorget_logo.png`} alt="ElKraftTorget – Overskudd hos én. Behov hos en annen." />
        </div>
        <span className="ekt-eyebrow">{c.eyebrow}</span>
        <h1 id="ekt-heading" className="ekt-visually-hidden">ElKraftTorget</h1>
        <p className="ekt-intro">{c.intro}</p>
        <div className="ekt-benefits">
          {[c.free, c.direct, c.noFees].map((benefit) => <span key={benefit}><span aria-hidden="true">✓</span> {benefit}</span>)}
        </div>
      </section>

      <section className="ekt-section ekt-statement" aria-labelledby="ekt-purpose">
        <span className="ekt-section-mark" aria-hidden="true">↔</span>
        <div><h2 id="ekt-purpose">{c.pointTitle}</h2><p>{c.pointBody}</p></div>
      </section>

      <section className="ekt-section" aria-label={lang === "en" ? "Listings" : "Annonsetyper"}>
        <div className="ekt-listing-grid">
          <article className="ekt-listing-card ekt-have">
            <span className="ekt-listing-tag">{c.have}</span><h2>{c.haveTitle}</h2><p>{c.haveBody}</p>
          </article>
          <article className="ekt-listing-card ekt-need">
            <span className="ekt-listing-tag">{c.need}</span><h2>{c.needTitle}</h2><p>{c.needBody}</p>
          </article>
        </div>
      </section>

      <section className="ekt-section ekt-sector" aria-labelledby="ekt-sector-heading">
        <h2 id="ekt-sector-heading">{c.usesTitle}</h2>
        <ul>{c.uses.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="ekt-section ekt-explainer">
        <article><h2>{c.benefitTitle}</h2><p>{c.benefitBody}</p></article>
        <article><h2>{c.processTitle}</h2><p>{c.processBody}</p></article>
      </section>

      <section className="ekt-section ekt-launch" aria-labelledby="ekt-launch-heading">
        <img src={`${assetBase}elkrafttorget_icon_light.png`} alt="" aria-hidden="true" />
        <div><h2 id="ekt-launch-heading">{c.launchTitle}</h2><p>{c.launchBody}</p>
          <a className="ekt-contact" href="mailto:post@morningcoffeelabs.no?subject=ElKraftTorget">{c.contact} <span aria-hidden="true">↗</span></a>
          <small>{c.contactNote}</small>
        </div>
      </section>
      <p className="ekt-credit">{c.madeBy}</p>
    </main>
  );
};

export default ElKraftTorgetPage;

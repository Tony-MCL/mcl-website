import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
};

const SITE_NAME = "Morning Coffee Labs";
const SITE_URL = "https://morningcoffeelabs.no";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO_BY_PATH: Record<string, SeoConfig> = {
  "/": {
    title: "Morning Coffee Labs – Enkle verktøy for komplekst arbeid",
    description:
      "Morning Coffee Labs utvikler enkle, fokuserte digitale verktøy for arbeid, planlegging, minner og hverdagsoppgaver.",
  },
  "/om": {
    title: "Om Morning Coffee Labs",
    description:
      "Les om Morning Coffee Labs og hvordan vi utvikler enkle digitale verktøy for reelle behov.",
  },
  "/kontakt": {
    title: "Kontakt Morning Coffee Labs",
    description:
      "Ta kontakt med Morning Coffee Labs om produkter, ideer, samarbeid eller spørsmål.",
  },
  "/idebank": {
    title: "Idebank – Morning Coffee Labs",
    description:
      "Se ideer, konsepter og digitale verktøy som utvikles av Morning Coffee Labs.",
  },
  "/qr-generator": {
    title: "QR-generator – Morning Coffee Labs",
    description: "Lag en enkel QR-kode direkte i nettleseren.",
  },
  "/progress": {
    title: "Manage Progress – Enkel fremdriftsplanlegging",
    description:
      "Manage Progress er et enkelt verktøy for å bygge og følge opp fremdriftsplaner uten unødvendig støy.",
  },
  "/husket": {
    title: "Husk'et – Ta vare på minnene dine",
    description:
      "Husk'et er en personlig app for å samle, bevare og dele minner med menneskene som betyr mest.",
  },
  "/kvittek": {
    title: "Kvittek – Enkel orden på kvitteringene",
    description:
      "Kvittek gjør det enkelt å samle, organisere og finne igjen kvitteringene dine.",
  },
  "/receipts": {
    title: "Kvittek – Kvitteringer samlet på ett sted",
    description:
      "Les om Kvittek, appen som hjelper deg å samle og organisere kvitteringer.",
  },
  "/kjopsvilkar": {
    title: "Kjøpsvilkår – Morning Coffee Labs",
    description: "Gjeldende kjøpsvilkår for Morning Coffee Labs.",
  },
  "/brukervilkar": {
    title: "Brukervilkår – Morning Coffee Labs",
    description: "Gjeldende brukervilkår for Morning Coffee Labs.",
  },
  "/personvern": {
    title: "Personvern – Morning Coffee Labs",
    description: "Informasjon om personvern og behandling av personopplysninger.",
  },
  "/refusjon": {
    title: "Refusjonsvilkår – Morning Coffee Labs",
    description: "Gjeldende vilkår for refusjon hos Morning Coffee Labs.",
  },
  "/husket/kjopsvilkar": {
    title: "Kjøpsvilkår for Husk'et",
    description: "Gjeldende kjøpsvilkår for Husk'et.",
  },
  "/husket/brukervilkar": {
    title: "Brukervilkår for Husk'et",
    description: "Gjeldende brukervilkår for Husk'et.",
  },
  "/husket/personvern": {
    title: "Personvern for Husk'et",
    description: "Informasjon om personvern og behandling av data i Husk'et.",
  },
  "/husket/refusjon": {
    title: "Refusjonsvilkår for Husk'et",
    description: "Gjeldende vilkår for refusjon knyttet til Husk'et.",
  },
  "/receipts/kjopsvilkar": {
    title: "Kjøpsvilkår for Kvittek",
    description: "Gjeldende kjøpsvilkår for Kvittek.",
  },
  "/receipts/brukervilkar": {
    title: "Brukervilkår for Kvittek",
    description: "Gjeldende brukervilkår for Kvittek.",
  },
  "/receipts/personvern": {
    title: "Personvern for Kvittek",
    description: "Informasjon om personvern og behandling av data i Kvittek.",
  },
  "/receipts/refusjon": {
    title: "Refusjonsvilkår for Kvittek",
    description: "Gjeldende vilkår for refusjon knyttet til Kvittek.",
  },
  "/admin": {
    title: "Administrasjon – Morning Coffee Labs",
    description: "Administrasjonsside for Morning Coffee Labs.",
    noindex: true,
  },
};

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath =
      location.pathname.length > 1 && location.pathname.endsWith("/")
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const config = SEO_BY_PATH[normalizedPath] ?? SEO_BY_PATH["/"];
    const canonicalPath = config.canonicalPath ?? normalizedPath;
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

    document.title = config.title;
    setMeta("description", config.description);
    setMeta("robots", config.noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(canonicalUrl);

    setProperty("og:type", "website");
    setProperty("og:site_name", SITE_NAME);
    setProperty("og:title", config.title);
    setProperty("og:description", config.description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:image", DEFAULT_IMAGE);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", config.title);
    setMeta("twitter:description", config.description);
    setMeta("twitter:image", DEFAULT_IMAGE);
  }, [location.pathname]);

  return null;
}

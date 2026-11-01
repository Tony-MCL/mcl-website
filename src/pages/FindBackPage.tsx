import React from "react";
import { LINKS } from "../config/links";
import { useI18n } from "../i18n/useI18n";

const assetBase = import.meta.env.BASE_URL || "/";

const storeBadges = {
  no: {
    google: `${assetBase}google-play-badge-no.svg`,
    apple: `${assetBase}app-store-badge-no.svg`,
  },
  en: {
    google: `${assetBase}google-play-badge-en.svg`,
    apple: `${assetBase}app-store-badge-en.svg`,
  },
} as const;

const FindBackPage: React.FC = () => {
  const { t, lang } = useI18n();
  const badges = lang === "en" ? storeBadges.en : storeBadges.no;

  return (
    <main className="page receipt-landing-page">
      <section
        className="receipt-landing-card findback-landing-card"
        aria-labelledby="findback-title"
      >
        <div className="receipt-landing-logo-wrap">
          <img
            className="findback-landing-logo"
            src={`${assetBase}findback-icon.png`}
            alt="FindBack"
          />
        </div>

        <h1 id="findback-title">{lang === "en" ? "FindBack – Save your location and find your way back" : "FindBack – Lagre posisjonen din og finn tilbake"}</h1>
        <p className="receipt-landing-intro">{t("findback.intro")}</p>
        <p className="findback-landing-purpose">{t("findback.purpose")}</p>
        <p className="findback-landing-how">{t("findback.how")}</p>
        <p className="findback-landing-promise">{t("findback.promise")}</p>
        <p className="findback-landing-privacy">{t("findback.privacy")}</p>


        <section className="mosaic-story" aria-labelledby="findback-how-title">
          <h2 id="findback-how-title">{lang === "en" ? "Two buttons. One simple idea." : "To knapper. Én enkel idé."}</h2>
          <p>{lang === "en"
            ? "Tap Save Location when you want to remember a place. Later, tap Find Back to open directions to the saved location."
            : "Trykk Save Location når du vil huske et sted. Senere trykker du Find Back for å åpne veibeskrivelse tilbake til den lagrede posisjonen."}</p>
          <p>{lang === "en"
            ? "Useful when exploring a new city, returning to your hotel or finding your parked car."
            : "Nyttig når du utforsker en ny by, skal tilbake til hotellet eller vil finne igjen bilen."}</p>
        </section>

        <section className="mosaic-story" aria-labelledby="findback-screenshots-title">
          <h2 id="findback-screenshots-title">{lang === "en" ? "See how FindBack works" : "Se hvor enkelt FindBack fungerer"}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: 24 }}>
            <figure style={{ flex: "1 1 230px", maxWidth: 320, margin: 0 }}>
              <img
                src={`${assetBase}findback_1.png`}
                alt={lang === "en" ? "FindBack app showing the Save Location and Find Back buttons" : "FindBack-appen med knappene for å lagre posisjonen og finne tilbake"}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "auto", borderRadius: 14 }}
              />
              <figcaption style={{ marginTop: 10, textAlign: "center" }}>
                {lang === "en" ? "1. Save your location with one tap." : "1. Lagre posisjonen med ett trykk."}
              </figcaption>
            </figure>
            <figure style={{ flex: "1 1 230px", maxWidth: 320, margin: 0 }}>
              <img
                src={`${assetBase}findback_2.png`}
                alt={lang === "en" ? "Map app showing a pin at the location saved with FindBack" : "Kartapp med en markør på posisjonen som ble lagret i FindBack"}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "auto", borderRadius: 14 }}
              />
              <figcaption style={{ marginTop: 10, textAlign: "center" }}>
                {lang === "en" ? "2. Open the saved location in your map app." : "2. Åpne den lagrede posisjonen i kartappen."}
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="receipt-landing-download"
          aria-labelledby="findback-download-title"
        >
          <h2 id="findback-download-title">{t("findback.download.title")}</h2>

          <div className="receipt-store-badges">
            <a
              className="receipt-store-badge-link"
              href={LINKS.findbackGooglePlay}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("findback.download.googleAria")}
            >
              <img
                className="receipt-store-badge-image"
                src={badges.google}
                alt={t("findback.download.googleAlt")}
              />
            </a>

            <a
              className="receipt-store-badge-link"
              href={LINKS.findbackAppStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("findback.download.appleAria")}
            >
              <img
                className="receipt-store-badge-image"
                src={badges.apple}
                alt={t("findback.download.appleAlt")}
              />
            </a>
          </div>
        </section>

        <p className="product-peerpush-link">
          <a href={LINKS.findbackPeerPush} target="_blank" rel="noopener noreferrer">
            {t("findback.peerPush")}
          </a>
        </p>

        <p className="receipt-landing-support">
          <span>{t("findback.support")}</span>
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>
      </section>
    </main>
  );
};

export default FindBackPage;

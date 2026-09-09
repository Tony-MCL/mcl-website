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

const R4Page: React.FC = () => {
  const { t, lang } = useI18n();
  const badges = lang === "en" ? storeBadges.en : storeBadges.no;

  return (
    <main className="page receipt-landing-page">
      <section
        className="receipt-landing-card r4-landing-card"
        aria-labelledby="r4-title"
      >
        <div className="receipt-landing-logo-wrap">
          <img
            className="r4-landing-logo"
            src={`${assetBase}r4-logo.png`}
            alt="R4"
          />
        </div>

        <h1 id="r4-title" className="receipt-landing-visually-hidden">
          R4
        </h1>
        <p className="r4-landing-tagline">{t("r4.tagline")}</p>
        <p className="receipt-landing-intro">{t("r4.intro")}</p>
        <p className="r4-landing-purpose">{t("r4.purpose")}</p>
        <p className="r4-landing-copy">{t("r4.audience")}</p>
        <p className="r4-landing-promise">{t("r4.promise")}</p>
        <p className="r4-landing-privacy">{t("r4.privacy")}</p>

        <section
          className="receipt-landing-download"
          aria-labelledby="r4-download-title"
        >
          <h2 id="r4-download-title">{t("r4.download.title")}</h2>

          <div className="receipt-store-badges">
            <a
              className="receipt-store-badge-link"
              href={LINKS.r4GooglePlay}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("r4.download.googleAria")}
            >
              <img
                className="receipt-store-badge-image"
                src={badges.google}
                alt={t("r4.download.googleAlt")}
              />
            </a>

            <a
              className="receipt-store-badge-link"
              href={LINKS.r4AppStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("r4.download.appleAria")}
            >
              <img
                className="receipt-store-badge-image"
                src={badges.apple}
                alt={t("r4.download.appleAlt")}
              />
            </a>
          </div>
        </section>

        <p className="r4-landing-platform">{t("r4.platform")}</p>
        <p className="r4-peerpush-link">
          <a href={LINKS.r4PeerPush} target="_blank" rel="noopener noreferrer">
            {t("r4.peerPush")}
          </a>
        </p>

        <p className="receipt-landing-support">
          <span>{t("r4.support")}</span>
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>
      </section>
    </main>
  );
};

export default R4Page;

import React from "react";
import { LINKS } from "../config/links";
import { useI18n } from "../i18n/useI18n";

const assetBase = import.meta.env.BASE_URL || "/";

const MosaicMePage: React.FC = () => {
  const { t, lang } = useI18n();

  return (
    <main className="page project-preview-page mosaic-preview-page">
      <section className="project-preview-hero" aria-labelledby="mosaic-title">
        <img
          className="mosaic-preview-logo"
          src={`${assetBase}mosaic_me_logo.png`}
          alt="Mosaic ME"
        />
        <h1 id="mosaic-title" className="receipt-landing-visually-hidden">
          Mosaic ME
        </h1>
        <p className="project-preview-tagline">{t("mosaicPage.tagline")}</p>
        <p className="project-preview-lead">{t("mosaicPage.lead")}</p>
      </section>

      <section className="mosaic-story" aria-labelledby="mosaic-system-title">
        <h2 id="mosaic-system-title">{t("mosaicPage.system.title")}</h2>
        <p>{t("mosaicPage.system.bodyOne")}</p>
        <p>{t("mosaicPage.system.bodyTwo")}</p>
      </section>

      <div className="mosaic-principles">
        <section>
          <h2>{t("mosaicPage.private.title")}</h2>
          <p>{t("mosaicPage.private.body")}</p>
        </section>
        <section>
          <h2>{t("mosaicPage.sharing.title")}</h2>
          <p>{t("mosaicPage.sharing.body")}</p>
        </section>
        <section>
          <h2>{t("mosaicPage.data.title")}</h2>
          <p>{t("mosaicPage.data.body")}</p>
        </section>
      </div>

      <section className="mosaic-long-term" aria-labelledby="mosaic-long-term-title">
        <h2 id="mosaic-long-term-title">{t("mosaicPage.longTerm.title")}</h2>
        <p>{t("mosaicPage.longTerm.body")}</p>
        <strong>{t("mosaicPage.longTerm.free")}</strong>
      </section>

      <section className="receipt-landing-download" aria-labelledby="mosaic-download-title">
        <h2 id="mosaic-download-title">{t("mosaicPage.status.title")}</h2>
        <div className="receipt-store-badges">
          <a
            className="receipt-store-badge-link"
            href={LINKS.mosaicGooglePlay}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("mosaicPage.download.googleAria")}
          >
            <img
              className="receipt-store-badge-image"
              src={`${assetBase}google-play-badge-${lang === "en" ? "en" : "no"}.svg`}
              alt={t("mosaicPage.download.googleAlt")}
            />
          </a>
          <a
            className="receipt-store-badge-link"
            href={LINKS.mosaicAppStore}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("mosaicPage.download.appleAria")}
          >
            <img
              className="receipt-store-badge-image"
              src={`${assetBase}app-store-badge-${lang === "en" ? "en" : "no"}.svg`}
              alt={t("mosaicPage.download.appleAlt")}
            />
          </a>
        </div>
        <p>{t("mosaicPage.status.body")}</p>
      </section>

      <p className="receipt-landing-support project-preview-support">
        <span>{t("mosaicPage.support")}</span>
        <a href="mailto:post@morningcoffeelabs.no">
          post@morningcoffeelabs.no
        </a>
      </p>
    </main>
  );
};

export default MosaicMePage;

import React from "react";
import { useI18n } from "../i18n/useI18n";

const assetBase = import.meta.env.BASE_URL || "/";

const MineOppdragPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="page project-preview-page mine-oppdrag-page">
      <section className="project-preview-hero mine-oppdrag-hero" aria-labelledby="mine-oppdrag-title">
        <img
          className="mine-oppdrag-logo"
          src={`${assetBase}mine_oppdrag_logo.png`}
          alt="Mine Oppdrag"
        />
        <h1 id="mine-oppdrag-title" className="receipt-landing-visually-hidden">
          Mine Oppdrag
        </h1>
        <p className="project-preview-tagline">{t("mineOppdragPage.tagline")}</p>
        <p className="project-preview-lead">{t("mineOppdragPage.lead")}</p>

        <div className="project-preview-status mine-oppdrag-status">
          <img src={`${assetBase}mcl_under_construction.png`} alt="" />
          <div>
            <strong>{t("mineOppdragPage.status.title")}</strong>
            <span>{t("mineOppdragPage.status.body")}</span>
          </div>
        </div>
      </section>

      <section className="mosaic-story mine-oppdrag-story" aria-labelledby="mine-oppdrag-flow-title">
        <h2 id="mine-oppdrag-flow-title">{t("mineOppdragPage.flow.title")}</h2>
        <p>{t("mineOppdragPage.flow.bodyOne")}</p>
        <p>{t("mineOppdragPage.flow.bodyTwo")}</p>
      </section>

      <div className="mosaic-principles mine-oppdrag-principles">
        <section>
          <h2>{t("mineOppdragPage.checklists.title")}</h2>
          <p>{t("mineOppdragPage.checklists.body")}</p>
        </section>
        <section>
          <h2>{t("mineOppdragPage.photos.title")}</h2>
          <p>{t("mineOppdragPage.photos.body")}</p>
        </section>
        <section>
          <h2>{t("mineOppdragPage.archive.title")}</h2>
          <p>{t("mineOppdragPage.archive.body")}</p>
        </section>
      </div>

      <section className="mosaic-long-term mine-oppdrag-fit" aria-labelledby="mine-oppdrag-fit-title">
        <h2 id="mine-oppdrag-fit-title">{t("mineOppdragPage.fit.title")}</h2>
        <p>{t("mineOppdragPage.fit.body")}</p>
        <strong>{t("mineOppdragPage.fit.promise")}</strong>
      </section>

      <p className="receipt-landing-support project-preview-support">
        <span>{t("mineOppdragPage.support")}</span>
        <a href="mailto:post@morningcoffeelabs.no">
          post@morningcoffeelabs.no
        </a>
      </p>
    </main>
  );
};

export default MineOppdragPage;

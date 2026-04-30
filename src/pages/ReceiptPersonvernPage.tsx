import React from "react";
import { useI18n } from "../i18n/useI18n";

const ReceiptPersonvernPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{t("receiptLegal.privacy.title")}</h1>
        <p className="legal-intro">{t("receiptLegal.privacy.intro")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s1.title")}</h2>
        <p>{t("receiptLegal.privacy.s1.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s2.title")}</h2>
        <p>{t("receiptLegal.privacy.s2.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s3.title")}</h2>
        <p>{t("receiptLegal.privacy.s3.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s4.title")}</h2>
        <p>{t("receiptLegal.privacy.s4.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s5.title")}</h2>
        <p>{t("receiptLegal.privacy.s5.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s6.title")}</h2>
        <p>{t("receiptLegal.privacy.s6.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s7.title")}</h2>
        <p>{t("receiptLegal.privacy.s7.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s8.title")}</h2>
        <p>{t("receiptLegal.privacy.s8.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s9.title")}</h2>
        <p>{t("receiptLegal.privacy.s9.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.privacy.s10.title")}</h2>
        <p>
          {t("receiptLegal.privacy.s10.body")}{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>
      </section>
    </main>
  );
};

export default ReceiptPersonvernPage;

import React from "react";
import { useI18n } from "../i18n/useI18n";

const ReceiptRefusjonPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{t("receiptLegal.refund.title")}</h1>
        <p className="legal-intro">{t("receiptLegal.refund.intro")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.refund.s1.title")}</h2>
        <p>{t("receiptLegal.refund.s1.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.refund.s2.title")}</h2>
        <p>{t("receiptLegal.refund.s2.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.refund.s3.title")}</h2>
        <p>{t("receiptLegal.refund.s3.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.refund.s4.title")}</h2>
        <p>
          {t("receiptLegal.refund.s4.lead")}{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>
      </section>
    </main>
  );
};

export default ReceiptRefusjonPage;

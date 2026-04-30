import React from "react";
import { useI18n } from "../i18n/useI18n";

const ReceiptKjopsvilkarPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{t("receiptLegal.purchase.title")}</h1>
        <p className="legal-intro">{t("receiptLegal.purchase.intro")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.purchase.s1.title")}</h2>
        <p>{t("receiptLegal.purchase.s1.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.purchase.s2.title")}</h2>
        <p>{t("receiptLegal.purchase.s2.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.purchase.s3.title")}</h2>
        <p>{t("receiptLegal.purchase.s3.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.purchase.s4.title")}</h2>
        <p>{t("receiptLegal.purchase.s4.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.purchase.s5.title")}</h2>
        <p>{t("receiptLegal.purchase.s5.body")}</p>
      </section>
    </main>
  );
};

export default ReceiptKjopsvilkarPage;

import React from "react";
import { useI18n } from "../i18n/useI18n";

const ReceiptBrukervilkarPage: React.FC = () => {
  const { t } = useI18n();

  const s1Bullets = (t("receiptLegal.terms.s1.bullets") as unknown) as string[];
  const s2Bullets = (t("receiptLegal.terms.s2.bullets") as unknown) as string[];
  const s3Bullets = (t("receiptLegal.terms.s3.bullets") as unknown) as string[];

  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{t("receiptLegal.terms.title")}</h1>
        <p className="legal-intro">{t("receiptLegal.terms.intro")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.terms.s1.title")}</h2>
        <p>{t("receiptLegal.terms.s1.lead")}</p>
        <ul>
          {Array.isArray(s1Bullets)
            ? s1Bullets.map((x, i) => <li key={i}>{x}</li>)
            : null}
        </ul>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.terms.s2.title")}</h2>
        <p>{t("receiptLegal.terms.s2.lead")}</p>
        <ul>
          {Array.isArray(s2Bullets)
            ? s2Bullets.map((x, i) => <li key={i}>{x}</li>)
            : null}
        </ul>
        <p>{t("receiptLegal.terms.s2.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.terms.s3.title")}</h2>
        <p>{t("receiptLegal.terms.s3.lead")}</p>
        <ul>
          {Array.isArray(s3Bullets)
            ? s3Bullets.map((x, i) => <li key={i}>{x}</li>)
            : null}
        </ul>
        <p>{t("receiptLegal.terms.s3.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.terms.s4.title")}</h2>
        <p>{t("receiptLegal.terms.s4.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptLegal.terms.s5.title")}</h2>
        <p>
          {t("receiptLegal.terms.s5.lead")}{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>
      </section>
    </main>
  );
};

export default ReceiptBrukervilkarPage;

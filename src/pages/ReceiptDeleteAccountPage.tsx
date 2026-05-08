import React from "react";
import { useI18n } from "../i18n/useI18n";

const ReceiptDeleteAccountPage: React.FC = () => {
  const { t } = useI18n();

  const includeBullets = t(
    "receiptDeleteAccount.s2.bullets"
  ) as unknown as string[];

  const deleteBullets = t(
    "receiptDeleteAccount.s3.bullets"
  ) as unknown as string[];

  const retainBullets = t(
    "receiptDeleteAccount.s4.bullets"
  ) as unknown as string[];

  return (
    <main className="page legal-page">
      <section className="legal-header">
        <h1>{t("receiptDeleteAccount.title")}</h1>
        <p className="legal-intro">
          {t("receiptDeleteAccount.intro")}
        </p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptDeleteAccount.s1.title")}</h2>

        <p>
          {t("receiptDeleteAccount.s1.body")}{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptDeleteAccount.s2.title")}</h2>

        <ul>
          {Array.isArray(includeBullets)
            ? includeBullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            : null}
        </ul>
      </section>

      <section className="legal-section">
        <h2>{t("receiptDeleteAccount.s3.title")}</h2>

        <ul>
          {Array.isArray(deleteBullets)
            ? deleteBullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            : null}
        </ul>
      </section>

      <section className="legal-section">
        <h2>{t("receiptDeleteAccount.s4.title")}</h2>

        <ul>
          {Array.isArray(retainBullets)
            ? retainBullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            : null}
        </ul>
      </section>

      <section className="legal-section">
        <h2>{t("receiptDeleteAccount.s5.title")}</h2>

        <p>{t("receiptDeleteAccount.s5.body")}</p>
      </section>

      <section className="legal-section">
        <h2>{t("receiptDeleteAccount.s6.title")}</h2>

        <p>{t("receiptDeleteAccount.s6.body")}</p>
      </section>
    </main>
  );
};

export default ReceiptDeleteAccountPage;

import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="page">
      <section className="fs-hero">
        <h1>Kontakt</h1>

        <p className="fs-tagline" style={{ maxWidth: 900 }}>
          For generelle henvendelser er e-post eller telefon den beste måten å nå oss på.
        </p>

        <p style={{ maxWidth: 900, marginTop: "1rem" }}>
          E-post:{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
        </p>

        <p style={{ maxWidth: 900 }}>
          Telefon:{" "}
          <a href="tel:+4795097892">
            950&nbsp;97&nbsp;892
          </a>
        </p>
      </section>
    </main>
  );
};

export default ContactPage;

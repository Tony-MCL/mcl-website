import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="page">
      <section className="fs-hero">
        <h1>Kontakt</h1>

        <p className="fs-tagline" style={{ maxWidth: 900 }}>
          For generelle henvendelser er e-post den beste måten å nå oss på.
        </p>

        <p style={{ maxWidth: 900, marginTop: "1rem" }}>
          Send en e-post til{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>
          , så svarer vi så fort vi kan.
        </p>
      </section>
    </main>
  );
};

export default ContactPage;

import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <main className="page form-page">
      <header className="form-header">
        <h1>Kontakt</h1>
        <p>
          For generelle henvendelser, kontakt oss på{" "}
          <a href="mailto:post@morningcoffeelabs.no">
            post@morningcoffeelabs.no
          </a>.
        </p>
      </header>

      <section className="form-card">
        <h2>Kontakt oss</h2>
        <p className="form-info">
          (Placeholder) Her kan vi senere koble på et skjema / e-posttjeneste.
        </p>

        {!sent ? (
          <div className="form-grid">
            <div className="form-row">
              <label>
                Navn <span className="required">*</span>
                <input placeholder="Ditt navn" />
              </label>
            </div>

            <div className="form-row">
              <label>
                E-post <span className="required">*</span>
                <input placeholder="din@epost.no" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Melding <span className="required">*</span>
                <textarea rows={6} placeholder="Hva kan vi hjelpe med?" />
              </label>
            </div>

            <div className="form-actions">
              <button onClick={() => setSent(true)}>Send (demo)</button>
            </div>
          </div>
        ) : (
          <p style={{ color: "var(--mcl-text-dim)" }}>
            Takk! (demo) – vi tar kontakt.
          </p>
        )}
      </section>
    </main>
  );
};

export default ContactPage;

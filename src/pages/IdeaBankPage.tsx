import React from "react";

const IdeaBankPage: React.FC = () => {
  return (
    <main className="page form-page">
      <header className="form-header">
        <h1>Idébank</h1>
        <p>
          Har du en idé du ønsker å realisere? Beskriv den kort – så kan vi se
          på muligheter.
        </p>
      </header>

      <section className="form-card">
        <h2>Send inn en idé</h2>
        <p className="form-info">
          (Placeholder) Her kan vi senere koble på lagring / admin-visning.
        </p>

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
              Idé <span className="required">*</span>
              <textarea rows={7} placeholder="Hva er idéen – og hvorfor trengs den?" />
            </label>
          </div>

          <div className="form-actions">
            <button type="button">Send (demo)</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IdeaBankPage;

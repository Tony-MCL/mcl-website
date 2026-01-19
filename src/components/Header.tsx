import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const assetBase = import.meta.env.BASE_URL || "/";
const logoUrl = `${assetBase}mcl-logo.png`;

type ThemeMode = "light" | "dark";

function applyTheme(mode: ThemeMode) {
  const html = document.documentElement;
  if (mode === "dark") html.setAttribute("data-theme", "dark");
  else html.removeAttribute("data-theme");
}

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem("mcl_theme");
  if (saved === "dark" || saved === "light") return saved;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const location = useLocation();

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const closeMenu = () => setOpen(false);
  const isActive = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("mcl_theme", next);
    applyTheme(next);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logoUrl} alt="Morning Coffee Labs" />
          </Link>
        </div>

        <nav className="header-nav">
          <Link className={isActive("/") ? "active" : ""} to="/">
            Hjem
          </Link>

          {/* Ren label-endring: /idebank beholdes */}
          <Link className={isActive("/idebank") ? "active" : ""} to="/idebank">
            Tjenester
          </Link>

          <Link className={isActive("/om") ? "active" : ""} to="/om">
            Om
          </Link>
          <Link className={isActive("/kontakt") ? "active" : ""} to="/kontakt">
            Kontakt
          </Link>
          <Link className={isActive("/progress") ? "active" : ""} to="/progress">
            Progress
          </Link>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Bytt til lys modus" : "Bytt til mørk modus"}
            title={theme === "dark" ? "Lys modus" : "Mørk modus"}
          >
            <span className="theme-icon" aria-hidden="true">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <span className="theme-label">{theme === "dark" ? "Mørk" : "Lys"}</span>
          </button>

          <div className="hamburger" onClick={() => setOpen((prev) => !prev)}>
            ☰
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Hjem
        </Link>

        {/* Samme label i mobilmeny */}
        <Link to="/idebank" onClick={closeMenu}>
          Tjenester
        </Link>

        <Link to="/om" onClick={closeMenu}>
          Om
        </Link>
        <Link to="/kontakt" onClick={closeMenu}>
          Kontakt
        </Link>
        <Link to="/progress" onClick={closeMenu}>
          Progress
        </Link>

        <button type="button" className="theme-toggle mobile" onClick={toggleTheme}>
          <span className="theme-icon" aria-hidden="true">
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
          <span className="theme-label">
            {theme === "dark" ? "Mørk modus" : "Lys modus"}
          </span>
        </button>
      </div>
    </>
  );
};

export default Header;

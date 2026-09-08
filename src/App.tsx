import React from "react";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Seo from "./components/Seo";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IdeaBankPage from "./pages/IdeaBankPage";
import ProgressPage from "./pages/ProgressPage";
import QrGeneratorPage from "./pages/QrGeneratorPage";
import AdminPage from "./pages/AdminPage";

import KjopsvilkarPage from "./pages/KjopsvilkarPage";
import BrukervilkarPage from "./pages/BrukervilkarPage";
import PersonvernPage from "./pages/PersonvernPage";
import RefusjonPage from "./pages/RefusjonPage";

import HusketPage from "./pages/HusketPage";
import FindBackPage from "./pages/FindBackPage";
import FuryOPage from "./pages/FuryOPage";
import R4Page from "./pages/R4Page";
import MosaicMePage from "./pages/MosaicMePage";
import BopGamePage from "./pages/BopGamePage";
import MineOppdragPage from "./pages/MineOppdragPage";
import ReceiptPage from "./pages/ReceiptPage";
import ReceiptLandingPage from "./pages/ReceiptLandingPage";
import HusketKjopsvilkarPage from "./pages/HusketKjopsvilkarPage";
import HusketBrukervilkarPage from "./pages/HusketBrukervilkarPage";
import HusketPersonvernPage from "./pages/HusketPersonvernPage";
import HusketRefusjonPage from "./pages/HusketRefusjonPage";
import KvittekKjopsvilkarPage from "./pages/KvittekKjopsvilkarPage";
import KvittekBrukervilkarPage from "./pages/KvittekBrukervilkarPage";
import KvittekPersonvernPage from "./pages/KvittekPersonvernPage";
import KvittekRefusjonPage from "./pages/KvittekRefusjonPage";
import ReceiptDeleteAccountPage from "./pages/ReceiptDeleteAccountPage";
import FindBackPrivacyPage from "./pages/FindBackPrivacyPage";
import FindBackTermsPage from "./pages/FindBackTermsPage";
import FuryOPrivacyPage from "./pages/FuryOPrivacyPage";
import FuryOTermsPage from "./pages/FuryOTermsPage";
import R4PrivacyPage from "./pages/R4PrivacyPage";
import R4TermsPage from "./pages/R4TermsPage";
import MosaicMePrivacyPage from "./pages/MosaicMePrivacyPage";
import MosaicMeTermsPage from "./pages/MosaicMeTermsPage";

const AppShell: React.FC = () => {
  const location = useLocation();

  const isCleanProductRoute =
    location.pathname === "/husket" ||
    location.pathname.startsWith("/husket/") ||
    location.pathname === "/findback" ||
    location.pathname === "/fury-o" ||
    location.pathname === "/r4" ||
    location.pathname === "/mosaic-me" ||
    location.pathname === "/bop" ||
    location.pathname === "/mine-oppdrag" ||
    location.pathname === "/receipts" ||
    location.pathname.startsWith("/receipts/") ||
    location.pathname === "/kvittek";

  return (
    <div className="app-shell">
      <Seo />
      <ScrollToTop />

      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/idebank" element={<IdeaBankPage />} />
          <Route path="/admin" element={<AdminPage />} />

          <Route path="/qr-generator" element={<QrGeneratorPage />} />

          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/husket" element={<HusketPage />} />
          <Route path="/findback" element={<FindBackPage />} />
          <Route path="/fury-o" element={<FuryOPage />} />
          <Route path="/r4" element={<R4Page />} />
          <Route path="/mosaic-me" element={<MosaicMePage />} />
          <Route path="/bop" element={<BopGamePage />} />
          <Route path="/mine-oppdrag" element={<MineOppdragPage />} />
          <Route path="/kvittek" element={<ReceiptPage />} />
          <Route path="/receipts" element={<ReceiptLandingPage />} />

          <Route path="/kjopsvilkar" element={<KjopsvilkarPage />} />
          <Route path="/brukervilkar" element={<BrukervilkarPage />} />
          <Route path="/personvern" element={<PersonvernPage />} />
          <Route path="/refusjon" element={<RefusjonPage />} />

          <Route path="/husket/kjopsvilkar" element={<HusketKjopsvilkarPage />} />
          <Route path="/husket/brukervilkar" element={<HusketBrukervilkarPage />} />
          <Route path="/husket/personvern" element={<HusketPersonvernPage />} />
          <Route path="/husket/refusjon" element={<HusketRefusjonPage />} />

          <Route path="/receipts/kjopsvilkar" element={<KvittekKjopsvilkarPage />} />
          <Route path="/receipts/brukervilkar" element={<KvittekBrukervilkarPage />} />
          <Route path="/receipts/personvern" element={<KvittekPersonvernPage />} />
          <Route path="/receipts/refusjon" element={<KvittekRefusjonPage />} />
          <Route path="/receipts/delete-account" element={<ReceiptDeleteAccountPage />} />

          <Route path="/findback-privacy" element={<FindBackPrivacyPage />} />
          <Route path="/findback-terms" element={<FindBackTermsPage />} />

          <Route path="/fury-o/privacy" element={<FuryOPrivacyPage />} />
          <Route path="/fury-o/terms" element={<FuryOTermsPage />} />

          <Route path="/r4/privacy" element={<R4PrivacyPage />} />
          <Route path="/r4/terms" element={<R4TermsPage />} />

          <Route path="/mosaic-me/privacy" element={<MosaicMePrivacyPage />} />
          <Route path="/mosaic-me/terms" element={<MosaicMeTermsPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return <AppShell />;
};

export default App;

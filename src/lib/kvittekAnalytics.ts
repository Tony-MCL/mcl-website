import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export type AnalyticsData = {
  landingViews?: number;
  googlePlayClicks?: number;
  appStoreClicks?: number;
  downloadClicks?: number;

  lastLandingViewAt?: unknown;
  lastGooglePlayClickAt?: unknown;
  lastAppStoreClickAt?: unknown;
  lastDownloadClickAt?: unknown;
};

export type KvittekAnalyticsData = AnalyticsData;

const kvittekRef = doc(db, "analytics", "kvittekLanding");
const qrRef = doc(db, "analytics", "qrGenerator");
const husketRef = doc(db, "analytics", "husket");

async function ensureDocumentExists(
  ref: typeof kvittekRef,
  defaults: Record<string, unknown>
) {
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    await setDoc(ref, defaults);
  }
}

/* =========================
   KVITTEK
========================= */

export async function trackKvittekLandingView() {
  await ensureDocumentExists(kvittekRef, {
    landingViews: 0,
    googlePlayClicks: 0,
    appStoreClicks: 0,
  });

  await updateDoc(kvittekRef, {
    landingViews: increment(1),
    lastLandingViewAt: serverTimestamp(),
  });
}

export async function trackKvittekGooglePlayClick() {
  await ensureDocumentExists(kvittekRef, {
    landingViews: 0,
    googlePlayClicks: 0,
    appStoreClicks: 0,
  });

  await updateDoc(kvittekRef, {
    googlePlayClicks: increment(1),
    lastGooglePlayClickAt: serverTimestamp(),
  });
}

export async function trackKvittekAppStoreClick() {
  await ensureDocumentExists(kvittekRef, {
    landingViews: 0,
    googlePlayClicks: 0,
    appStoreClicks: 0,
  });

  await updateDoc(kvittekRef, {
    appStoreClicks: increment(1),
    lastAppStoreClickAt: serverTimestamp(),
  });
}

/* =========================
   QR GENERATOR
========================= */

export async function trackQrPageView() {
  await ensureDocumentExists(qrRef, {
    landingViews: 0,
    downloadClicks: 0,
  });

  await updateDoc(qrRef, {
    landingViews: increment(1),
    lastLandingViewAt: serverTimestamp(),
  });
}

export async function trackQrDownloadClick() {
  await ensureDocumentExists(qrRef, {
    landingViews: 0,
    downloadClicks: 0,
  });

  await updateDoc(qrRef, {
    downloadClicks: increment(1),
    lastDownloadClickAt: serverTimestamp(),
  });
}

/* =========================
   HUSK'ET
========================= */

export async function trackHusketPageView() {
  await ensureDocumentExists(husketRef, {
    landingViews: 0,
    googlePlayClicks: 0,
  });

  await updateDoc(husketRef, {
    landingViews: increment(1),
    lastLandingViewAt: serverTimestamp(),
  });
}

export async function trackHusketGooglePlayClick() {
  await ensureDocumentExists(husketRef, {
    landingViews: 0,
    googlePlayClicks: 0,
  });

  await updateDoc(husketRef, {
    googlePlayClicks: increment(1),
    lastGooglePlayClickAt: serverTimestamp(),
  });
}

/* =========================
   LISTENERS
========================= */

export function listenToKvittekAnalytics(
  callback: (data: AnalyticsData) => void
) {
  return onSnapshot(kvittekRef, (snapshot) => {
    callback((snapshot.data() as AnalyticsData) ?? {});
  });
}

export function listenToQrAnalytics(
  callback: (data: AnalyticsData) => void
) {
  return onSnapshot(qrRef, (snapshot) => {
    callback((snapshot.data() as AnalyticsData) ?? {});
  });
}

export function listenToHusketAnalytics(
  callback: (data: AnalyticsData) => void
) {
  return onSnapshot(husketRef, (snapshot) => {
    callback((snapshot.data() as AnalyticsData) ?? {});
  });
}

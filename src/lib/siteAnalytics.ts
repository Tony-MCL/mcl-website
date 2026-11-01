import { doc, onSnapshot, runTransaction, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export const TRACKED_PAGES = [
  { id: "home", path: "/", label: "Hovedsiden", stores: false },
  { id: "mosaic-me", path: "/mosaic-me", label: "Mosaic ME", stores: true },
  { id: "findback", path: "/findback", label: "FindBack", stores: true },
  { id: "r4", path: "/r4", label: "R4", stores: true },
  { id: "receipts", path: "/receipts", label: "Kvittek", stores: true },
  { id: "husket", path: "/husket", label: "Husk’et", stores: true },
  { id: "fury-o", path: "/fury-o", label: "Fury O", stores: true },
  { id: "progress", path: "/progress", label: "Progress", stores: false },
  { id: "bop", path: "/bop", label: "WildShot BOP", stores: false },
  { id: "mine-oppdrag", path: "/mine-oppdrag", label: "DokSmia", stores: false },
  { id: "elkrafttorget", path: "/elkrafttorget", label: "ElKraftTorget", stores: false },
  { id: "qr-generator", path: "/qr-generator", label: "QR-generator", stores: false },
] as const;

export type Metric = "views" | "googlePlay" | "appStore";
export type Counters = Record<Metric, number>;
export type PageAnalytics = {
  total: Counters;
  period: Counters;
  resetAt?: Timestamp;
  lastEventAt?: Timestamp;
};
const zero = (): Counters => ({ views: 0, googlePlay: 0, appStore: 0 });
const refFor = (id: string) => doc(db, "siteAnalytics", id);
const allowed = new Set<string>(TRACKED_PAGES.map((p) => p.id));

export function pageIdForPath(pathname: string): string | null {
  const path = pathname.replace(/\/$/, "") || "/";
  return TRACKED_PAGES.find((p) => p.path === path)?.id ?? null;
}

export async function trackSiteEvent(id: string, metric: Metric): Promise<void> {
  if (!allowed.has(id)) return;
  const ref = refFor(id);
  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(ref);
    const previous = snapshot.data() as PageAnalytics | undefined;
    const total = { ...zero(), ...(previous?.total ?? {}) };
    const period = { ...zero(), ...(previous?.period ?? {}) };
    total[metric] += 1;
    period[metric] += 1;
    if (snapshot.exists()) {
      transaction.update(ref, { total, period, lastEventAt: serverTimestamp() });
    } else {
      transaction.set(ref, { total, period, lastEventAt: serverTimestamp(), resetAt: serverTimestamp() });
    }
  });
}

export function listenToSiteAnalytics(id: string, callback: (data: PageAnalytics) => void) {
  return onSnapshot(refFor(id), (snapshot) => {
    const data = snapshot.data() as PageAnalytics | undefined;
    callback({ total: { ...zero(), ...data?.total }, period: { ...zero(), ...data?.period }, resetAt: data?.resetAt, lastEventAt: data?.lastEventAt });
  });
}

/** Only the authenticated administrator may reset a period; totals remain untouched. */
export async function resetSiteAnalyticsPeriod(id: string): Promise<void> {
  if (!allowed.has(id)) throw new Error("Unknown page");
  await runTransaction(db, async (transaction) => {
    const ref = refFor(id);
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists()) {
      transaction.set(ref, { total: zero(), period: zero(), resetAt: serverTimestamp() });
    } else {
      transaction.update(ref, { period: zero(), resetAt: serverTimestamp() });
    }
  });
}

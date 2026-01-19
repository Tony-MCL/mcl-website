import no from "./no";
import en from "./en";

export type Lang = "no" | "en";

export const dictionaries = {
  no,
  en,
} as const;

export const DEFAULT_LANG: Lang = "no";
export const LANG_STORAGE_KEY = "mcl_lang";

// Dette er nøkkelen: Dict er "språkunion", ikke låst til NO
export type Dict = (typeof dictionaries)[Lang];

export function getInitialLang(): Lang {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "no" || saved === "en") return saved;
  return DEFAULT_LANG;
}

// Enkel deep-get med dotted path, f.eks. "header.nav.home"
function deepGet(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce((acc: any, key) => (acc ? acc[key] : undefined), obj as any);
}

export function createT(dict: Dict) {
  return function t(key: string): string {
    const v = deepGet(dict, key);
    if (typeof v === "string") return v;
    // Under utvikling: vis key hvis noe mangler
    return key;
  };
}

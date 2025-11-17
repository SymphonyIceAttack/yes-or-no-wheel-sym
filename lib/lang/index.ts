import { en } from "./en";
import { es } from "./es";
import { ja } from "./ja";
import { ru } from "./ru";

export const languages = {
  en,
  ru,
  ja,
  es,
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "en";

// Language display names
export const languageNames = {
  en: "English",
  ru: "Русский",
  ja: "日本語",
  es: "Español",
} as const;

// Language direction (for RTL support in future)
export const languageDirection = {
  en: "ltr",
  ru: "ltr",
  ja: "ltr",
  es: "ltr",
} as const;

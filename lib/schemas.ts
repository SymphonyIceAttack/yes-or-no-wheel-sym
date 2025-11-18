import { z } from "zod";

export const languageSchema = z.enum(["en", "ru", "ja", "es"]);

export type Language = z.infer<typeof languageSchema>;

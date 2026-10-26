import { loadEnv } from "@refcore/shared";
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = loadEnv(envSchema, {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

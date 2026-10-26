import type { z } from "zod";

/**
 * Parses `source` against `schema`. On failure, throws a single Error whose
 * message lists every invalid/missing variable, so the process fails fast
 * with one readable message instead of a raw ZodError or an undefined
 * crash deep in the app.
 */
export function loadEnv<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  source: Record<string, string | undefined> = process.env,
): z.infer<z.ZodObject<T>> {
  const result = schema.safeParse(source);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid environment configuration:\n${issues}`);
  }

  return result.data;
}

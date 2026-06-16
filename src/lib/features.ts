/** Show quiz/midterm source metadata only when explicitly enabled (local troubleshooting). */
export const showSourceMetadata =
  process.env.NEXT_PUBLIC_SHOW_SOURCE_METADATA === "true";

/** Show common-mistakes guidance only when explicitly enabled (pending course approval). */
export const showCommonMistakes =
  process.env.NEXT_PUBLIC_SHOW_COMMON_MISTAKES === "true";

/** Show the formula selection wizard (default on; set NEXT_PUBLIC_SHOW_FORMULA_CHOOSER=false to hide). */
export const showFormulaChooser =
  process.env.NEXT_PUBLIC_SHOW_FORMULA_CHOOSER !== "false";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

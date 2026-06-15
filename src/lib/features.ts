/** Show quiz/midterm source metadata only when explicitly enabled (local troubleshooting). */
export const showSourceMetadata =
  process.env.NEXT_PUBLIC_SHOW_SOURCE_METADATA === "true";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

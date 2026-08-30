const trimTrailingSlashes = (value: string) => value.replace(/\/+$/, "")

const normalizeBasePath = (value: string) => {
  const trimmed = value.replace(/^\/+|\/+$/g, "")
  return trimmed ? `/${trimmed}` : ""
}

const configuredBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "")
const configuredSiteUrl = trimTrailingSlashes(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
)

export const APP_STORE_URL = "https://apps.apple.com/ie/app/kyuva/id6804827338?mt=12"
export const APP_STORE_LANDING_URL =
  "https://apps.apple.com/ie/app/apple-store/id6804827338?pt=129302835&ct=kyuva-landing&mt=8"

export const basePath = configuredBasePath
export const siteUrl =
  configuredBasePath && !configuredSiteUrl.endsWith(configuredBasePath)
    ? `${configuredSiteUrl}${configuredBasePath}`
    : configuredSiteUrl

export function withBasePath(path: string) {
  if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(path)) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return normalizedPath === "/"
    ? `${basePath}/` || "/"
    : `${basePath}${normalizedPath}`
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}

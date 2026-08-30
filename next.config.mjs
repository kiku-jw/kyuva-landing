/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const basePath = rawBasePath === "" || rawBasePath === "/" ? "" : `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig

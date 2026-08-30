import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { absoluteUrl, withBasePath } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: "Kyuva — Free local-first teleprompter for Mac",
  description:
    "Keep your script close to the camera with a free Mac teleprompter. No account, ads, analytics, cloud upload, or subscription.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: "Kyuva — Free local-first teleprompter for Mac",
    description:
      "A compact camera-side teleprompter with flexible pacing, local scripts, and no account.",
    siteName: "Kyuva",
  },
  twitter: {
    card: "summary",
    title: "Kyuva — Free local-first teleprompter for Mac",
    description:
      "A compact camera-side teleprompter with flexible pacing, local scripts, and no account.",
  },
  icons: {
    icon: [
      {
        url: withBasePath("/icon-light-32x32.png"),
        media: "(prefers-color-scheme: light)",
      },
      {
        url: withBasePath("/icon-dark-32x32.png"),
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: withBasePath("/icon.svg"),
        type: "image/svg+xml",
      },
    ],
    apple: withBasePath("/apple-icon.png"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

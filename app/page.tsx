import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { FeaturesBentoSection } from "@/components/features-bento-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { absoluteUrl } from "@/lib/site"

const appStoreUrl = "https://apps.apple.com/app/id6804827338?mt=12"

export default function Home() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kyuva",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS 13 or later",
    description:
      "A free, local-first teleprompter for Mac with a compact camera-side overlay and flexible pacing.",
    url: absoluteUrl("/"),
    downloadUrl: appStoreUrl,
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Mykyta Dudnichenko",
    },
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] opacity-25" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HowItWorksSection />
        <UseCasesSection />
        <FeaturesBentoSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  )
}

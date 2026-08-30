import type { Metadata } from "next"
import { APP_STORE_LANDING_URL, absoluteUrl, withBasePath } from "@/lib/site"

const template = `[OPENING — 1 sentence]
If you [audience] and [specific problem], here is a simpler way to [result].

[PROBLEM — 1–2 sentences]
Usually, [old workflow] means [friction or cost].
That gets in the way when [real situation].

[DEMO — 3 short steps]
First, [show the starting point].
Next, [perform the core action].
Now you have [visible result].

[BOUNDARY — 1 sentence]
This is useful when [supported case], but it does not [important limitation].

[NEXT STEP — 1 sentence]
Try it at [link or App Store name], and start with [small first action].`

export const metadata: Metadata = {
  title: "Product demo script template for a teleprompter — Kyuva",
  description:
    "A free 60–90 second product demo script template. Fill five short sections, paste it into Kyuva or another teleprompter, and record a focused walkthrough.",
  alternates: {
    canonical: absoluteUrl("/product-demo-script-template/"),
  },
}

export default function ProductDemoScriptTemplatePage() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Write a 60–90 second product demo script",
    description:
      "Fill a five-part plain-text template, rehearse it in a teleprompter, and record a focused product walkthrough.",
    totalTime: "PT15M",
    step: [
      "Name one audience and one painful problem.",
      "Show the old friction in one or two sentences.",
      "Demonstrate the product in three visible steps.",
      "State one honest limitation or unsupported case.",
      "Finish with one small next action.",
    ].map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <article className="mx-auto max-w-3xl">
        <a href={withBasePath("/")} className="text-sm text-[#22c55e] hover:underline">
          ← Kyuva
        </a>

        <header className="mt-8 border-b border-white/10 pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#22c55e]">
            Free plain-text template
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Product demo script template for a teleprompter
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#a3a3a3]">
            Build a focused 60–90 second walkthrough from five short sections.
            Paste the result into Kyuva or any teleprompter; no account is needed
            to use the template.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={withBasePath("/product-demo-script-template.txt")}
              download
              className="rounded-xl bg-[#22c55e] px-5 py-3 text-center font-semibold text-[#0a0a0a] hover:bg-[#16a34a]"
            >
              Download the .txt template
            </a>
            <a
              href={APP_STORE_LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-5 py-3 text-center font-semibold hover:bg-white/5"
            >
              Get Kyuva for Mac
            </a>
          </div>
        </header>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">The template</h2>
          <pre className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-[#d4d4d4]">
            {template}
          </pre>
        </section>

        <section className="border-t border-white/10 py-10">
          <h2 className="text-2xl font-semibold">Keep the recording believable</h2>
          <ol className="mt-5 space-y-4 text-[#a3a3a3]">
            <li><strong className="text-white">1. Show, do not list.</strong> Keep only the three actions a viewer can see on screen.</li>
            <li><strong className="text-white">2. Use short lines.</strong> One thought per line is easier to read near the camera.</li>
            <li><strong className="text-white">3. Name a limit.</strong> A clear unsupported case is more useful than a broad promise.</li>
            <li><strong className="text-white">4. Ask for one action.</strong> End with one download, test, or reply—not three competing links.</li>
          </ol>
        </section>

        <section className="border-t border-white/10 py-10">
          <h2 className="text-2xl font-semibold">A simple KikuAI workflow</h2>
          <p className="mt-4 leading-7 text-[#a3a3a3]">
            Draft with this template, rehearse beside the camera in Kyuva, then
            record in the tool you already use. If you want a captioned MP4 and
            editable SRT, KikuAI Automatic Subtitles is a separate server-processed
            option with its own upload and retention terms.
          </p>
          <a
            href="https://kikuai.dev/tools/auto-subtitles/"
            className="mt-5 inline-block text-[#22c55e] hover:underline"
          >
            Review Automatic Subtitles →
          </a>
        </section>

        <aside className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6 text-sm leading-6 text-[#c8c8c8]">
          Kyuva is a normal macOS window and may appear in a screen share or
          recording. Check the preview first, or capture a single app window that
          does not include the teleprompter.
        </aside>
      </article>
    </main>
  )
}

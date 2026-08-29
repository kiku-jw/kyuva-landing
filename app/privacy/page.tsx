export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg">
                    <p className="text-[#888] text-lg mb-8">
                        <strong>Effective Date:</strong> January 5, 2026
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Overview</h2>
                    <p className="text-[#888] mb-4">
                        Kyuva is a teleprompter for Mac published by Mykyta Dudnichenko. This page summarizes how the public App Store version handles data.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Collection</h2>
                    <p className="text-[#888] mb-4">
                        <strong className="text-white">Nothing.</strong> Kyuva does not collect, store, or transmit any personal data.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Local Data Only</h3>
                    <ul className="text-[#888] space-y-2 mb-4">
                        <li><strong className="text-white">Scripts:</strong> Stored locally in Kyuva&apos;s sandboxed Application Support container</li>
                        <li><strong className="text-white">Settings:</strong> Stored in macOS UserDefaults</li>
                        <li><strong className="text-white">No Cloud Sync:</strong> We do not sync any data to external servers</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Audio and Speech</h3>
                    <p className="text-[#888] mb-4">
                        Mac App Store version 1.0 does not request microphone or Speech Recognition access. An optional on-device Voice Follow mode exists only in development source until a future update is separately reviewed.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
                    <p className="text-[#888] mb-4">
                        The public app does not integrate analytics, advertising, tracking, StoreKit purchases, or a developer-operated cloud service. This website does not embed analytics or advertising code; its hosting provider may process ordinary technical request logs under its own terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
                    <p className="text-[#888] mb-4">
                        Scripts are protected by your Mac and its app sandbox. Removing the app may leave local support data behind on macOS, which you can delete separately.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact</h2>
                    <p className="text-[#888] mb-4">
                        For privacy questions: <a href="mailto:privacy@kikuai.dev" className="text-[#22c55e] hover:underline">privacy@kikuai.dev</a>
                    </p>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-[#666] text-sm">
                            <strong>Summary:</strong> Kyuva is a privacy-first app. We collect nothing. Everything stays on your Mac.
                        </p>
                        <p className="text-[#666] text-sm mt-4">
                            The full current policy is maintained in the <a href="https://github.com/kiku-jw/kyuva/blob/main/PRIVACY.md" className="text-[#22c55e] hover:underline">public source repository</a>.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

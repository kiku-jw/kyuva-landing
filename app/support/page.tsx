export default function SupportPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Support</h1>

                <div className="space-y-8">
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Get Help</h2>
                        <p className="text-[#888] mb-6">
                            Check the quick tips below, report a reproducible issue, or send feedback. Do not attach private scripts or recordings.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="https://github.com/kiku-jw/kyuva/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-white mb-1">GitHub Issues</h3>
                                <p className="text-[#888] text-sm">Report bugs or request features</p>
                            </a>

                            <a
                                href="mailto:support@kikuai.dev"
                                className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                                <p className="text-[#888] text-sm">support@kikuai.dev</p>
                            </a>
                        </div>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">Quick Tips</h2>

                        <div className="space-y-4 text-[#888]">
                            <div>
                                <h3 className="text-white font-medium mb-1">Overlay not showing?</h3>
                                <p className="text-sm">Use the text-bubble menu-bar icon and choose Show Teleprompter. Kyuva does not require Accessibility or Input Monitoring permission.</p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-1">Scrolling too fast/slow?</h3>
                                <p className="text-sm">Hover over the overlay and use its controls, or press Control–Option–Left/Right Arrow.</p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-1">Will the overlay appear in a capture?</h3>
                                <p className="text-sm">It may. Kyuva is a normal macOS window. Check the preview, or share a single app window that omits Kyuva.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold text-white mb-4">System Requirements</h2>

                        <ul className="text-[#888] space-y-2">
                            <li>• macOS 13.0 or later</li>
                            <li>• Apple Silicon or Intel Mac</li>
                            <li>• No account, network, microphone, Accessibility, or Input Monitoring permission required in App Store version 1.0</li>
                        </ul>
                    </section>

                    <p className="text-sm text-[#666]">
                        <a href="/" className="text-[#22c55e] hover:underline">Back to Kyuva</a>
                    </p>
                </div>
            </div>
        </main>
    )
}

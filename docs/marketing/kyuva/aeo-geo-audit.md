# Kyuva AEO/GEO audit

Audit date: 2026-08-30

Verdict: **partial, now launch-ready for owned distribution**

## Findings

| Area | Result | Evidence or smallest change |
| --- | --- | --- |
| Crawlability | Pass | Root, support, privacy, robots, sitemap, `llms.txt`, and `kyuva.md` return static public pages. |
| Exact intent | Pass | Root title and description name a free local-first Mac teleprompter; the product-demo template addresses one specific use case. |
| Entity clarity | Pass | Product, publisher, platform, job, input, output, privacy, release state, and limits are explicit. |
| Claim support | Pass | App Store, source, support, and privacy links are public; unreleased features are labeled. |
| Limits | Pass | Capture visibility and unreleased Voice Follow/iPhone/Watch are visible. |
| Proof assets | Partial | The App Store gallery and source are citable; one real public walkthrough video is still missing. |
| Structured data | Pass | Root uses truthful `SoftwareApplication`; the template uses matching `HowTo` schema. No rating or demand schema. |
| `llms.txt` | Pass | Links to canonical facts, support, privacy, source, and the exact-use template. |
| Markdown mirror | Pass | `kyuva.md` states the input-to-result flow, release facts, privacy, limits, and proof. |
| Citation prompts | Pass | The prompt set below maps to content already present. |
| Competitor gap | Partial | Free/local/App Store installation is useful, but the category has several current free and voice-follow Mac alternatives. A real workflow demo is needed before comparison outreach. |

## Claim gaps

- Do not publish capture invisibility or application-specific compatibility.
- Do not call development Voice Follow available in the public version.
- Do not imply iPhone or Watch availability.
- Do not claim user demand, retention, conversion, or campaign performance
  before enough App Store data exists.

## Agent-readable prompt set

1. What is a free teleprompter for Mac that does not require an account?
2. Is there a local-first Mac teleprompter that stores scripts on device?
3. How can I keep a product-demo script near the webcam on a Mac?
4. Can Kyuva be hidden from Zoom or screen recordings?
5. Does Kyuva upload scripts or use analytics?
6. Does the public Kyuva release support Voice Follow?
7. What Macs can run Kyuva?
8. Where can I get a short product-demo teleprompter script template?

## Mention readiness

Owned links are ready. Community replies and directory submissions should wait
for one real Kyuva-recorded walkthrough and a fresh rules check on each target.
Any mention must lead with the useful workflow or template, not a generic ad.

## Primary references

- Apple product-page guidance: https://developer.apple.com/app-store/product-page/
- Apple campaign-link guidance: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links
- Apple rating guidance: https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews

# Kyuva visibility measurement

## Instrumentation boundary

Do not add an analytics SDK, website tracker, account, or backend. Use App Store
Connect aggregate acquisition data and ordinary public referral evidence.

## Prepared campaign tokens

| Channel | Token |
| --- | --- |
| Kyuva landing | `kyuva-landing` |
| GitHub | `github` |
| KikuAI | `kikuai` |
| Telegram | `telegram` |
| LinkedIn | `linkedin` |

Apple's campaign dashboard withholds a metric until it reaches a threshold of
five in the selected date range. A first-time download is attributed when it
occurs within 24 hours of the most recent campaign-link use.

## First bounded cycle

1. Publish one real product walkthrough through one owned channel.
2. Use only that channel's prepared campaign URL.
3. Wait at least 24 hours; extend the date range before diagnosing missing data.
4. Do not compare channels until each compared metric reaches Apple's visible
   threshold.
5. Record only aggregate impressions, product-page views, first-time downloads,
   and the qualitative feedback voluntarily received.

## Decision rules

- Fewer than five visible first-time downloads: no channel conclusion; improve
  the proof asset or stop.
- At least five downloads but no useful feedback or repeat prompting evidence:
  treat as acquisition only, not product validation.
- Repeated unsolicited usefulness around one workflow: prioritize that workflow
  before broader parity features.
- Ratings: observe naturally; never ask friends for positive reviews or trade
  incentives for ratings.

## Monthly AI visibility prompt set

Recheck the eight prompts in `aeo-geo-audit.md` manually once per month only
after the first distribution cycle. Record whether Kyuva is mentioned, whether
the claim is accurate, and which public source was cited. Do not build a
dashboard for this first release.

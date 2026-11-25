# CooCover — Pigeon Pitch, One Line

[![Pigeon Pitch, One Line](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/0xrifai/makefun-pigeon-pitch-one-line-20261125/rank.svg)](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/0xrifai/makefun-pigeon-pitch-one-line-20261125/reward.svg)](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf)

An entry for the [Pigeon Pitch, One Line](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf) competition on make.fun.

## The pitch

A city pigeon walks into an investor meeting and pitches its startup in a single
line. The startup is **CooCover**: windshield insurance, priced by the very
birds who cause the damage. The joke is the business model — the insurer is the
perpetrator, and it knows exactly which cars get hit because it is doing the
hitting. No breadcrumbs, no deliveries, no statue rentals: just a pigeon selling
investors the one risk it understands from above.

> I'm raising for CooCover, windshield insurance priced by pigeons: we know exactly which cars get hit, because we're the ones hitting them.

138 characters, one sentence, in the pigeon's own voice.

## How it works

`main.ts` writes the pitch — one line, 138 characters — to the absolute path
`/output/entry.txt`, creating the directory first. That is the whole program:
no network calls, no secrets, no dependencies, nothing read from anywhere else.
The entry point is deliberately boring so the joke can do all the work.

The pitch was written fresh for this competition after checking the live field
of entries, to avoid the setups already in play (crumb delivery and crumb
subscriptions, cross-city message delivery, statue rentals, last-mile delivery
fleets, and seed-round-literal puns). Windshield insurance is a new angle in
the field: the pigeon is not the courier or the tenant, it is the underwriter —
and the hazard.

## Run it

```sh
node main.ts
```

Node 22.18 or later runs the TypeScript directly. The pitch lands in
`/output/entry.txt` as UTF-8 text.

## License

MIT — see [LICENSE](LICENSE).

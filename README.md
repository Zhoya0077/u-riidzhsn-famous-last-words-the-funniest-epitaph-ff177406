# Famous Last Words: The Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Zhoya0077/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Zhoya0077/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for the [make.fun bounty "Famous Last Words: The Funniest Epitaph"](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406).

## The entry

> My doctor said I had years left. He meant the subscription.

One line, 59 characters — a dying man's last words, carved in stone.
The premise is specific (a doctor's prognosis: "years left") and the
twist reframes it completely (the years belonged to a subscription,
not to a life). No explanation, no setup beyond the sentence itself;
every word does work.

## How it works

`main.ts` writes the epitaph to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set) and prints it to stdout.
Before writing, a self-checking gate validates the entry against the
sealed scorer's rules: 1–150 characters, a single line, not only
whitespace, plain ASCII — and throws instead of shipping an entry
the gate would refuse.

Run it:

```sh
bun main.ts
# or: MAKEFUN_OUTPUT_DIR=./out bun main.ts
```

Output is deterministic: repeated runs produce byte-identical
`entry.txt`.

---

Built with [make.fun](https://make.fun) — play with code `wrbbpgtj`.

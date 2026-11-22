# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Nengyara2017/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Nengyara2017/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

An editorial front page — "The World in One Day" — summing up Saturday, 21 November 2026 in a single 1024×1024 image: a Russian double-tap missile strike on Kryvyi Rih that killed a 7-year-old boy and a 20-year-old paramedic, Mexico's capture of FBI most-wanted cartel boss "El Chapo Isidro", the AI sell-off hitting world markets (S&P 500 −3.7%, Nikkei −5.06%), COP31 talks running past their deadline as the draft drops all fossil-fuel mentions, a magnitude 6.9 earthquake in Peru's Andes, and ESA–JAXA's BepiColombo entering orbit around Mercury after eight years in flight, plus a "By the Numbers" strip with the day's four key figures. The image is rendered from a self-contained `design.html` (inline CSS and flat SVG pictograms, no external resources) so every story is readable from the image alone.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, under 1 MiB), reconstructed byte-for-byte from `entry.png.b64`. Use the Node v22 binary at `~/workspace/node22/node-v22.23.5-linux-x64/bin/node` if `node` on your PATH is a different version.

---
title: "Audio specifications for Webex Calling"
product: "Webex Calling"
article_id: "gm3pa0"
url: "https://help.webex.com/en-us/article/gm3pa0/Audio-specifications-for-Webex-Calling"
last_updated: "2025-04-10"
description: "Here&#x27;s some information about which call flows within Webex Calling use Opus and
which call flows default to another codec, such as G.722 or G.711."
tags: ["webex-calling"]
source: "help.webex.com"
---

# Audio specifications for Webex Calling

We optimize the quality of calls by using the Opus codec for audio on Webex Calling. Most clients support Opus on the Webex Calling platform and, where possible, is the main codec used for audio calls.

G.711 is the universal codec. We don’t support calls with only the G.729 codec. If only G.729 is included in the codec list, there may be some call flows that won’t work correctly. Therefore, all invites must include the G.711 codec.

Opus is supported by the Webex App client and all Multiplatform Phones. Analog telephone adapters and DECT phones don’t support Opus on the Webex Calling platform. Opus is also not supported by most PSTN providers and for this reason, G.711 is used.

The Opus codec is supported in the following call flows:

- Webex App (desktop) <—> Webex App (desktop)
- Multiplatform Phone <—> Multiplatform Phone
- Multiplatform Phone <—> Webex App (desktop)
- Multiplatform Phone <—> Auto Attendant
- Multiplatform Phone <—> Voicemail
- Webex App (desktop) <—> Auto Attendant
- Webex App (desktop) <—> Voicemail
- Webex App (mobile) <—> Webex App (mobile)

Each codec consumes a bandwidth of 70-80kbps for each audio stream. We recommend that customers allow for 100kbps per audio stream on their network, keeping in mind that an internal enterprise requires two audio streams (200kbps).

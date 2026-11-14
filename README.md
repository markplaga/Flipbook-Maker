# Flipbook-Maker

Turn a GIF, video, or image sequence into numbered, printable flipbook slips.

Everything runs in the browser in a single file (`index.html`) — no build step, no server, nothing uploaded.

## What it does

- **Input:** GIF, MP4/MOV/WebM video, animated WebP/PNG (in browsers with `ImageDecoder`), or several images at once (ordered by filename).
- **Layout:** numbered slips laid out edge to edge on US Letter or A4, with the picture on the **left or right** and a shaded binding strip with the frame number on the opposite side.
- **Slip sizes:** Pocket 3×2 in, Card 3½×2 in, Wide 4×2½ in, Index 5×3 in, or custom.
- **Sequence options:** video trim and frames per second, GIF resampling, repeat loops, held first/last frames, reverse, title cover slip, blank back card.
- **Print look:** black & white, contrast, brightness, cut lines.
- **Output:** a print-ready PDF (via jsPDF) or one PNG per sheet. Print at 100% / "Actual size".
- **Flip preview:** plays the slips in the page at an adjustable speed.

## Animate with AI

- Advice for getting flipbook-friendly clips from AI video tools (locked camera, one subject and one action, plain background, bold shapes, 2–4 seconds).
- A prompt builder for text-to-video, image-to-video, or "chat AI writes the animation as code", with copy buttons.
- **Draw it with Claude:** when opened as a Claude artifact, Claude writes a `draw(ctx, t, w, h)` function and the page renders every frame straight into the flipbook. Anywhere else, copy the prompt into any chat AI and paste the code it returns.

## Running it

Open `index.html` in a browser, or serve the folder with any static host (GitHub Pages, Netlify, etc.).

The Claude-only features (Claude drawing and prompt tailoring) appear only inside Claude; everything else works anywhere.

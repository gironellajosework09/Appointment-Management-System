# Hologram prototype preview

## Current layered visual exploration — 2026-11-11

The Product Owner selected the layered direction after reviewing the illustrated concept.
The active landing and sign-in stages now combine a generated, transparent hand image with
an independently styled fictional calendar and appointment card. The calendar places June 1,
2027 on Tuesday and highlights Monday, June 14. The layers use local CSS and browser APIs
for a small idle movement and fine-pointer response. Pause, reduced motion, mobile static
presentation, offscreen suspension, and form-focus suspension remain supported. The page no
longer requests the former Three.js scene. Its files and evidence remain below as historical
material, not a description of the current active artwork.

Changed `index.html`; added `layered-hologram.css`, `layered-hologram.js`, and
`references/hologram-hand-layer-v2.webp` (75,394 bytes, generated from the Product Owner's
reviewed visual concept and encoded locally as WebP). Existing 3D scene and poster files remain
preserved. The existing local preview command below continues to serve this version. Browser
verification and screenshots for this revision are recorded in the accompanying task's local
evidence directory. This is a visual prototype and does not accept D-100 or Checkpoint 11.

Fictional UI/UX experiment under D-101 and the Product Owner's explicit authorization to use the existing local Three.js package. No product authentication, backend, database, external model, or external scene service is implemented. D-100 and Checkpoint 11 are not accepted by this experiment.

## Run locally

From the repository root, with the existing Node installation:

```powershell
node prototype/checkpoint-11/preview.cjs
```

Open <http://127.0.0.1:8142/> or <http://127.0.0.1:8142/#login>. Stop the local server with Ctrl+C. No package installation or build is required. Open through HTTP rather than `file://`, because the optional scene imports ES modules.

## Artwork and behavior

- `hologram.js`: original procedural palm, wrist, articulated finger paths, wire surfaces, orange fingertip, calendar, appointment panels, and projection rings. The scene's dates are fictional examples. It contains no embedded organization name or logo; existing session-only organization branding remains separate.
- Three.js 0.187.0 loads from the existing `node_modules/three/build/` directory. Its MIT license remains at `node_modules/three/LICENSE`. No downloaded model, texture, font, or external service is used.
- `references/hologram-poster.png` is the original browser capture of this procedural scene; `hologram-poster.webp` is its 31,578-byte browser-encoded static fallback. Both were produced locally from the original geometry. The existing booking SVG remains untouched.
- A single renderer/canvas is reused between landing and sign-in. Device pixel ratio is capped at 1.5. Pointer response is limited to fine pointers; form focus suspends animation. Pause/resume, offscreen suspension, visibility handling, reduced-motion changes, data-saving preference, context loss, and a recent-frame slow-delivery fallback are included.
- Phones at 700px or narrower and reduced-motion users see the poster without requesting Three.js. JavaScript failure also leaves the poster and primary page content available. Existing simulated routing still requires JavaScript.
- The skip link prevents the `#main` anchor from entering the hash router and focuses the visible route heading, preserving history and the current route.

## Verification evidence

`screenshots/hologram-verification.json` records 56 successful scripted checks in Chrome 157.0.8103.39, including 17 skip destinations, visible skip focus, pause/offscreen/form-focus rendering stops, live reduced motion, graphics/script failure, context loss, and landing/login overflow checks at 1440×900, 768×1024, 390×844, and 320×640. Screenshots use `hologram-{home|login}-{width}.png` in that directory.

To rerun with the already-installed Playwright used in this environment:

```powershell
node prototype/checkpoint-11/hologram-check.cjs
```

The checker accepts `PLAYWRIGHT_MODULE` for the path to an existing Playwright module, and `--headed` for a separate headed browser. It does not install anything. It regenerates only its named hologram screenshots and verification JSON. The normal session observed no external requests, console errors, or failed responses. A separate unrestricted diagnostic identified the browser's optional `/favicon.ico` request as a 404; that unrelated icon request has not been changed.

### Performance tradeoff — not a D-100 budget pass

`screenshots/hologram-performance.json` preserves three alternating samples per version against the captured pre-experiment prototype. Profile: headless Chrome 157.0.8103.39, 1440×900, 4× CPU slowdown, 40ms latency, 200,000 B/s download, 93,750 B/s upload, local uncompressed HTTP, fresh browser contexts.

- Baseline LCP: 1,856 / 1,580 / 1,696ms; median 1,696ms. New LCP: 1,632 / 1,688 / 1,688ms; median 1,688ms. The -8ms difference is inconclusive given the variation; it is not evidence of reliable improvement.
- CLS was approximately 0.00001127 in all samples. The fixed stage reserves layout space.
- Steady-state new frame samples: about 56.0–59.1fps; 2–8 intervals over 33ms during approximately 2.2 seconds per sample. Maximum interval: 50ms. This is simulated desktop evidence, not a physical-device test.
- Long-animation-frame entries attribute approximately 361–624ms script work to scene initialization in the sampled 4× profile, with additional Three.js shader preparation work. This exceeds the historical 50ms objective. Async compilation and fewer draw calls reduce avoidable work but do not establish a budget pass.
- Final incremental gzip-level-9 CSS/JS is 426,580 bytes, principally the two existing unminified Three.js modules. This exceeds D-100's historical 15KB incremental budget. The preview server does not compress HTTP; gzip sizes are calculated comparisons, not observed wire transfer. On that throttled uncompressed profile, optional runtime loading/initialization occurred around 14 seconds after navigation while the poster stayed visible.
- The raw measurements preceded the final lifecycle-only cleanup/recent-frame guard changes; functional checks were rerun afterward. Earlier D-100 evidence is preserved, not replaced or relaxed.

## Limits for visual review

The hand is a stylized procedural mesh, not an anatomical scanned model. Fine panel text is illustrative and not required to book or sign in. Mobile deliberately uses a still image. Product Owner judgment is needed on hand proportions, wireframe density, visual prominence, and whether the runtime/initialization cost is worth retaining.

Actual 200% browser zoom, real assistive-technology announcements, physical-device graphics performance, and true background-tab visibility remain unverified. Headless and headed tab-switch attempts did not produce `document.hidden=true`; browser zoom shortcuts did not change viewport/DPR. No CSS zoom or DOM inspection is presented as those tests. Sampled contrast calculations: heading/navy 17.99:1, supporting copy/navy 12.77:1, primary-button label/orange 6.21:1; this is not full WCAG conformance testing.

Preservation check: only `app.js` and `index.html` changed among the 39 captured pre-existing files; 37 retained matching SHA-256 hashes, including existing CSS, illustration, manifests, and sampled Three.js runtime files. New scene, preview, check, poster, screenshot, and report files are confined to this prototype.

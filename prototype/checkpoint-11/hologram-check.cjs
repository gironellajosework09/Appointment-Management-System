// Run against `node prototype/checkpoint-11/preview.cjs` with an already-installed Playwright.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || process.env.APPDATA + '/npm/node_modules/@playwright/mcp/node_modules/playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const base = 'http://127.0.0.1:8142/';
const results = { checks: [], consoleErrors: [], failedResponses: [], externalRequests: [], viewports: [] };
function ok(condition, name) { assert(condition, name); results.checks.push(name); }
function instrument() {
  window.draws = 0;
  for (const name of ['drawArrays', 'drawElements']) {
    const original = WebGL2RenderingContext.prototype[name];
    WebGL2RenderingContext.prototype[name] = function(...args) { window.draws++; return original.apply(this, args); };
  }
}
async function still(page, name) {
  await page.waitForTimeout(120);
  const before = await page.evaluate(() => window.draws);
  await page.waitForTimeout(350);
  ok(before === await page.evaluate(() => window.draws), name);
}
async function skip(page, route) {
  await page.evaluate(route => { location.hash = route; }, route);
  await page.waitForTimeout(120);
  const before = await page.evaluate(() => ({ hash: location.hash, length: history.length }));
  await page.locator('.skip').focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(80);
  const after = await page.evaluate(() => ({ hash: location.hash, length: history.length, tag: document.activeElement.tagName, outline: getComputedStyle(document.activeElement).outlineStyle, visible: !!document.activeElement.getClientRects().length }));
  ok(after.hash === before.hash && after.length === before.length && after.tag === 'H1' && after.visible && after.outline === 'solid', 'skip preserves route/history and visibly focuses heading: ' + route);
}
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: !process.argv.includes('--headed'), args: ['--no-proxy-server'] });
  results.browser = browser.version();
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await context.addInitScript(instrument);
    const page = await context.newPage();
    page.on('pageerror', error => { throw error; });
    page.on('console', message => { if (message.type() === 'error') results.consoleErrors.push({ text: message.text(), location: message.location() }); });
    page.on('response', response => { if (response.status() >= 400) results.failedResponses.push(response.url()); });
    await page.route('**/*', route => { if (!route.request().url().startsWith(base)) { results.externalRequests.push(route.request().url()); return route.abort(); } return route.continue(); });
    await page.goto(base);
    await page.locator('[data-hologram="home"].is-rendered').waitFor();
    const before = await page.evaluate(() => window.draws);
    await page.waitForTimeout(400);
    ok(await page.evaluate(() => window.draws) > before, 'live WebGL rendering');
    const stage = page.locator('[data-hologram="home"]');
    const box = await stage.boundingBox();
    await page.mouse.move(box.x + box.width * .15, box.y + box.height * .2);
    await page.waitForTimeout(250);
    const left = await page.locator('canvas').screenshot();
    await page.mouse.move(box.x + box.width * .85, box.y + box.height * .8);
    await page.waitForTimeout(250);
    const right = await page.locator('canvas').screenshot();
    ok(!left.equals(right), 'scene changes during pointer interaction (includes idle motion)');
    await stage.locator('button').click();
    await still(page, 'pause button stops WebGL draw calls');
    await stage.locator('button').click();
    await page.locator('#services').scrollIntoViewIfNeeded();
    await still(page, 'offscreen scene stops WebGL draw calls');
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(150);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await still(page, 'live reduced motion stops WebGL draw calls');
    ok(await page.locator('[data-hologram="home"] img').isVisible(), 'reduced-motion poster visible');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.locator('[data-hologram="home"].is-rendered').waitFor();
    await page.locator('.hero-actions a[href="#login"]').click();
    await page.waitForFunction(() => document.activeElement.matches('[data-view="login"] h1'));
    ok(await page.locator('[data-hologram="login"] canvas').count() === 1 && await page.locator('canvas').count() === 1, 'one canvas reused on sign-in');
    await page.locator('#login-email').focus();
    await still(page, 'form entry stops illustration rendering');
    await page.locator('#login-form button[type="submit"]').click();
    ok(await page.locator('#login-email').getAttribute('aria-invalid') === 'true' && await page.locator('#login-email-error').textContent() === 'Enter email address.', 'login validation remains immediate');
    results.validationLiveRegion = await page.locator('#login-email-error').getAttribute('aria-live');
    for (const route of ['home', 'login', 'register', 'recovery', 'booking', 'manage', 'review', 'confirmation', 'how', 'services']) await skip(page, route);
    await page.evaluate(() => window.itakdaPreview.switchRole('customer'));
    for (const route of ['dashboard','appointments','calendar','link','profile']) await skip(page, route);
    await page.evaluate(() => window.itakdaPreview.switchRole('staff'));
    await skip(page, 'staff-today');
    await page.evaluate(() => window.itakdaPreview.switchRole('admin'));
    await skip(page, 'admin-overview');
    await page.evaluate(() => window.itakdaPreview.signOut());
    await page.waitForFunction(() => location.hash === '#home');
    await page.waitForTimeout(150);
    let found = false;
    for (let i=0;i<20;i++) { await page.keyboard.press('Shift+Tab'); if (await page.locator('.skip').evaluate(e=>e===document.activeElement)) { found=true;break; } }
    ok(found, 'skip link reachable with reverse keyboard traversal');
    await page.keyboard.press('Enter'); await page.keyboard.press('Tab');
    ok(await page.evaluate(() => document.activeElement.matches('.hero-actions a')), 'Tab after skip reaches primary content action');
    await page.goto(base + '#home');await page.locator('[data-hologram="home"].is-rendered').waitFor();
    const other = await context.newPage(); await other.goto('about:blank');await other.bringToFront();await page.waitForTimeout(200);
    results.backgroundHidden = await page.evaluate(() => document.hidden);
    if (results.backgroundHidden) await still(page, 'real background tab stops WebGL draw calls');
    await page.bringToFront();await other.close();
    // No CSS zoom or pinch emulation is presented as actual browser zoom.
    const zoomBefore = await page.evaluate(()=>({width:innerWidth,dpr:devicePixelRatio}));
    for(let i=0;i<4;i++)await page.keyboard.press('Control++');
    const zoomAfter = await page.evaluate(()=>({width:innerWidth,dpr:devicePixelRatio}));
    results.browserZoomAttempt={before:zoomBefore,after:zoomAfter,verified200:Math.abs(zoomAfter.dpr/zoomBefore.dpr-2)<.01};await page.keyboard.press('Control+0');
    await context.close();
    const pointerPage=await browser.newPage({viewport:{width:1440,height:900}});
    await pointerPage.addInitScript(()=>{const raf=window.requestAnimationFrame.bind(window);window.requestAnimationFrame=callback=>raf(()=>callback(1000));});
    await pointerPage.goto(base);await pointerPage.locator('[data-hologram="home"].is-rendered').waitFor();
    const pointerBox=await pointerPage.locator('[data-hologram="home"]').boundingBox();
    await pointerPage.mouse.move(pointerBox.x+pointerBox.width*.1,pointerBox.y+pointerBox.height*.1);await pointerPage.waitForTimeout(400);
    const pointerLeft=await pointerPage.locator('canvas').screenshot();
    await pointerPage.mouse.move(pointerBox.x+pointerBox.width*.9,pointerBox.y+pointerBox.height*.9);await pointerPage.waitForTimeout(400);
    ok(!pointerLeft.equals(await pointerPage.locator('canvas').screenshot()),'pointer changes scene with idle time held constant');await pointerPage.close();
    for(const [width,height] of [[1440,900],[768,1024],[390,844],[320,640]]) {
      const p=await browser.newPage({viewport:{width,height}});const packages=[];
      p.on('request',r=>{if(r.url().includes('/node_modules/'))packages.push(r.url())});
      await p.goto(base);await p.waitForTimeout(1800);
      for(const view of ['home','login']) {
        await p.evaluate(v=>location.hash=v,view);await p.waitForTimeout(200);
        const dimensions=await p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
        ok(dimensions.width===dimensions.scroll, 'no document overflow: '+view+' '+width);
        results.viewports.push({view,width,height,...dimensions});
        await p.screenshot({path:path.join(__dirname,'screenshots',`hologram-${view}-${width}.png`),fullPage:true});
      }
      if(width<=700)ok(!packages.length,'no Three.js requests on '+width+'px mobile');
      await p.close();
    }
    for(const mode of ['reduced','nojs','no-webgl','blocked-module','blocked-three','no-observer','save-data']) {
      const p=await browser.newPage({viewport:{width:1440,height:900},javaScriptEnabled:mode!=='nojs',reducedMotion:mode==='reduced'?'reduce':'no-preference'});
      if(mode==='no-webgl')await p.addInitScript(()=>{const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return type.includes('webgl')?null:get.call(this,type,...args)}});
      if(mode==='no-observer')await p.addInitScript(()=>delete window.IntersectionObserver);
      if(mode==='save-data')await p.addInitScript(()=>Object.defineProperty(navigator,'connection',{value:{saveData:true}}));
      if(mode==='blocked-module')await p.route('**/hologram.js',r=>r.abort());
      if(mode==='blocked-three')await p.route('**/node_modules/three/**',r=>r.abort());
      await p.goto(base);await p.waitForTimeout(1700);
      ok(await p.locator('[data-hologram="home"] img').isVisible(),'poster fallback: '+mode);
      if(mode!=='nojs'){await p.locator('.hero-actions a[href="#login"]').click();ok(await p.locator('[data-view="login"]').isVisible(),'sign-in independent of graphics: '+mode);}
      await p.close();
    }
    const loss=await browser.newPage();await loss.goto(base);await loss.locator('[data-hologram="home"].is-rendered').waitFor();
    await loss.locator('canvas').evaluate(canvas=>canvas.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());await loss.waitForTimeout(300);
    ok(await loss.locator('[data-hologram="home"] img').isVisible() && await loss.locator('canvas').count()===0,'context loss disposes renderer and restores poster');await loss.close();
    const slow=await browser.newPage();await slow.addInitScript(()=>{const raf=window.requestAnimationFrame.bind(window);let time=0;window.slowFrames=false;window.requestAnimationFrame=callback=>raf(()=>callback(time+=window.slowFrames?100:16.7));});
    await slow.goto(base);await slow.locator('[data-hologram="home"].is-rendered').waitFor();
    await slow.waitForTimeout(3300);ok(await slow.locator('[data-hologram="home"].is-rendered').count()===1,'smooth-frame window stays rendered');await slow.evaluate(()=>window.slowFrames=true);
    await slow.waitForFunction(()=>!document.querySelector('[data-hologram="home"]').classList.contains('is-rendered'));
    ok(await slow.locator('[data-hologram="home"] img').isVisible(),'recent slow frames restore poster after a smooth window (synthetic timestamps)');await slow.close();
    ok(!results.externalRequests.length,'no external requests');
    fs.writeFileSync(path.join(__dirname,'screenshots','hologram-verification.json'),JSON.stringify(results,null,2));
    console.log(JSON.stringify(results,null,2));
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);console.log(JSON.stringify(results,null,2));process.exitCode=1;});

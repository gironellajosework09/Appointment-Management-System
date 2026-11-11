// Original procedural artwork. Three.js is the locally authorized prototype dependency.
const stages = [...document.querySelectorAll('[data-hologram]')];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const small = matchMedia('(max-width: 700px)');
const fine = matchMedia('(pointer: fine)');
let engine, loading = false, failed = false, paused = false, frame = 0, last = 0, elapsed = 0;
let current, inView = false, pageAway = false, slowFrames = 0, samples = 0;
const pointer = { x: 0, y: 0 };
const activeStage = () => stages.find(stage => !stage.closest('[hidden]'));
const eligible = () => !reduced.matches && !small.matches && !navigator.connection?.saveData && 'IntersectionObserver' in window;

function stop() {
  cancelAnimationFrame(frame); frame = 0; last = 0;
}
function fallback() {
  stop();
  stages.forEach(stage => { stage.classList.remove('is-rendered'); stage.querySelector('button').hidden = true; });
}
function canAnimate() {
  return engine && eligible() && current && !current.closest('[hidden]') && inView && !document.hidden && !pageAway && !paused && !failed &&
    !(current.dataset.hologram === 'login' && document.activeElement.closest('.auth-form'));
}
function render(now) {
  frame = 0;
  if (!canAnimate()) return;
  const delta = last ? now - last : 16.7;
  last = now; elapsed += Math.min(delta, 50) / 1000;
  samples++;
  if (delta > 70) slowFrames++;
  // Sustained slow delivery gets the static fallback, not a perpetual expensive scene.
  if (samples >= 150) {
    const struggling = slowFrames / samples > .35;
    samples = slowFrames = 0;
    if (struggling) { failed = true; fallback(); return; }
  }
  engine.draw(elapsed, pointer, current.dataset.hologram === 'login');
  frame = requestAnimationFrame(render);
}
function resume() { if (canAnimate() && !frame) frame = requestAnimationFrame(render); }
const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.target === current) inView = entry.isIntersecting;
  if (!inView) stop(); else resume();
}, { threshold: .01 }) : null;

async function sync() {
  if (!eligible() || failed) { fallback(); return; }
  const stage = activeStage();
  if (!stage) { fallback(); current = null; return; }
  if (!engine) {
    if (stage.dataset.hologram === 'login' && document.activeElement.matches('input,select,textarea')) return;
    if (loading) return;
    loading = true;
    try {
      const THREE = await import('./node_modules/three/build/three.module.js');
      if (!eligible() || !activeStage() || document.activeElement.matches('.auth-form input')) return;
      const prepared = await makeScene(THREE);
      if (failed) { prepared.dispose(); return; }
      engine = prepared;
    } catch (error) {
      failed = true;
      console.warn('Hologram unavailable; static illustration retained.', error.message);
    } finally { loading = false; }
    if (failed) { fallback(); return; }
    return sync();
  }
  if (current !== stage) {
    fallback(); observer?.disconnect(); current = stage;
    pointer.x = pointer.y = 0;
    stage.prepend(engine.canvas);
    const box = stage.getBoundingClientRect();
    inView = box.bottom > 0 && box.top < innerHeight;
    observer?.observe(stage);
  }
  engine.resize(stage.clientWidth, stage.clientHeight);
  engine.draw(elapsed, pointer, stage.dataset.hologram === 'login');
  stage.classList.add('is-rendered');
  stage.querySelector('button').hidden = false;
  resume();
}
for (const stage of stages) {
  stage.addEventListener('pointermove', event => {
    if (!fine.matches || !eligible() || stage !== current) return;
    const box = stage.getBoundingClientRect();
    pointer.x = (event.clientX - box.left) / box.width - .5;
    pointer.y = (event.clientY - box.top) / box.height - .5;
  });
  stage.addEventListener('pointerleave', () => { pointer.x = pointer.y = 0; });
  stage.querySelector('button').addEventListener('click', () => {
    paused = !paused;
    for (const s of stages) { const b = s.querySelector('button'); b.textContent = paused ? 'Resume illustration' : 'Pause illustration'; b.setAttribute('aria-pressed', String(paused)); }
    if (paused) stop(); else resume();
  });
}
addEventListener('hashchange', sync);
addEventListener('resize', () => { if (engine) sync(); });
addEventListener('pagehide', event => { pageAway = true; stop(); if (!event.persisted) { engine?.dispose(); engine = null; } });
addEventListener('pageshow', () => { pageAway = false; if (engine) sync(); });
addEventListener('blur', () => { pointer.x = pointer.y = 0; });
document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else sync(); });
document.addEventListener('focusin', () => { if (!canAnimate()) stop(); });
document.addEventListener('focusout', () => setTimeout(() => engine ? resume() : sync(), 0));
reduced.addEventListener('change', sync); small.addEventListener('change', sync);
// Let meaningful content and the fallback paint before fetching the optional renderer.
const schedule = () => setTimeout(sync, 900);
if (document.readyState === 'complete') schedule(); else addEventListener('load', schedule, { once: true });

async function makeScene(T) {
  const renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new T.Scene();
  let disposed = false;
  function dispose() {
    if (disposed) return;
    disposed = true;
    const geometries=new Set(),materials=new Set(),textures=new Set();
    scene.traverse(object=>{if(object.geometry)geometries.add(object.geometry);if(object.material)materials.add(object.material);});
    materials.forEach(material=>{if(material.map)textures.add(material.map);material.dispose();});
    textures.forEach(texture=>texture.dispose());geometries.forEach(geometry=>geometry.dispose());renderer.dispose();canvas.remove();
  }
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); failed = true; fallback(); dispose(); engine = null; });
  const camera = new T.PerspectiveCamera(35, 1, .1, 40); camera.position.set(0, .3, 10);
  const world = new T.Group(); scene.add(world);
  const cyan = new T.MeshBasicMaterial({ color: 0x76ddff, transparent: true, opacity: .16, side: T.DoubleSide, depthWrite: false });
  const wire = new T.LineBasicMaterial({ color: 0x74d9ef, transparent: true, opacity: .46 });
  const orange = new T.MeshBasicMaterial({ color: 0xffa260 });
  function line(points, material = wire, parent = world) {
    const object = new T.Line(new T.BufferGeometry().setFromPoints(points.map(p => new T.Vector3(...p))), material); parent.add(object); return object;
  }
  function ring(radius, parent, color = 0x65d8ff, opacity = .35) {
    const points = Array.from({length:97}, (_,i) => [Math.cos(i / 96 * Math.PI * 2) * radius, 0, Math.sin(i / 96 * Math.PI * 2) * radius]);
    return line(points, new T.LineBasicMaterial({color, transparent:true, opacity}), parent);
  }
  const floor = new T.Group(); floor.position.set(.15,-1.82,0); world.add(floor);
  ring(2.45,floor); ring(2.14,floor,0x4944a8,.65); ring(1.28,floor,0x65d8ff,.14);
  const ticks=[];
  for(let i=0;i<48;i++){const a=i/48*Math.PI*2;ticks.push(new T.Vector3(Math.cos(a)*2.3,0,Math.sin(a)*2.3),new T.Vector3(Math.cos(a)*2.36,0,Math.sin(a)*2.36));}
  floor.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(ticks),wire));

  const hand = new T.Group(); hand.position.set(.88,-1.05,.55); hand.rotation.set(-.16,-.25,.12); world.add(hand);
  // Elliptical cross-sections make a continuous palm and wrist, with a deliberately digital mesh.
  const palmPoints = [[-.03,-1.2,.27,.19],[0,-.65,.32,.19],[0,-.35,.46,.20],[0,.05,.58,.22],[0,.5,.55,.19],[0,.73,.48,.15]];
  const vertices=[], indices=[];
  for(const [x,y,rx,rz] of palmPoints) for(let i=0;i<24;i++){const a=i/24*Math.PI*2;vertices.push(x+Math.cos(a)*rx,y,Math.sin(a)*rz);}
  for(let j=0;j<palmPoints.length-1;j++)for(let i=0;i<24;i++){const a=j*24+i,b=j*24+(i+1)%24;indices.push(a,b,a+24,b,b+24,a+24);}
  const palmGeometry=new T.BufferGeometry();palmGeometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));palmGeometry.setIndex(indices);palmGeometry.computeVertexNormals();
  hand.add(new T.Mesh(palmGeometry,cyan));hand.add(new T.LineSegments(new T.WireframeGeometry(palmGeometry),wire));
  function finger(points, radius) {
    const curve = new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
    const geometry = new T.TubeGeometry(curve,18,radius,8,false);
    hand.add(new T.Mesh(geometry,cyan));
    hand.add(new T.LineSegments(new T.WireframeGeometry(geometry),wire));
    return points.at(-1);
  }
  const tip=finger([[-.36,.6,0],[-.39,1.08,.02],[-.38,1.65,.12],[-.34,2.08,.25]],.115);
  finger([[-.06,.7,0],[.03,1.16,.04],[.15,1.2,.32],[.18,.93,.48]],.12);
  finger([[.22,.63,0],[.38,1,.05],[.48,1.02,.3],[.44,.72,.46]],.108);
  finger([[.44,.48,0],[.64,.73,.07],[.7,.74,.27],[.61,.48,.38]],.09);
  finger([[-.43,-.12,.03],[-.78,.1,.16],[-.88,.5,.28],[-.77,.75,.34]],.135);
  const focal=new T.Mesh(new T.SphereGeometry(.135,16,12),orange);focal.position.set(...tip);hand.add(focal);
  const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;
  const glowContext=glowCanvas.getContext('2d');const gradient=glowContext.createRadialGradient(32,32,0,32,32,32);
  gradient.addColorStop(0,'rgba(255,255,255,.65)');gradient.addColorStop(.25,'rgba(255,255,255,.18)');gradient.addColorStop(1,'rgba(255,255,255,0)');
  glowContext.fillStyle=gradient;glowContext.fillRect(0,0,64,64);
  const glowTexture=new T.CanvasTexture(glowCanvas);
  const glow=new T.Sprite(new T.SpriteMaterial({map:glowTexture,color:0xff9a4a,transparent:true,blending:T.AdditiveBlending,depthWrite:false}));
  glow.position.copy(focal.position);glow.scale.setScalar(.8);hand.add(glow);
  const wash=new T.Sprite(new T.SpriteMaterial({map:glowTexture,color:0x285ca8,transparent:true,blending:T.AdditiveBlending,depthWrite:false,opacity:.4}));wash.position.set(.3,-.5,-1);wash.scale.set(6,5,1);world.add(wash);
  const pulse=new T.Mesh(new T.RingGeometry(.18,.195,48),new T.MeshBasicMaterial({color:0xffa260,transparent:true,opacity:.65,side:T.DoubleSide,depthWrite:false}));pulse.position.copy(focal.position);pulse.position.z+=.08;hand.add(pulse);
  for(let i=0;i<4;i++){const r=ring(.32+i*.025,hand,0x75ddff,.28);r.position.y=-.72-i*.1;r.scale.z=.65;}

  function panel(width,height,paint) {
    const surface=document.createElement('canvas'); surface.width=768;surface.height=Math.round(768*height/width);
    const ctx=surface.getContext('2d'); paint(ctx,surface.width,surface.height);
    const texture=new T.CanvasTexture(surface);texture.colorSpace=T.SRGBColorSpace;
    const group=new T.Group();
    group.add(new T.Mesh(new T.PlaneGeometry(width,height),new T.MeshBasicMaterial({map:texture,transparent:true,side:T.DoubleSide,depthWrite:false})));
    line([[-width/2,-height/2,0],[width/2,-height/2,0],[width/2,height/2,0],[-width/2,height/2,0],[-width/2,-height/2,0]],wire,group);
    world.add(group);return group;
  }
  const calendar=panel(2.62,2.6,(c,w,h)=>{
    c.fillStyle='rgba(15,35,70,.91)';c.fillRect(0,0,w,h);
    c.fillStyle='#c9efff';c.font='500 27px Segoe UI';c.fillText('Your next visit',52,68);
    c.font='600 64px Segoe UI';c.fillText('June 2027',50,151);
    c.strokeStyle='#477084';c.beginPath();c.moveTo(50,187);c.lineTo(w-50,187);c.stroke();
    const days=['M','T','W','T','F','S','S'];c.font='22px Segoe UI';c.fillStyle='#91b7cf';days.forEach((d,i)=>c.fillText(d,63+i*94,237));
    for(let i=0;i<28;i++){const x=53+i%7*94,y=275+Math.floor(i/7)*88;if(i===13){c.fillStyle='#e97932';c.beginPath();c.roundRect(x-7,y-9,67,62,10);c.fill();}c.fillStyle=i===13?'#11113b':'#d0eeff';c.font='500 27px Segoe UI';c.fillText(String(i+1),x+8,y+30);}
    c.fillStyle='rgba(77,178,210,.13)';c.fillRect(45,h-110,w-90,70);c.fillStyle='#c9efff';c.font='26px Segoe UI';c.fillText('10:30 AM',65,h-66);c.fillStyle='#84d9e9';c.font='22px Segoe UI';c.fillText('Example time',w-240,h-66);
  });calendar.position.set(-.6,.9,-.35);calendar.rotation.set(.06,.25,-.09);
  const ticket=panel(1.85,.78,(c,w,h)=>{c.fillStyle='rgba(20,43,79,.94)';c.fillRect(0,0,w,h);c.fillStyle='#86e3f5';c.font='34px Segoe UI';c.fillText('A time that fits.',40,87);c.fillStyle='#d6e8ff';c.font='52px Segoe UI';c.fillText('Mon, 14 Jun',40,167);c.fillStyle='#a5bcd7';c.font='26px Segoe UI';c.fillText('Fictional appointment',40,232);});ticket.position.set(1.35,1.5,.3);ticket.rotation.set(0,-.28,.07);
  const chip=panel(1.28,.48,(c,w,h)=>{c.fillStyle='rgba(25,49,87,.96)';c.fillRect(0,0,w,h);c.fillStyle='#e97932';c.beginPath();c.arc(66,110,15,0,Math.PI*2);c.fill();c.fillStyle='#d2f3ff';c.font='48px Segoe UI';c.fillText('Your choice',110,128);});chip.position.set(-1.7,-.85,.55);chip.rotation.set(0,.15,-.07);
  let rx=0,ry=0;
  try { await renderer.compileAsync(scene,camera); } catch (error) { dispose(); throw error; }
  if (disposed) throw new Error('Graphics context lost during initialization');
  return {
    canvas,
    dispose,
    resize(width,height){if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.position.z=camera.aspect<1?11.6:9.6;camera.updateProjectionMatrix();},
    draw(time,pointer,calm){
      rx+=(pointer.y*.1-rx)*.045;ry+=(pointer.x*.18-ry)*.045;
      world.rotation.set(rx,ry,0);world.position.y=Math.sin(time*.65)*(calm?.012:.035);
      ticket.position.y=1.5+Math.sin(time*.8)*.045;chip.position.y=-.85+Math.sin(time*.7+2)*.035;
      pulse.scale.setScalar(1+Math.sin(time*1.2)*.12);focal.scale.setScalar(1+Math.abs(ry)*.8);
      renderer.render(scene,camera);
    }
  };
}

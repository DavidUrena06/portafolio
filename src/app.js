// ============================================================
//  main.js — el universo de partículas.
//  Miles de partículas con física propia que forman lo que pide cada
//  sección (nombre, foto, galaxia, planeta, lluvia, agujero negro) y
//  reaccionan al dedo/mouse: empujar, remover, mantener = gravedad,
//  soltar = onda expansiva, agitar el teléfono = explosión.
// ============================================================
import { AdditiveBlending, BufferAttribute, BufferGeometry, Clock, DynamicDrawUsage, LineBasicMaterial, LineSegments, MathUtils, PerspectiveCamera, Points, Scene, ShaderMaterial, Vector3, WebGLRenderer } from 'three';
import { gsap } from 'gsap';
import { Musica } from './musica.js';
import { initSkills } from './skills.js';
import { initMatrix } from './matrix.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const mobile = matchMedia('(pointer: coarse)').matches || innerWidth < 700;
const fine = matchMedia('(pointer: fine)').matches;
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const CFG = JSON.parse(document.getElementById('cfg').textContent);
const N = calm ? 5000 : mobile ? 9000 : 20000;
const CAM_Z = 10;

history.scrollRestoration = 'manual';
scrollTo(0, 0);
document.body.classList.add('locked');

// ---------- vibración (Android vibrate; iPhone truco del switch) ----------
const hapticEl = $('#haptic');
function haptic(ms = 10) {
  if (navigator.vibrate) navigator.vibrate(ms);
  else try { hapticEl.click(); } catch (e) {}
}

// ============================================================
//  escena three.js
// ============================================================
const canvas = $('#gl');
const renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 1.75));
renderer.setSize(innerWidth, innerHeight, false);
renderer.setClearColor(0x07070b, 1);
const scene = new Scene();
const camera = new PerspectiveCamera(50, innerWidth / innerHeight, .1, 200);
camera.position.z = CAM_Z;

function view() {
  const h = 2 * Math.tan(MathUtils.degToRad(camera.fov / 2)) * CAM_Z;
  return { w: h * camera.aspect, h };
}

// ---------- datos de cada partícula ----------
const pos = new Float32Array(N * 3), vel = new Float32Array(N * 3), tgt = new Float32Array(N * 3);
const col = new Float32Array(N * 3), tcol = new Float32Array(N * 3);
const size = new Float32Array(N), rnd = new Float32Array(N), kSp = new Float32Array(N);
const pr = new Float32Array(N), pa = new Float32Array(N), pz = new Float32Array(N), pw = new Float32Array(N);
const pk = new Uint8Array(N);
const dust = new Float32Array(N * 3);

{
  const { w, h } = view();
  for (let i = 0; i < N; i++) {
    rnd[i] = Math.random();
    size[i] = .5 + Math.pow(Math.random(), 2.5) * 1.6;
    kSp[i] = .010 + Math.random() * .018;
    dust[i * 3] = (Math.random() - .5) * w * 1.8;
    dust[i * 3 + 1] = (Math.random() - .5) * h * 1.6;
    dust[i * 3 + 2] = -14 + Math.random() * 16;
    for (let k = 0; k < 3; k++) pos[i * 3 + k] = dust[i * 3 + k];
  }
}

const geo = new BufferGeometry();
geo.setAttribute('position', new BufferAttribute(pos, 3).setUsage(DynamicDrawUsage));
geo.setAttribute('aColor', new BufferAttribute(col, 3).setUsage(DynamicDrawUsage));
geo.setAttribute('aSize', new BufferAttribute(size, 1));
geo.setAttribute('aRand', new BufferAttribute(rnd, 1));
const mat = new ShaderMaterial({
  transparent: true, depthWrite: false, blending: AdditiveBlending,
  uniforms: { uPx: { value: renderer.getPixelRatio() * (mobile ? 2.6 : 2.2) }, uTime: { value: 0 }, uPulse: { value: 0 } },
  vertexShader: `
    attribute vec3 aColor; attribute float aSize; attribute float aRand;
    uniform float uPx, uTime, uPulse;
    varying vec3 vColor; varying float vA;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.);
      gl_Position = projectionMatrix * mv;
      float tw = .7 + .3 * sin(uTime * 2.3 + aRand * 60.);
      gl_PointSize = aSize * uPx * tw * (1. + uPulse * .8) * (10. / -mv.z);
      vColor = aColor;
      vA = smoothstep(32., 6., -mv.z);
    }`,
  fragmentShader: `
    varying vec3 vColor; varying float vA;
    void main(){
      float d = length(gl_PointCoord - .5);
      float a = smoothstep(.5, .05, d);
      gl_FragColor = vec4(vColor * a * vA, 1.);
    }`,
});
const points = new Points(geo, mat);
points.frustumCulled = false;
scene.add(points);

// ---------- estrellas que se estiran al hacer scroll rápido ----------
const NS = mobile ? 500 : 1100;
const stars = new Float32Array(NS * 6);
const starZ = new Float32Array(NS);
for (let i = 0; i < NS; i++) {
  const x = (Math.random() - .5) * 26, y = (Math.random() - .5) * 18, z = -40 + Math.random() * 48;
  starZ[i] = z;
  stars.set([x, y, z, x, y, z], i * 6);
}
const sgeo = new BufferGeometry();
sgeo.setAttribute('position', new BufferAttribute(stars, 3).setUsage(DynamicDrawUsage));
const smat = new LineBasicMaterial({ color: 0xbfb6ff, transparent: true, opacity: .45, blending: AdditiveBlending, depthWrite: false });
const starLines = new LineSegments(sgeo, smat);
starLines.frustumCulled = false;
scene.add(starLines);

// ============================================================
//  figuras
// ============================================================
const C_BONE = [.93, .91, .87], C_ACC = [.55, .42, 1], C_CYAN = [.31, .94, 1], C_HOT = [1, .7, .42], C_GREEN = [.26, 1, .54];
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

let shape = { name: 'none', count: 0, cx: 0, cy: 0 };

function setCol(i, c, k) { tcol[i * 3] = c[0] * k; tcol[i * 3 + 1] = c[1] * k; tcol[i * 3 + 2] = c[2] * k; }
function setT(i, x, y, z) { tgt[i * 3] = x; tgt[i * 3 + 1] = y; tgt[i * 3 + 2] = z; }
function fillDust(from) {
  for (let i = from; i < N; i++) {
    setT(i, dust[i * 3], dust[i * 3 + 1], dust[i * 3 + 2]);
    setCol(i, rnd[i] < .2 ? C_ACC : C_BONE, .1 + rnd[i] * .12);
  }
}

// lee los pixeles de un dibujo y devuelve candidatos {u, v, b}
function sample(cw, ch, draw, minA = 120) {
  const c = document.createElement('canvas');
  c.width = cw; c.height = ch;
  const x = c.getContext('2d', { willReadFrequently: true });
  draw(x, cw, ch);
  const d = x.getImageData(0, 0, cw, ch).data;
  const out = [];
  for (let py = 0; py < ch; py += 2) for (let px = 0; px < cw; px += 2) {
    const k = (py * cw + px) * 4;
    if (d[k + 3] < minA) continue;
    const b = (d[k] * .3 + d[k + 1] * .59 + d[k + 2] * .11) / 255;
    out.push({ u: px / cw - .5, v: -(py / ch - .5) * (ch / cw), b });
  }
  return out;
}

function buildText(name, lines, dim = 1) {
  const { w, h } = view();
  const cw = 1000;
  const m = document.createElement('canvas').getContext('2d');
  m.font = '800 400px Syne';
  const fs = 400 * (cw * .94) / Math.max(...lines.map((l) => m.measureText(l).width));
  const ch = Math.ceil(fs * (lines.length * .9 + .35));
  const cands = sample(cw, ch, (x) => {
    x.font = `800 ${fs}px Syne`;
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    lines.forEach((l, i) => x.fillText(l, cw / 2, ch / 2 + (i - (lines.length - 1) / 2) * fs * .9));
  });
  const W = Math.min(mobile ? w * .9 : w * .82, 13.5, (lines.length > 1 ? h * .5 : h * .9) * cw / ch);
  const cy = mobile ? h * .06 : h * .04;
  const count = Math.floor(N * .8);
  for (let i = 0; i < count; i++) {
    const c = cands[(Math.random() * cands.length) | 0];
    setT(i, c.u * W + (Math.random() - .5) * .02, c.v * W + cy, (Math.random() - .5) * .4);
    const r = rnd[i];
    setCol(i, r < .14 ? C_ACC : r < .19 ? C_CYAN : C_BONE, (.32 + Math.random() * .2) * dim);
  }
  fillDust(count);
  return { name, count };
}

// foto: si existe assets/foto.png (fondo transparente) se usa; si no, silueta
const foto = new Image();
let fotoOk = false;
foto.onload = () => { fotoOk = true; if (shape.name === 'portrait') setShape('portrait', true); };
if (CFG.foto) foto.src = CFG.foto;

function buildPortrait() {
  const { w, h } = view();
  const cw = 400, ch = 480;
  const cands = sample(cw, ch, (x) => {
    if (fotoOk) {
      const s = Math.max(cw / foto.width, ch / foto.height);
      x.drawImage(foto, (cw - foto.width * s) / 2, (ch - foto.height * s) / 2, foto.width * s, foto.height * s);
      return;
    }
    const g = x.createLinearGradient(60, 40, 340, 480);
    g.addColorStop(0, '#fff'); g.addColorStop(.55, '#888'); g.addColorStop(1, '#222');
    x.fillStyle = g;
    x.beginPath(); x.ellipse(200, 175, 78, 100, 0, 0, Math.PI * 2); x.fill();
    x.fillRect(165, 250, 70, 70);
    x.beginPath(); x.ellipse(200, 480, 190, 150, 0, Math.PI, 0); x.fill();
    x.globalCompositeOperation = 'destination-out';
    x.fillStyle = 'rgba(0,0,0,.5)';
    x.beginPath(); x.ellipse(170, 165, 13, 7, 0, 0, Math.PI * 2); x.ellipse(232, 165, 13, 7, 0, 0, Math.PI * 2); x.fill();
  }, 60).filter((c) => Math.random() < Math.pow(c.b, 1.1) + .08);
  const H = mobile ? h * .44 : h * .82;
  const W = H * (cw / ch);
  const cx = mobile ? 0 : w * .23, cy = mobile ? h * .2 : 0;
  const count = Math.floor(N * .85);
  for (let i = 0; i < count; i++) {
    const c = cands[(Math.random() * cands.length) | 0];
    setT(i, cx + c.u * W, cy + c.v * W, (c.b - .5) * .8 + (Math.random() - .5) * .15);
    setCol(i, mix(C_ACC, C_BONE, c.b), .2 + c.b * .4);
  }
  fillDust(count);
  return { name: 'portrait', count };
}

function buildGalaxy() {
  const { w, h } = view();
  const R = Math.min(w, h) * (mobile ? .62 : .55);
  const count = N;
  for (let i = 0; i < count; i++) {
    const r = .12 + Math.pow(Math.random(), .75) * R;
    const arm = i % 3;
    pr[i] = r;
    pa[i] = arm * 2.094 + (r / R) * 4.2 + (Math.random() - .5) * (.5 / (r / R + .3));
    pz[i] = (Math.random() - .5) * .35;
    pw[i] = .18 / (.35 + r / R);
    const t = r / R;
    setCol(i, t < .15 ? C_HOT : mix(C_ACC, C_CYAN, Math.min(1, t * 1.3)), (.38 - t * .25) * (.6 + Math.random() * .6));
  }
  return { name: 'galaxy', count, dyn: 'galaxy', cx: 0, cy: mobile ? -h * .05 : 0 };
}

function buildPlanet() {
  const { w, h } = view();
  const Rp = Math.min(w, h) * (mobile ? .17 : .13);
  const count = Math.floor(N * .9);
  for (let i = 0; i < count; i++) {
    if (i % 100 < 55) {
      pk[i] = 0; pr[i] = Rp; pa[i] = Math.random() * Math.PI * 2; pz[i] = Math.acos(Math.random() * 2 - 1); pw[i] = .3;
      const lit = .5 + .5 * Math.cos(pa[i] - 2.2) * Math.sin(pz[i]);
      setCol(i, mix([1, .24, .5], C_HOT, lit * .5), .12 + lit * .3);
    } else {
      pk[i] = 1; pr[i] = Rp * (1.5 + Math.random() * .9); pa[i] = Math.random() * Math.PI * 2; pz[i] = (Math.random() - .5) * .05; pw[i] = .4 / Math.sqrt(pr[i]);
      setCol(i, C_BONE, .14 + Math.random() * .18);
    }
  }
  fillDust(count);
  return { name: 'planet', count, dyn: 'planet', cx: 0, cy: mobile ? h * .3 : h * .22 };
}

function buildRain() {
  const { w, h } = view();
  const count = Math.floor(N * .9);
  const colsN = Math.round(w / (mobile ? .16 : .2));
  for (let i = 0; i < count; i++) {
    pa[i] = Math.random() * (h + 4);
    pw[i] = .6 + Math.random() * 1.8;
    pz[i] = -Math.random() * 8;
    pr[i] = ((i % colsN) / colsN - .5) * w * 1.3;
    setCol(i, Math.random() < .06 ? [.85, 1, .9] : C_GREEN, .12 + Math.random() * .22);
  }
  fillDust(count);
  return { name: 'rain', count, dyn: 'rain', span: h + 4, top: h / 2 + 2 };
}

function buildHole() {
  const { w, h } = view();
  const rin = Math.min(w, h) * (mobile ? .13 : .1), rout = Math.min(w, h) * (mobile ? .62 : .5);
  const count = N;
  for (let i = 0; i < count; i++) {
    if (i % 100 < 14) {
      pk[i] = 1; pr[i] = rin * (1.25 + Math.random() * .12); pa[i] = Math.random() * Math.PI * 2; pw[i] = .9;
      setCol(i, C_HOT, .25 + Math.random() * .25);
    } else {
      pk[i] = 0;
      const t = Math.pow(Math.random(), 1.7);
      pr[i] = rin * 1.4 + t * (rout - rin * 1.4);
      pa[i] = Math.random() * Math.PI * 2;
      pw[i] = .55 / Math.pow(pr[i] / rin, 1.4);
      pz[i] = (Math.random() - .5) * .12 * (1 + t * 3);
      setCol(i, t < .2 ? mix([1, .95, .85], C_HOT, t * 5) : mix(C_HOT, C_ACC, Math.min(1, (t - .2) * 1.6)), (.42 - t * .3) * (.7 + Math.random() * .5));
    }
  }
  return { name: 'hole', count, dyn: 'hole', rin };
}

function buildWave() {
  const { w, h } = view();
  const count = N;
  const cols = Math.round(Math.sqrt(count * 2.2)), rows = Math.ceil(count / cols);
  for (let i = 0; i < count; i++) {
    const c = i % cols, r = (i / cols) | 0;
    pr[i] = (c / cols - .5) * w * 2.2;          // x
    pa[i] = -2 - (r / rows) * 22;               // z (hacia el fondo)
    pz[i] = Math.random() * Math.PI * 2;
    setCol(i, mix(C_CYAN, C_ACC, r / rows), .1 + Math.random() * .2);
  }
  return { name: 'wave', count, dyn: 'wave', cy: -h * .32 };
}

const BUILD = {
  text: () => buildText('text', mobile ? CFG.hero : CFG.heroDesk),
  nora: () => buildText('nora', CFG.nora, .3),
  portrait: buildPortrait, galaxy: buildGalaxy, planet: buildPlanet, rain: buildRain, hole: buildHole, wave: buildWave,
};

function setShape(name, quiet) {
  if (shape.name === name && !quiet) return;
  shape = { cx: 0, cy: 0, ...BUILD[name]() };
  if (quiet) return;
  // ruido antes del orden: cada cambio sacude un poco todo
  for (let i = 0; i < N; i++) {
    vel[i * 3] += (Math.random() - .5) * .16;
    vel[i * 3 + 1] += (Math.random() - .5) * .16;
    vel[i * 3 + 2] += Math.random() * .25;
  }
}

// ============================================================
//  entrada: dedo / mouse
// ============================================================
const P = { x: 0, y: 0, sx: -999, sy: -999, vx: 0, vy: 0, active: false, well: 0, down: false, moved: false, t0: 0, ignore: false };
const waves = [];
const glow = $('#glow');
const _v = new Vector3();
function toWorld(sx, sy) {
  _v.set((sx / innerWidth) * 2 - 1, -(sy / innerHeight) * 2 + 1, .5).unproject(camera);
  _v.sub(camera.position).normalize();
  const d = -camera.position.z / _v.z;
  return [camera.position.x + _v.x * d, camera.position.y + _v.y * d];
}
function wave(sx, sy, s) { const [x, y] = toWorld(sx, sy); waves.push({ x, y, s, t: performance.now() }); }
function explode(s = .5) {
  for (let i = 0; i < N * 3; i++) vel[i] += (Math.random() - .5) * s;
  skills?.kick();
  haptic(40);
}

let holdTimer = 0;
function pDown(sx, sy, target) {
  P.down = true; P.moved = false; P.t0 = performance.now(); P.active = true;
  P.sx = sx; P.sy = sy;
  P.ignore = !!target.closest('#top, .phys, .cards, .sk-tabs, #gate');
  glow.classList.add('on');
  clearTimeout(holdTimer);
  if (!P.ignore) holdTimer = setTimeout(() => { if (P.down && !P.moved) { P.well = 1; glow.classList.add('well'); haptic(20); } }, 380);
}
function pMove(sx, sy) {
  if (P.down && Math.hypot(sx - P.sx, sy - P.sy) > 14 && !P.well) { P.moved = true; clearTimeout(holdTimer); }
  P.sx = sx; P.sy = sy; P.active = true;
}
function pUp() {
  clearTimeout(holdTimer);
  if (P.well) { wave(P.sx, P.sy, .55); haptic(30); }
  else if (!P.moved && !P.ignore && performance.now() - P.t0 < 260) wave(P.sx, P.sy, .2);
  P.down = false; P.well = 0;
  glow.classList.remove('well');
  if (mobile) { P.active = false; glow.classList.remove('on'); }
}
addEventListener('touchstart', (e) => { const t = e.touches[0]; pDown(t.clientX, t.clientY, e.target); }, { passive: true });
addEventListener('touchmove', (e) => { const t = e.touches[0]; pMove(t.clientX, t.clientY); }, { passive: true });
addEventListener('touchend', pUp);
addEventListener('touchcancel', pUp);
addEventListener('mousedown', (e) => { if (!mobile) pDown(e.clientX, e.clientY, e.target); });
addEventListener('mousemove', (e) => { if (!mobile) pMove(e.clientX, e.clientY); });
addEventListener('mouseup', () => { if (!mobile) pUp(); });
document.addEventListener('mouseleave', () => { P.active = false; glow.classList.remove('on'); });
addEventListener('dblclick', () => explode(.6));
addEventListener('contextmenu', (e) => e.preventDefault());

// inclinación: giroscopio en celular, mouse en compu
const tilt = { x: 0, y: 0 }, tiltT = { x: 0, y: 0 };
function onOri(e) {
  if (e.gamma == null) return;
  tiltT.x = clamp(e.gamma / 30, -1, 1);
  tiltT.y = clamp((e.beta - 45) / 30, -1, 1);
}
let lastAcc = null, lastShake = 0;
function onMotion(e) {
  const a = e.accelerationIncludingGravity;
  if (!a || a.x == null) return;
  if (lastAcc) {
    const d = Math.abs(a.x - lastAcc.x) + Math.abs(a.y - lastAcc.y) + Math.abs(a.z - lastAcc.z);
    const now = performance.now();
    if (d > 32 && now - lastShake > 900) { lastShake = now; explode(.9); }
  }
  lastAcc = { x: a.x, y: a.y, z: a.z };
}

// ============================================================
//  secciones, scroll, pistas
// ============================================================
const secs = $$('.sec');
let curSec = -1, entered = false;
const dots = $('#dots');
secs.forEach((s, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', s.dataset.name);
  b.addEventListener('click', () => s.scrollIntoView({ behavior: 'smooth' }));
  dots.append(b);
});
const toast = $('#toast');
let toastT = 0;
function hint(txt) {
  toast.textContent = txt;
  toast.classList.add('on');
  clearTimeout(toastT);
  toastT = setTimeout(() => toast.classList.remove('on'), 3800);
}
const seenHint = new Set();

// aparición del contenido
const REVEAL = '.kicker, .big, .lead, .faith, .edu, .stats, .hero-tag, .scroll-cue, .promise, .packs > li, .nora-more, .case, .ctas, .cards, .exp, .phys, .sk-tabs, .sk-panel, .rain, .steps, .hole-wrap, .links, .place, .firma';
if (!calm) secs.forEach((s) => gsap.set($$(REVEAL, s), { opacity: 0, y: 50 }));
const io = new IntersectionObserver((ens) => ens.forEach((en) => {
  if (!en.isIntersecting || en.target.dataset.shown || (!entered && en.target === secs[0])) return;
  en.target.dataset.shown = 1;
  gsap.to($$(REVEAL, en.target), { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: .09 });
  $$('.stats b[data-to]', en.target).forEach((b) => { const o = { v: 0 }; gsap.to(o, { v: +b.dataset.to, duration: 2, ease: 'expo.out', delay: .3, onUpdate: () => (b.textContent = Math.round(o.v)) }); });
}), { threshold: .08 });
secs.forEach((s) => io.observe(s));

function checkSection() {
  const mid = innerHeight * .5;
  for (let i = 0; i < secs.length; i++) {
    const r = secs[i].getBoundingClientRect();
    if (r.top <= mid && r.bottom > mid) {
      if (i !== curSec) {
        curSec = i;
        setShape(secs[i].dataset.shape);
        $$('button', dots).forEach((b, j) => b.classList.toggle('on', j === i));
        if (!seenHint.has(i)) { seenHint.add(i); hint(secs[i].dataset[mobile ? 'hintTouch' : 'hintDesk']); }
        haptic(8);
      }
      return;
    }
  }
}

// ============================================================
//  proyectos: tarjetas holográficas
// ============================================================
const cards = $$('.card-in');
if (!mobile) {
  cards.forEach((c) => {
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width, my = (e.clientY - r.top) / r.height;
      c.style.setProperty('--mx', mx.toFixed(3)); c.style.setProperty('--my', my.toFixed(3));
      c.style.setProperty('--rx', ((mx - .5) * 26).toFixed(1) + 'deg');
      c.style.setProperty('--ry', (-(my - .5) * 26).toFixed(1) + 'deg');
    });
    c.addEventListener('mouseleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });
  // arrastrar para desplazar
  let dg = null;
  $$('.cards').forEach((el) => el.addEventListener('mousedown', (e) => { if (e.target.closest('a')) return; dg = { el, x: e.clientX, s: el.scrollLeft }; el.style.scrollSnapType = 'none'; }));
  addEventListener('mousemove', (e) => { if (dg) dg.el.scrollLeft = dg.s - (e.clientX - dg.x) * 1.4; });
  addEventListener('mouseup', () => { if (dg) { dg.el.style.scrollSnapType = ''; dg = null; } });
}
function tickCards(sec) {
  const mid = innerWidth / 2;
  $$('.card-in', sec).forEach((c) => {
    const r = c.getBoundingClientRect();
    const off = clamp((r.left + r.width / 2 - mid) / innerWidth, -1, 1);
    c.style.setProperty('--rx', (tilt.x * 16 - off * 30).toFixed(1) + 'deg');
    c.style.setProperty('--ry', (-tilt.y * 12).toFixed(1) + 'deg');
    c.style.setProperty('--mx', (.5 + tilt.x * .6 - off * .5).toFixed(3));
    c.style.setProperty('--my', (.5 + tilt.y * .6).toFixed(3));
  });
}

// ============================================================
//  habilidades + proceso + contacto
// ============================================================
let skills = null, rain = null;
document.fonts.ready.then(() => {
  const groups = $$('.sk-group'), tabs = $$('.sk-tabs button');
  const pick = (i) => {
    groups.forEach((g, j) => g.classList.toggle('on', j === i));
    tabs.forEach((b, j) => b.setAttribute('aria-selected', j === i ? 'true' : 'false'));
    skills?.select(i);
  };
  skills = initSkills($('#phys'), { tilt, haptic, mobile, balls: groups.map((g) => ({ n: g.dataset.ball, c: +g.dataset.n })), onPick: pick });
  tabs.forEach((b, i) => b.addEventListener('click', () => { pick(i); skills.poke(i); }));
  rain = initMatrix($('#rain'), { lines: CFG.matrix, mobile });
});

const hold = $('#hold'), prog = $('.prog', hold), holdTxt = $('.hold-txt', hold);
const H = { on: false, p: 0, done: false, lastBuzz: 0 };
hold.addEventListener('pointerdown', (e) => { if (H.done) return; H.on = true; e.preventDefault(); });
addEventListener('pointerup', () => { H.on = false; });
addEventListener('pointercancel', () => { H.on = false; });
function tickHold(dt) {
  if (H.done) return;
  H.p = clamp(H.p + (H.on ? dt / 1.8 : -dt * 1.5), 0, 1);
  prog.style.strokeDashoffset = (295.3 * (1 - H.p)).toFixed(1);
  hold.style.transform = `scale(${1 + H.p * .12}) rotate(${(Math.random() - .5) * H.p * 6}deg)`;
  if (H.on) {
    const r = hold.getBoundingClientRect();
    P.sx = r.left + r.width / 2; P.sy = r.top + r.height / 2; P.active = true; P.well = 1 + H.p * 2.5;
    const now = performance.now();
    if (now - H.lastBuzz > 260 - H.p * 180) { H.lastBuzz = now; haptic(6 + H.p * 14); }
  }
  if (H.p >= 1) {
    H.done = true; H.on = false; P.well = 0;
    const r = hold.getBoundingClientRect();
    wave(r.left + r.width / 2, r.top + r.height / 2, 1.1);
    explode(.7);
    if (navigator.vibrate) navigator.vibrate([30, 40, 60]);
    holdTxt.textContent = CFG.holdDone;
    $('#links').classList.add('on');
    gsap.fromTo('#links .pill', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: .08, duration: 1, ease: 'expo.out' });
  }
}

// ============================================================
//  cada cuadro
// ============================================================
const musica = new Musica();
const cursor = $('#cursor'), cursorI = $('#cursor i');
const cur = { x: innerWidth / 2, y: innerHeight / 2 };
addEventListener('pointerover', (e) => cursor.classList.toggle('big', !!e.target.closest('[data-hover]')));

let lastScroll = 0, warp = 0, pulse = 0, last = performance.now();
const clock = new Clock();

function frame() {
  const now = performance.now();
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  const t = clock.getElapsedTime();

  // scroll → velocidad de salto
  const sy = scrollY, sv = sy - lastScroll; lastScroll = sy;
  warp += (Math.min(Math.abs(sv) / 38, 1.6) - warp) * .12;
  if (entered) checkSection();

  // cámara
  if (!mobile) { tiltT.x = (P.sx / innerWidth - .5) * 2 * (P.active ? 1 : 0); tiltT.y = (P.sy / innerHeight - .5) * 2 * (P.active ? 1 : 0); }
  tilt.x += (tiltT.x - tilt.x) * .06; tilt.y += (tiltT.y - tilt.y) * .06;
  camera.position.set(tilt.x * (mobile ? 1.6 : 1.1), -tilt.y * (mobile ? 1.1 : .7), CAM_Z - warp * 2.2);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();

  // puntero en el mundo
  let px = 0, py = 0;
  if (P.active) {
    [px, py] = toWorld(P.sx, P.sy);
    P.vx = px - P.x; P.vy = py - P.y;
    P.x = px; P.y = py;
    glow.style.transform = `translate(${P.sx}px, ${P.sy}px)`;
  }
  const R = mobile ? 1 : 1.25, R2 = R * R;
  const stir = clamp(Math.hypot(P.vx, P.vy) * 4, 0, 1.5);

  // ondas vivas
  for (let k = waves.length - 1; k >= 0; k--) { const w = waves[k]; w.r = (now - w.t) / 1000 * 7; if (w.r > 18) waves.splice(k, 1); }

  // centro del agujero = el botón de contacto
  let hcx = 0, hcy = 0;
  if (shape.dyn === 'hole' && entered) { const r = hold.getBoundingClientRect(); [hcx, hcy] = toWorld(r.left + r.width / 2, r.top + r.height / 2); }

  const S = shape, cnt = S.count || 0;
  for (let i = 0; i < N; i++) {
    const i3 = i * 3;

    // objetivos que se mueven solos
    if (S.dyn && i < cnt) {
      if (S.dyn === 'galaxy') {
        const a = pa[i] + t * pw[i], r = pr[i];
        setT(i, S.cx + Math.cos(a) * r, S.cy + Math.sin(a) * r * .42 + pz[i], Math.sin(a) * r * .55);
      } else if (S.dyn === 'planet') {
        const a = pa[i] + t * pw[i];
        if (pk[i] === 0) setT(i, S.cx + Math.sin(pz[i]) * Math.cos(a) * pr[i], S.cy + Math.cos(pz[i]) * pr[i], Math.sin(pz[i]) * Math.sin(a) * pr[i]);
        else { const x = Math.cos(a) * pr[i]; setT(i, S.cx + x, S.cy + Math.sin(a) * pr[i] * .2 - x * .2 + pz[i], Math.sin(a) * pr[i]); }
      } else if (S.dyn === 'rain') {
        const y = S.top - ((pa[i] + t * pw[i]) % S.span);
        if (y > tgt[i3 + 1] + 1) { pos[i3 + 1] = y; vel[i3 + 1] = 0; pos[i3] = pr[i]; }
        setT(i, pr[i], y, pz[i]);
      } else if (S.dyn === 'wave') {
        const x = pr[i], z = pa[i];
        setT(i, x, S.cy + Math.sin(x * .55 + t * 1.1 + pz[i] * .15) * .45 + Math.sin(z * .4 + t * .8) * .55, z);
      } else if (S.dyn === 'hole') {
        const a = pa[i] + t * pw[i], r = pr[i];
        if (pk[i] === 1) setT(i, hcx + Math.cos(a) * r, hcy + Math.sin(a) * r, -.2);
        else setT(i, hcx + Math.cos(a) * r, hcy + Math.sin(a) * r * .3 + pz[i], Math.sin(a) * r * .6);
      }
    }

    let x = pos[i3], y = pos[i3 + 1], z = pos[i3 + 2];
    const k = kSp[i];
    let ax = (tgt[i3] - x) * k, ay = (tgt[i3 + 1] - y) * k, az = (tgt[i3 + 2] - z) * k;

    if (P.active) {
      const dx = x - P.x, dy = y - P.y, d2 = dx * dx + dy * dy;
      if (P.well) {
        // gravedad: atrae y hace orbitar
        const f = Math.min(.035, .012 * P.well / (d2 + .35));
        ax += (-dx - dy * 1.15) * f; ay += (-dy + dx * 1.15) * f; az -= z * .02;
      } else if (d2 < R2) {
        const d = Math.sqrt(d2) + 1e-4, f = (1 - d / R);
        ax += dx / d * f * .07 + P.vx * f * .5 * stir;
        ay += dy / d * f * .07 + P.vy * f * .5 * stir;
        az += f * .05;
      }
    }
    for (let w = 0; w < waves.length; w++) {
      const W = waves[w], dx = x - W.x, dy = y - W.y, d = Math.sqrt(dx * dx + dy * dy) + 1e-4, df = Math.abs(d - W.r);
      if (df < .7) { const f = (1 - df / .7) * W.s * .25 / (1 + W.r * .25); ax += dx / d * f; ay += dy / d * f; az += f * .8; }
    }

    let vx = (vel[i3] + ax) * .9, vy = (vel[i3 + 1] + ay) * .9, vz = (vel[i3 + 2] + az) * .9;
    vel[i3] = vx; vel[i3 + 1] = vy; vel[i3 + 2] = vz;
    pos[i3] = x + vx; pos[i3 + 1] = y + vy; pos[i3 + 2] = z + vz;

    col[i3] += (tcol[i3] - col[i3]) * .05;
    col[i3 + 1] += (tcol[i3 + 1] - col[i3 + 1]) * .05;
    col[i3 + 2] += (tcol[i3 + 2] - col[i3 + 2]) * .05;
  }
  geo.attributes.position.needsUpdate = true;
  geo.attributes.aColor.needsUpdate = true;

  // estrellas
  const spd = .015 + warp * .6, len = .03 + warp * 3.2;
  for (let i = 0; i < NS; i++) {
    let z = starZ[i] + spd;
    if (z > CAM_Z) { z = -40; stars[i * 6] = stars[i * 6 + 3] = (Math.random() - .5) * 26; stars[i * 6 + 1] = stars[i * 6 + 4] = (Math.random() - .5) * 18; }
    starZ[i] = z;
    stars[i * 6 + 2] = z; stars[i * 6 + 5] = z - len;
  }
  sgeo.attributes.position.needsUpdate = true;
  smat.opacity = .25 + warp * .4;

  pulse += (musica.level() - pulse) * .2;
  mat.uniforms.uTime.value = t;
  mat.uniforms.uPulse.value = pulse * .6;
  renderer.render(scene, camera);

  if (entered) {
    skills?.tick();
    rain?.tick(t);
    const sec = secs[curSec];
    if (mobile && sec?.querySelector('.cards')) tickCards(sec);
    if (sec?.id === 'contact') tickHold(dt);
  }
  if (fine) {
    cur.x += (P.sx - cur.x) * .2; cur.y += (P.sy - cur.y) * .2;
    cursorI.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
  }
  requestAnimationFrame(frame);
}

// ============================================================
//  arranque
// ============================================================
let lastW = innerWidth, lastH = innerHeight;
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight, false);
  if (Math.abs(innerWidth - lastW) > 40 || Math.abs(innerHeight - lastH) > 160) {
    lastW = innerWidth; lastH = innerHeight;
    if (shape.name !== 'none') { const n = shape.name; shape.name = ''; setShape(n, true); }
  }
});

document.fonts.load('800 100px Syne').finally(() => {
  setShape('hole');           // la entrada: un vórtice detrás del botón
  requestAnimationFrame(frame);
});

$('#enter').classList.remove('loading');
$('#enter').removeAttribute('aria-busy');
$('#enter').addEventListener('click', () => {
  if (entered) return;
  haptic(20);
  musica.start();
  // permisos de movimiento (iPhone los pide; Android no)
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then((r) => { if (r === 'granted') addEventListener('deviceorientation', onOri); }).catch(() => {});
  } else addEventListener('deviceorientation', onOri);
  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then((r) => { if (r === 'granted') addEventListener('devicemotion', onMotion); }).catch(() => {});
  } else addEventListener('devicemotion', onMotion);

  const r = $('#enter').getBoundingClientRect();
  wave(r.left + r.width / 2, r.top + r.height / 2, 1.2);
  gsap.to('#gate', { opacity: 0, scale: 1.15, duration: .9, ease: 'expo.in', onComplete: () => $('#gate').remove() });
  setTimeout(() => {
    entered = true;
    document.body.classList.remove('locked');
    document.body.classList.add('in');
    gsap.to('#top', { opacity: 1, duration: 1 });
    checkSection();
    gsap.to($$(REVEAL, secs[0]), { opacity: 1, y: 0, duration: 1.4, ease: 'expo.out', stagger: .1, delay: .6 });
    secs[0].dataset.shown = 1;
  }, 650);
});

$('#snd').addEventListener('click', (e) => {
  const on = musica.toggle();
  e.currentTarget.classList.toggle('off', !on);
  e.currentTarget.setAttribute('aria-pressed', on ? 'true' : 'false');
  haptic();
});

// ============================================================
//  skills.js — categorías de habilidades como esferas con física.
//  Tocar una esfera (sin arrastrar) muestra su lista debajo.
//  Se agarran, se lanzan, chocan entre sí. En el celular la gravedad
//  sigue la inclinación del teléfono; en compu cae hacia abajo.
// ============================================================

const KINDS = ['solid', 'acc', 'ring', 'cyan', 'ring', 'solid', 'ring', 'acc'];

export function initSkills(canvas, { tilt, haptic, mobile, balls: SK, onPick }) {
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = 1, balls = [], visible = false, grab = null, lastBump = 0, sel = 0;

  function size() {
    dpr = Math.min(devicePixelRatio, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    const base = Math.min(W * (mobile ? .135 : .075), H * .2);
    if (!balls.length) {
      balls = SK.map((s, i) => ({
        ...s, i, k: KINDS[i % KINDS.length], r: base * (.75 + Math.min(s.c, 10) / 10 * .45),
        x: W * (.2 + .6 * Math.random()), y: -i * base * 1.2 - 40,
        vx: (Math.random() - .5) * 4, vy: 0, rot: 0,
      }));
    } else balls.forEach((b) => { b.r = base * (.75 + Math.min(b.c, 10) / 10 * .45); b.x = Math.min(b.x, W - b.r); });
  }

  function hit(x, y) {
    for (let i = balls.length - 1; i >= 0; i--) {
      const b = balls[i];
      if ((x - b.x) ** 2 + (y - b.y) ** 2 < b.r * b.r) return b;
    }
    return null;
  }
  const local = (cx, cy) => { const r = canvas.getBoundingClientRect(); return [cx - r.left, cy - r.top]; };

  function down(cx, cy) {
    const [x, y] = local(cx, cy);
    const b = hit(x, y);
    if (!b) return false;
    grab = { b, ox: x - b.x, oy: y - b.y, px: x, py: y, vx: 0, vy: 0, x0: x, y0: y, moved: false };
    balls.splice(balls.indexOf(b), 1); balls.push(b); // al frente
    haptic();
    return true;
  }
  function move(cx, cy) {
    if (!grab) return;
    const [x, y] = local(cx, cy);
    grab.vx = x - grab.px; grab.vy = y - grab.py;
    if (Math.hypot(x - grab.x0, y - grab.y0) > 8) grab.moved = true;
    grab.px = x; grab.py = y;
    grab.b.x = x - grab.ox; grab.b.y = y - grab.oy;
  }
  function up() {
    if (!grab) return;
    grab.b.vx = grab.vx * 1.1; grab.b.vy = grab.vy * 1.1;
    if (!grab.moved) { onPick?.(grab.b.i); grab.b.vy -= 9; }
    grab = null;
  }

  // táctil: solo se bloquea el scroll si el dedo agarró una esfera
  canvas.addEventListener('touchstart', (e) => { const t = e.touches[0]; if (down(t.clientX, t.clientY)) e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchmove', (e) => { if (grab) { e.preventDefault(); const t = e.touches[0]; move(t.clientX, t.clientY); } }, { passive: false });
  canvas.addEventListener('touchend', up);
  canvas.addEventListener('mousedown', (e) => down(e.clientX, e.clientY));
  addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  addEventListener('mouseup', up);
  canvas.addEventListener('mousemove', (e) => { const [x, y] = local(e.clientX, e.clientY); canvas.style.cursor = hit(x, y) ? 'grab' : ''; });

  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0 }).observe(canvas);
  addEventListener('resize', size);
  size();

  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const COL = { bone: css('--bone') || '#ece8df', ink: css('--ink') || '#07070b', acc: css('--acc') || '#8b6cff', cyan: css('--cyan') || '#4ff0ff' };

  function physics() {
    const gx = mobile ? tilt.x * .7 : 0;
    const gy = mobile ? .25 + tilt.y * .55 : .45;
    for (const b of balls) {
      if (grab && grab.b === b) { b.vx = grab.vx; b.vy = grab.vy; continue; }
      b.vx += gx; b.vy += gy;
      b.vx *= .995; b.vy *= .995;
      b.x += b.vx; b.y += b.vy;
      b.rot += b.vx / b.r;
      if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx) * .6; }
      if (b.x > W - b.r) { b.x = W - b.r; b.vx = -Math.abs(b.vx) * .6; }
      if (b.y > H - b.r) { if (b.vy > 6) bump(); b.y = H - b.r; b.vy = -Math.abs(b.vy) * .55; b.vx *= .97; }
      if (b.y < b.r && b.vy < 0 && b.y > -b.r * 2) { b.y = b.r; b.vy = Math.abs(b.vy) * .55; }
    }
    for (let i = 0; i < balls.length; i++) for (let j = i + 1; j < balls.length; j++) {
      const a = balls[i], b = balls[j];
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), m = a.r + b.r;
      if (d >= m || d === 0) continue;
      const nx = dx / d, ny = dy / d, o = (m - d) / 2;
      const ga = grab && grab.b === a, gb = grab && grab.b === b;
      if (!ga) { a.x -= nx * o * (gb ? 2 : 1); a.y -= ny * o * (gb ? 2 : 1); }
      if (!gb) { b.x += nx * o * (ga ? 2 : 1); b.y += ny * o * (ga ? 2 : 1); }
      const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
      if (rv < 0) {
        const imp = -rv * .8;
        if (!ga) { a.vx -= nx * imp; a.vy -= ny * imp; }
        if (!gb) { b.vx += nx * imp; b.vy += ny * imp; }
        if (imp > 7) bump();
      }
    }
  }
  function bump() { const n = performance.now(); if (n - lastBump > 120) { lastBump = n; haptic(); } }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (const b of balls) {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.beginPath(); ctx.arc(0, 0, b.r, 0, Math.PI * 2);
      let fg;
      const on = b.i === sel;
      if (on) { ctx.save(); ctx.shadowColor = COL.acc; ctx.shadowBlur = 30; ctx.lineWidth = 3; ctx.strokeStyle = COL.acc; ctx.beginPath(); ctx.arc(0, 0, b.r + 5, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); ctx.beginPath(); ctx.arc(0, 0, b.r, 0, Math.PI * 2); }
      if (b.k === 'ring') { ctx.lineWidth = 1.5; ctx.strokeStyle = COL.bone; ctx.fillStyle = 'rgba(7,7,11,.55)'; ctx.fill(); ctx.stroke(); fg = COL.bone; }
      else { ctx.fillStyle = b.k === 'acc' ? COL.acc : b.k === 'cyan' ? COL.cyan : COL.bone; ctx.fill(); fg = COL.ink; }
      // brillo esférico
      const g = ctx.createRadialGradient(-b.r * .35, -b.r * .4, 0, 0, 0, b.r);
      g.addColorStop(0, 'rgba(255,255,255,.28)'); g.addColorStop(.6, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(0,0,0,.25)');
      ctx.fillStyle = g; ctx.fill();
      ctx.rotate(b.rot * .15);
      ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      let fs = b.r * .34;
      ctx.font = `800 ${fs}px Syne, sans-serif`;
      const tw = ctx.measureText(b.n.toUpperCase()).width;
      if (tw > b.r * 1.5) { fs *= (b.r * 1.5) / tw; ctx.font = `800 ${fs}px Syne, sans-serif`; }
      ctx.fillText(b.n.toUpperCase(), 0, -b.r * .08);
      ctx.font = `500 ${Math.round(b.r * .2)}px "JetBrains Mono", monospace`;
      ctx.fillText(String(b.c).padStart(2, '0'), 0, b.r * .3);
      ctx.restore();
    }
  }

  return {
    tick() { if (!visible) return; physics(); draw(); },
    select(i) { sel = i; },
    poke(i) { const b = balls.find((x) => x.i === i); if (b) { b.vy -= 14; b.vx += (Math.random() - .5) * 8; } },
    kick() { balls.forEach((b) => { b.vx += (Math.random() - .5) * 30; b.vy -= 10 + Math.random() * 18; }); },
  };
}

// ============================================================
//  matrix.js — lluvia de caracteres con un mensaje escondido.
//  Donde pasa el dedo (o el mouse) los caracteres se encienden y el
//  mensaje queda revelado; si nadie toca, un "dedo fantasma" lo
//  descubre solo, para que se entienda el juego.
// ============================================================

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789ABCDEFXYZ<>+*=';
const rnd = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

export function initMatrix(canvas, { lines, mobile }) {
  const ctx = canvas.getContext('2d');
  let W, H, dpr, cell, cols, rows, drops, speed, mask, reveal, chars, visible = false;
  const P = { x: -999, y: -999, t: 0 };

  function size() {
    dpr = Math.min(devicePixelRatio, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    cell = mobile ? 13 : 16;
    cols = Math.ceil(W / cell); rows = Math.ceil(H / cell);
    drops = Array.from({ length: cols }, () => Math.random() * -rows);
    speed = Array.from({ length: cols }, () => .25 + Math.random() * .55);
    reveal = new Float32Array(cols * rows);
    chars = Array.from({ length: cols * rows }, rnd);

    // máscara del mensaje
    const m = document.createElement('canvas');
    m.width = cols; m.height = rows;
    const mc = m.getContext('2d');
    mc.fillStyle = '#fff'; mc.textAlign = 'center'; mc.textBaseline = 'middle';
    const lh = rows / (lines.length + .6);
    let fs = lh * .95;
    mc.font = `800 ${fs}px Syne, sans-serif`;
    const widest = Math.max(...lines.map((l) => mc.measureText(l).width));
    if (widest > cols * .92) fs *= (cols * .92) / widest;
    mc.font = `800 ${fs}px Syne, sans-serif`;
    lines.forEach((l, i) => mc.fillText(l, cols / 2, rows / 2 + (i - (lines.length - 1) / 2) * fs * 1.02));
    const d = mc.getImageData(0, 0, cols, rows).data;
    mask = new Uint8Array(cols * rows);
    for (let i = 0; i < cols * rows; i++) mask[i] = d[i * 4 + 3] > 110 ? 1 : 0;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#050806'; ctx.fillRect(0, 0, W, H);
  }

  const setP = (cx, cy) => { const r = canvas.getBoundingClientRect(); P.x = cx - r.left; P.y = cy - r.top; P.t = performance.now(); };
  canvas.addEventListener('touchstart', (e) => setP(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  canvas.addEventListener('touchmove', (e) => setP(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  canvas.addEventListener('mousemove', (e) => setP(e.clientX, e.clientY));
  canvas.addEventListener('mouseleave', () => { P.x = -999; });
  canvas.addEventListener('touchend', () => { P.x = -999; });

  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0 }).observe(canvas);
  addEventListener('resize', size);
  size();

  function tick(t) {
    if (!visible) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = 'rgba(5,8,6,.14)';
    ctx.fillRect(0, 0, W, H);
    ctx.font = `${cell - 1}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

    // dedo fantasma cuando nadie toca
    let px = P.x, py = P.y;
    if (performance.now() - P.t > 2600) {
      px = W / 2 + Math.sin(t * .9) * W * .42;
      py = H / 2 + Math.sin(t * 1.7) * H * .3;
    }
    const R = (mobile ? 46 : 70) / cell;
    const pc = px / cell, pr = py / cell;

    // la lluvia
    for (let c = 0; c < cols; c++) {
      const y = Math.floor(drops[c]);
      if (y >= 0 && y < rows) {
        ctx.fillStyle = '#d6ffe2';
        ctx.fillText(rnd(), c * cell + cell / 2, y * cell + cell / 2);
        if (y > 0) { ctx.fillStyle = '#25d968'; ctx.fillText(rnd(), c * cell + cell / 2, (y - 1) * cell + cell / 2); }
      }
      drops[c] += speed[c];
      if (drops[c] > rows && Math.random() > .97) drops[c] = Math.random() * -20;
    }

    // la zona del dedo enciende y revela
    const c0 = Math.max(0, Math.floor(pc - R)), c1 = Math.min(cols - 1, Math.ceil(pc + R));
    const r0 = Math.max(0, Math.floor(pr - R)), r1 = Math.min(rows - 1, Math.ceil(pr + R));
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
      const d = Math.hypot(c - pc, r - pr);
      if (d > R) continue;
      const k = r * cols + c, f = 1 - d / R;
      reveal[k] = Math.min(1, reveal[k] + f * .35);
      if (!mask[k] && Math.random() < f * .5) {
        ctx.fillStyle = `rgba(160,255,200,${f * .9})`;
        ctx.fillText(rnd(), c * cell + cell / 2, r * cell + cell / 2);
      }
    }

    // el mensaje
    for (let k = 0; k < mask.length; k++) {
      if (!mask[k]) continue;
      const v = reveal[k];
      if (v < .02) continue;
      reveal[k] = v * .9975;
      if (Math.random() < .015) chars[k] = rnd();
      const c = k % cols, r = (k / cols) | 0;
      ctx.fillStyle = v > .6 ? `rgba(236,255,242,${v})` : `rgba(67,255,138,${v})`;
      ctx.fillText(chars[k], c * cell + cell / 2, r * cell + cell / 2);
    }
  }

  return { tick };
}

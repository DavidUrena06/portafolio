// ============================================================
//  musica.js — la canción de fondo.
//  Si existe assets/cancion.mp3 suena esa (en loop). Si no, toca un
//  ambiente suave generado en vivo, solo para la maqueta.
//  level() da la energía del sonido para que las partículas respiren.
// ============================================================

const SRC = '/assets/cancion.mp3?v=1';
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const CHORDS = [[57, 60, 64, 71], [53, 57, 60, 67], [48, 55, 64, 67], [55, 59, 62, 69]];

export class Musica {
  constructor() {
    this.on = false;
    this.data = null;
  }

  start() {
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
    const C = (this.ctx = new (window.AudioContext || window.webkitAudioContext)());
    this.out = C.createGain();
    this.out.gain.value = 0;
    this.an = C.createAnalyser();
    this.an.fftSize = 256;
    this.an.smoothingTimeConstant = .85;
    this.data = new Uint8Array(this.an.frequencyBinCount);
    this.out.connect(this.an).connect(C.destination);
    C.resume();

    // la canción tiene que arrancar dentro del mismo toque (si no, iPhone la bloquea)
    {
      this.el = new Audio(SRC);
      this.el.loop = true;
      this.el.preload = 'auto';
      C.createMediaElementSource(this.el).connect(this.out);
      this.el.play().catch(() => {});
      this.el.addEventListener('error', () => this.ambiente(), { once: true });
    }
    this.on = true;
    this.out.gain.setTargetAtTime(.8, C.currentTime, 1.2);
  }

  toggle() {
    if (!this.ctx) return false;
    this.on = !this.on;
    this.out.gain.setTargetAtTime(this.on ? .8 : 0, this.ctx.currentTime, .25);
    return this.on;
  }

  level() {
    if (!this.data || !this.on) return 0;
    this.an.getByteFrequencyData(this.data);
    let s = 0; for (let i = 1; i < 12; i++) s += this.data[i];
    return s / 11 / 255;
  }

  // ---------- ambiente provisional (sin batería, sin protagonismo) ----------
  ambiente() {
    const C = this.ctx;
    const rev = C.createConvolver();
    const n = C.sampleRate * 4, b = C.createBuffer(2, n, C.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2.4); }
    rev.buffer = b;
    const wet = C.createGain(); wet.gain.value = .7;
    rev.connect(wet).connect(this.out);
    this.bus = C.createGain(); this.bus.gain.value = .9;
    this.bus.connect(this.out); this.bus.connect(rev);

    const bar = 4.2;
    let t0 = C.currentTime + .1, k = 0;
    const tick = () => {
      while (t0 < C.currentTime + 1) {
        const ch = CHORDS[k % 4];
        this.pad(t0, ch, bar);
        this.pad(t0, [ch[0] - 24], bar, .09);
        for (let j = 0; j < 6; j++) if (Math.random() < .55) this.bell(t0 + j * (bar / 6) + Math.random() * .05, ch[(j + k) % 4] + 12 + (j % 3 === 2 ? 12 : 0));
        t0 += bar; k++;
      }
    };
    tick();
    this.timer = setInterval(tick, 400);
  }

  pad(t, notes, dur, vol = .045) {
    const C = this.ctx;
    const f = C.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
    const g = C.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 1.6);
    g.gain.linearRampToValueAtTime(0, t + dur + 1.4);
    f.connect(g).connect(this.bus);
    for (const m of notes) for (const det of [-6, 6]) {
      const o = C.createOscillator();
      o.type = 'sawtooth'; o.frequency.value = mtof(m); o.detune.value = det;
      o.connect(f); o.start(t); o.stop(t + dur + 1.5);
    }
  }

  bell(t, m) {
    const C = this.ctx;
    const o = C.createOscillator(), g = C.createGain();
    o.type = 'sine'; o.frequency.value = mtof(m);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(.05, t + .01);
    g.gain.exponentialRampToValueAtTime(.0005, t + 2.2);
    o.connect(g).connect(this.bus);
    o.start(t); o.stop(t + 2.3);
  }
}

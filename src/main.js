// ============================================================
//  main.js — arranque liviano. Deja que la portada se pinte primero
//  y después carga el universo (three.js + física), que es lo pesado.
// ============================================================
const cargar = () => requestAnimationFrame(() => setTimeout(() => import('./app.js'), 0));
if (document.readyState === 'complete') cargar();
else addEventListener('load', cargar, { once: true });

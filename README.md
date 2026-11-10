# Portafolio · David Ureña

Sitio personal de **David Ureña**, desarrollador full-stack en Costa Rica:
**[david.norastudio.digital](https://david.norastudio.digital)** (español) · **[/en/](https://david.norastudio.digital/en/)** (English).

Incluye proyectos con su página de detalle, experiencia, servicios de NoraStudio, habilidades, CV descargable y contacto.

## Cómo está hecho

| Pieza | Detalle |
|---|---|
| Generador | Python (`tools/build.py`): toma el texto de `tools/contenido.py` (ES y EN) y genera todas las páginas estáticas. |
| Interfaz | HTML y CSS a mano, sin framework. Campo de partículas con three.js y GSAP (`src/`), cargado después del primer pintado. |
| Empaquetado | esbuild (`npm run build`). |
| Publicación | Cloudflare Workers con dominio propio (`tools/publicar.sh`). |
| Accesibilidad | Navegación con teclado, foco visible, `prefers-reduced-motion`, la música nunca suena sin que la persona la active. |
| Rendimiento | Lighthouse: accesibilidad, mejores prácticas y SEO en 100; rendimiento 100 en escritorio. |

## Correrlo

```bash
npm install
npm run build        # genera public/ (ES, EN y páginas de proyecto)
python3 -m http.server -d public 8000
```

La canción de fondo (`public/assets/cancion.mp3`) no está en el repositorio por derechos de autor; sin ella el sitio funciona igual.

---

Diseñado y desarrollado por [NoraStudio](https://norastudio.digital).

#!/usr/bin/env bash
# ============================================================
#  publicar.sh — publica el portafolio en Cloudflare
#  (https://david.norastudio.digital).
#    ./tools/publicar.sh
#  Genera ES/EN, empaqueta JS y CSS, arma _sitio/ y lo sube.
# ============================================================
set -euo pipefail
RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$RAIZ"

npm run build --silent

rm -rf _sitio && mkdir -p _sitio
cp -R public/. _sitio/
find _sitio -name '.DS_Store' -delete

# CSS: fuentes + estilos en un solo archivo comprimido, y dentro de cada página
npx esbuild public/css/styles.css --bundle --minify --external:/assets/* --outfile=_sitio/css/styles.css --log-level=warning
python3 - <<'PY'
import glob, re
css = open("_sitio/css/styles.css", encoding="utf-8").read()
for f in glob.glob("_sitio/**/*.html", recursive=True):
    h = open(f, encoding="utf-8").read()
    h = re.sub(r'<link rel="stylesheet" href="/css/styles\.css\?v=\w+">', lambda m: "<style>" + css + "</style>", h)
    open(f, "w", encoding="utf-8").write(h)
PY
rm -f _sitio/css/fonts.css

cat > _sitio/_headers <<'H'
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  X-Frame-Options: SAMEORIGIN
  Strict-Transport-Security: max-age=31536000
/assets/*
  Cache-Control: public, max-age=31536000, immutable
/js/*
  Cache-Control: public, max-age=31536000, immutable
/css/*
  Cache-Control: public, max-age=31536000, immutable
H

npx -y wrangler@latest deploy

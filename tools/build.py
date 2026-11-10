#!/usr/bin/env python3
# ============================================================
#  build.py — genera el portafolio en español (/) e inglés (/en/),
#  más una página de detalle por proyecto en cada idioma.
#
#  El texto vive en tools/contenido.py. Las páginas de public/ se
#  generan con este script: no editarlas a mano.
#     python3 tools/build.py
# ============================================================
import json, os, html, sys
from urllib.parse import quote

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from contenido import ES, EN, PROJ_META, SLUGS

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(RAIZ, "public")

SITE = "https://david.norastudio.digital"   # dirección final del portafolio
WA_NUM = "50687578890"                         # WhatsApp de NoraStudio
EMAIL = "josue.calderon.urena@gmail.com"
LINKEDIN = "https://www.linkedin.com/in/davure"
GITHUB = "https://github.com/DavidUrena06"
INSTAGRAM = "https://www.instagram.com/urenas.js"
NORA = "https://norastudio.digital"
CV_ES = None                                   # "/David_Urena_CV_ES.pdf" cuando exista
VERSION = "7"                                  # súbelo para romper caché de css/js

def wa(msg):
    return f"https://wa.me/{WA_NUM}?text={quote(msg)}"

e = html.escape

def todo(txt):
    return f'<span class="todo">TODO: {e(txt)}</span>'

def proj_url(L, slug):
    return f'{L["proj_base"]}{slug}/'

# ------------------------------------------------------------
#  piezas
# ------------------------------------------------------------
def sec_attrs(L, key, shape):
    t, d = L["hints"][key]
    return f'id="{key}" class="sec s-{key}" data-shape="{shape}" data-name="{e(L["names"][key])}" data-hint-touch="{e(t)}" data-hint-desk="{e(d)}"'

def ext(L, href, label, cls="pill"):
    return f'<a href="{href}" class="{cls}" target="_blank" rel="noopener" data-hover>{label} <span aria-hidden="true">↗</span><span class="sr"> {L["new_tab"]}</span></a>'

def cv_href(L):
    if L["lang"] == "es" and CV_ES:
        return CV_ES
    return L["cv_file"]

def card(L, slug, i):
    p, m = L["proj"][slug], PROJ_META[slug]
    if m["img"]:
        img = m["img"]
        art = (f'<img class="art" src="/assets/img/{img}-720.webp" srcset="/assets/img/{img}-480.webp 480w, /assets/img/{img}-720.webp 720w, /assets/img/{img}-1080.webp 1080w" '
               f'sizes="(min-width: 900px) 340px, 78vw" width="1080" height="810" loading="lazy" decoding="async" alt="{e(p["alt"])}">')
    else:
        art = f'<div class="art a{i % 5 + 1}" aria-hidden="true"></div>'
    demo = ext(L, m["demo"], e(L["lbl"]["demo"]), "card-link") if m["demo"] else ""
    return (f'<article class="card" data-hover><div class="card-in">{art}<div class="holo" aria-hidden="true"></div><div class="glare" aria-hidden="true"></div>'
            f'<div class="card-txt"><span class="mono">{i + 1:02d} · {e(p["kick"])}</span><h3>{e(p["title"])}</h3><p>{p["card"]}</p>'
            f'<p class="tags mono">{e(" · ".join(m["stack"][:4]))}</p>'
            f'<div class="card-links"><a href="{proj_url(L, slug)}" class="card-link main">{e(L["more"])} <span aria-hidden="true">→</span></a>{demo}</div></div></div></article>')

def head(L, title, desc, url, url_es, url_en, og="profile", ld=""):
    other = EN if L is ES else ES
    return f"""<!doctype html>
<html lang="{L["lang"]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="es" href="{url_es}">
<link rel="alternate" hreflang="en" href="{url_en}">
<link rel="alternate" hreflang="x-default" href="{url_es}">
<meta name="theme-color" content="#07070b">
<meta name="author" content="David Ureña">
<meta property="og:type" content="{og}">
<meta property="og:site_name" content="David Ureña">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:locale" content="{L["locale"]}">
<meta property="og:locale:alternate" content="{other["locale"]}">
<meta property="og:image" content="{SITE}/assets/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{e(L["og_alt"])}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(desc)}">
<meta name="twitter:image" content="{SITE}/assets/og.jpg">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="stylesheet" href="/css/styles.css?v={VERSION}">
{ld}"""

# ------------------------------------------------------------
#  página principal
# ------------------------------------------------------------
def page(L):
    other = EN if L is ES else ES
    lang = L["lang"]
    url = SITE + L["path"]

    edu = "".join(f'<li><span class="mono">{e(y)}</span><b>{e(t)}</b>{f"<small>{e(s)}</small>" if s else ""}</li>' for y, t, s in L["edu"])
    stats = "".join(
        (f'<div><b class="txt">{e(n)}</b>' if kind == "text" else f'<div><b data-to="{n}">{n}</b>') + f'<span class="mono">{e(lbl)}</span></div>'
        for n, kind, lbl in L["stats"])
    work_cards = "".join(card(L, s, i) for i, s in enumerate(SLUGS))

    def exp_item(x):
        note = f'<p class="tl-note">{e(x["note"])}</p>' if x["note"] else ""
        td = f' {todo(x["todo"])}' if x["todo"] else ""
        lis = "".join(f"<li>{e(t)}</li>" for t in x["items"])
        return (f'<li class="tl-i"><span class="mono tl-d">{e(x["dates"])}</span><div class="tl-b"><h3>{e(x["role"])}</h3>'
                f'<p class="tl-org">{e(x["org"])}{td}</p>{note}<ul>{lis}</ul></div></li>')
    exp = "".join(exp_item(x) for x in L["exp"])

    what = "".join(f'<li><b>{e(t)}</b><span>{e(d)}</span></li>' for t, d in L["what"])
    steps = "".join(f'<li><span class="mono">0{i+1}</span><b>{e(t)}</b><small>{e(d)}</small></li>' for i, (t, d) in enumerate(L["steps"]))

    def sk_items(items):
        if items and isinstance(items[0], tuple):
            return "".join(f'<li class="ex"><b>{e(n)}</b><span>{e(x)}</span></li>' for n, x in items)
        return "".join(f"<li>{e(it)}</li>" for it in items)
    sk_groups = "".join(
        f'<div class="sk-group{" on" if i == 0 else ""}{" soft" if isinstance(items[0], tuple) else ""}" data-ball="{e(b)}" data-n="{len(items)}" id="sk-{i}" role="tabpanel"><h3>{e(title)}</h3><ul>'
        + sk_items(items) + "</ul></div>"
        for i, (b, title, items) in enumerate(L["skills"]))
    sk_tabs = "".join(f'<button role="tab" aria-selected="{"true" if i == 0 else "false"}" aria-controls="sk-{i}" data-i="{i}">{e(b)}</button>' for i, (b, _, _) in enumerate(L["skills"]))

    cfg = {"lang": lang, "hero": ["DAVID", "UREÑA"], "heroDesk": ["DAVID UREÑA"], "nora": ["NORA"], "matrix": L["matrix"], "holdDone": L["hold_done"]}

    person = {
        "@type": "Person", "@id": SITE + "/#david",
        "name": "David Ureña", "alternateName": "Josué David Calderón Ureña",
        "jobTitle": "Desarrollador full-stack" if lang == "es" else "Full-stack developer",
        "url": SITE + "/", "image": SITE + "/david.jpg", "email": "mailto:" + EMAIL,
        "address": {"@type": "PostalAddress", "addressLocality": "San José", "addressCountry": "CR"},
        "sameAs": [LINKEDIN, GITHUB, INSTAGRAM],
        "knowsLanguage": ["es", "en"],
        "knowsAbout": ["JavaScript", "React", "Node.js", "Express", "Astro", "PostgreSQL", "Prisma", "SEO", "Google Ads", "GA4", "Desarrollo web" if lang == "es" else "Web development"],
        "alumniOf": {"@type": "EducationalOrganization", "name": "Colegio Técnico Profesional de Educación Comercial y Servicios"},
        "affiliation": {"@type": "CollegeOrUniversity", "name": "Universidad Fidélitas"},
    }
    nora = {
        "@type": "ProfessionalService", "@id": NORA + "/#org", "name": "NoraStudio", "url": NORA,
        "telephone": "+" + WA_NUM, "founder": {"@id": SITE + "/#david"},
        "areaServed": {"@type": "Country", "name": "Costa Rica"},
        "address": {"@type": "PostalAddress", "addressLocality": "San José", "addressCountry": "CR"},
        "description": L["nora_lead"].replace("<b>", "").replace("</b>", "")
    }
    site = {"@type": "WebSite", "@id": SITE + "/#web", "url": SITE + "/", "name": "David Ureña", "inLanguage": ["es", "en"], "author": {"@id": SITE + "/#david"}}
    pageld = {"@type": "ProfilePage", "@id": url + "#page", "url": url, "name": L["title"], "inLanguage": lang, "isPartOf": {"@id": SITE + "/#web"}, "mainEntity": {"@id": SITE + "/#david"}}
    ld = json.dumps({"@context": "https://schema.org", "@graph": [person, nora, site, pageld]}, ensure_ascii=False)

    ol, ohref, oname = L["other_lang"]
    order = ["work", "exp", "nora", "about", "skills", "contact"]
    nav = "".join(f'<a href="#{k}" data-hover>{e(L["names"][k])}</a>' for k in order)
    cv_note = ""
    if lang == "es" and not CV_ES:
        cv_note = f'<p class="hero-todo">{todo(L["cv_todo"])}</p>'
    cv_label = e(L["btn_cv"]) + (f' <small>{e(L["cv_lang_note"])}</small>' if (L["cv_lang_note"] and not (lang == "es" and CV_ES)) else "")

    head_html = head(L, L["title"], L["desc"], url, SITE + "/", SITE + "/en/",
                     ld=f'<script type="application/ld+json">{ld}</script>\n<noscript><style>#gate{{display:none}}body:not(.in) #main,#top{{opacity:1!important}}</style></noscript>\n</head>')
    return head_html + f'''
<body>
<a class="skip" href="#main">{e(L["skip"])}</a>
<canvas id="gl" aria-hidden="true"></canvas>
<div id="glow" aria-hidden="true"></div>
<div id="cursor" aria-hidden="true"><i></i></div>
<label id="haptic" aria-hidden="true"><input type="checkbox" switch tabindex="-1"></label>
<script id="cfg" type="application/json">{json.dumps(cfg, ensure_ascii=False)}</script>

<div id="gate" role="dialog" aria-modal="true" aria-label="{e(L["gate_title"])}">
  <p class="mono gate-k">{e(L["gate_k"])}</p>
  <button id="skip-intro" class="gate-skip mono loading" data-hover>{e(L["gate_skip"])} <span aria-hidden="true">→</span></button>
  <div class="gate-mid">
    <h2 class="gate-title">{e(L["gate_title"])}</h2>
    <button id="enter" class="enter loading" aria-busy="true" data-hover>
      <span class="enter-ring" aria-hidden="true"></span><span class="enter-ring r2" aria-hidden="true"></span>
      <span class="enter-txt">{e(L["enter_snd"])}</span>
    </button>
    <button id="enter-mute" class="pill gate-mute loading" data-hover>{e(L["enter_mute"])}</button>
  </div>
  <p class="gate-h">{L["gate_h"]}</p>
</div>

<header id="top">
  <a class="brand" href="#hero" aria-label="David Ureña">D<em>u</em></a>
  <nav class="dots" id="dots" aria-label="{e(L["nav"])}">{nav}</nav>
  <div class="top-r">
    <a class="pill-s cv-link" href="{cv_href(L)}" download data-hover>{e(L["cv_nav"])} <span aria-hidden="true">↓</span><span class="sr"> {e(L["btn_cv"])}</span></a>
    <a class="lang mono" href="{ohref}" hreflang="{other["lang"]}" lang="{other["lang"]}" aria-label="{e(oname)}" data-hover>{ol}</a>
    <button id="snd" class="snd off" aria-label="{e(L["sound"])}" aria-pressed="false" data-hover><i></i><i></i><i></i><i></i></button>
  </div>
</header>

<div id="toast" class="mono" aria-live="polite"></div>

<main id="main">

  <section {sec_attrs(L, "hero", "text")}>
    <p class="mono kicker">{e(L["hero_k"])}</p>
    <h1 class="sr">{e(L["h1"])}</h1>
    <div class="hero-foot">
      <p class="hero-sub">{e(L["hero_sub"])}</p>
      <p class="hero-tag">{L["hero_tag"]}</p>
      <div class="hero-btns">
        <a href="#work" class="pill solid" data-hover>{e(L["btn_projects"])} <span aria-hidden="true">↓</span></a>
        <a href="{cv_href(L)}" class="pill" download data-hover>{cv_label} <span aria-hidden="true">↓</span></a>
        {ext(L, e(wa(L["quote_msg"])), e(L["btn_quote"]))}
      </div>
      {cv_note}
      <div class="stats">{stats}</div>
    </div>
  </section>

  <section {sec_attrs(L, "work", "galaxy")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["work_k"])}</p>
      <h2 class="big">{L["work_h"]}</h2>
      <p class="lead">{e(L["work_lead"])}</p>
    </div>
    <div class="cards" tabindex="0" role="region" aria-label="{e(L["names"]["work"])}">{work_cards}</div>
    <div class="ctas">{ext(L, GITHUB, e(L["gh_all"]))}</div>
  </section>

  <section {sec_attrs(L, "exp", "wave")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["exp_k"])}</p>
      <h2 class="big">{L["exp_h"]}</h2>
    </div>
    <ol class="tl">{exp}</ol>
  </section>

  <section {sec_attrs(L, "nora", "nora")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["nora_k"])}</p>
      <h2 class="big">{L["nora_h"]}</h2>
      <p class="lead">{L["nora_lead"]}</p>
    </div>
    <p class="mini-k mono">{e(L["what_k"])}</p>
    <ul class="what">{what}</ul>
    <p class="mini-k mono">{e(L["proc_k"])}</p>
    <canvas class="rain" id="rain" aria-label="{e(" · ".join(L["matrix"]))}" role="img"></canvas>
    <ol class="steps">{steps}</ol>
    <p class="promise"><span class="mono">{e(L["promise_k"])}</span>{L["promise"]}</p>
    <div class="ctas">
      {ext(L, e(wa(L["nora_msg"])), e(L["nora_cta"]), "pill solid")}
      {ext(L, NORA, e(L["nora_site"]))}
    </div>
  </section>

  <section {sec_attrs(L, "about", "galaxy")}>
    <div class="about-txt">
      <p class="mono kicker">{e(L["about_k"])}</p>
      <div class="about-top">
        <img class="about-photo" src="/david.jpg" width="576" height="576" alt="{e(L["photo_alt"])}" decoding="async">
        <h2 class="big">{L["about_h"]}</h2>
      </div>
      <p class="lead">{L["about_lead"]}</p>
      <p class="faith">{L["faith"]}</p>
      <ul class="edu">{edu}</ul>
    </div>
  </section>

  <section {sec_attrs(L, "skills", "planet")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["skills_k"])}</p>
      <h2 class="big">{L["skills_h"]}</h2>
      <p class="lead">{e(L["skills_lead"])}</p>
    </div>
    <canvas class="phys" id="phys" aria-hidden="true"></canvas>
    <div class="sk-tabs" role="tablist">{sk_tabs}</div>
    <div class="sk-panel">{sk_groups}</div>
  </section>

  <section {sec_attrs(L, "contact", "hole")}>
    <div class="sec-head center">
      <p class="mono kicker">{e(L["contact_k"])}</p>
      <h2 class="big">{L["contact_h"]}</h2>
      <p class="lead">{e(L["contact_lead"])}</p>
    </div>
    <div class="links" id="links">
      {ext(L, e(wa(L["wa_msg"])), e(L["wa_label"]), "pill solid")}
      <a href="mailto:{EMAIL}" class="pill" data-hover>{e(L["mail_label"])} <span aria-hidden="true">↗</span></a>
      {ext(L, LINKEDIN, "LinkedIn")}
      {ext(L, GITHUB, "GitHub")}
      {ext(L, INSTAGRAM, "Instagram")}
    </div>
    <div class="hole-wrap">
      <button class="hold" id="hold" aria-label="{e(L["hold_label"])}" data-hover>
        <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47"/><circle class="prog" cx="50" cy="50" r="47"/></svg>
        <span class="hold-txt mono">{L["hold"]}</span>
      </button>
    </div>
    <p class="place mono">{e(L["place"])} · <a href="mailto:{EMAIL}">{EMAIL}</a></p>
    <footer class="firma">
      <a href="{NORA}" target="_blank" rel="noopener" class="firma-a">
        <img src="/assets/norastudio-bone.webp" alt="NORASTUDIO" width="80" height="16" loading="lazy">
        <span>{e(L["firma"])} <b>NORASTUDIO</b></span>
      </a>
      <a href="tel:+{WA_NUM}" class="firma-a">{e(L["firma_tel"])} <b>8757 8890</b></a>
    </footer>
  </section>

</main>

<script type="module" src="/js/main.js?v={VERSION}"></script>
</body>
</html>
'''

# ------------------------------------------------------------
#  página de detalle de un proyecto (misma plantilla para todos)
# ------------------------------------------------------------
def project_page(L, slug, idx):
    other = EN if L is ES else ES
    p, m, lb = L["proj"][slug], PROJ_META[slug], L["lbl"]
    url = SITE + proj_url(L, slug)
    url_es, url_en = SITE + proj_url(ES, slug), SITE + proj_url(EN, slug)
    title = f'{p["title"]} · David Ureña'
    desc = html.unescape(p["short"].replace("<b>", "").replace("</b>", ""))
    ohref = proj_url(other, slug)

    def paras(xs): return "".join(f"<p>{e(x)}</p>" for x in xs)
    problem = paras(p["problem"]) + (f'<p>{todo(p["problem_todo"])}</p>' if p["problem_todo"] else "")
    role = paras(p["role"])
    stack = "".join(f"<li>{e(s)}</li>" for s in m["stack"])
    result = "<ul>" + "".join(f"<li>{e(x)}</li>" for x in p["result"]) + "</ul>"

    if m["img"]:
        img = m["img"]
        shots = (f'<figure class="shot"><img src="/assets/img/{img}-1080.webp" srcset="/assets/img/{img}-720.webp 720w, /assets/img/{img}-1080.webp 1080w" '
                 f'sizes="(min-width: 900px) 760px, 92vw" width="1080" height="810" loading="lazy" decoding="async" alt="{e(p["alt"])}"></figure>')
    else:
        shots = f'<p>{todo(L["todo_shot"])}</p>'

    links = []
    if m["demo"]: links.append(ext(L, m["demo"], e(lb["demo"]), "pill solid"))
    else: links.append(f'<p>{todo(L["todo_demo"])}</p>')
    if m["repo"]: links.append(ext(L, m["repo"], e(lb["repo"])))
    elif m.get("repo_private"): links.append(f'<p class="note">{e(lb["private"])}</p>')
    else: links.append(f'<p>{todo(L["todo_repo"])}</p>')

    nxt = SLUGS[(idx + 1) % len(SLUGS)]
    ol, _, oname = L["other_lang"]
    bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "David Ureña", "item": SITE + L["path"]},
        {"@type": "ListItem", "position": 2, "name": lb["back"], "item": SITE + L["path"] + "#work"},
        {"@type": "ListItem", "position": 3, "name": p["title"], "item": url}]}
    h = head(L, title, desc, url, url_es, url_en, og="article",
             ld=f'<script type="application/ld+json">{json.dumps(bc, ensure_ascii=False)}</script>\n</head>')
    return h + f'''
<body class="in sub">
<a class="skip" href="#main">{e(L["skip"])}</a>
<header id="top" class="sub-top">
  <a class="brand" href="{L["path"]}" aria-label="David Ureña">D<em>u</em></a>
  <a class="back" href="{L["path"]}#work" data-hover><span aria-hidden="true">←</span> {e(lb["back"])}</a>
  <div class="top-r">
    <a class="lang mono" href="{ohref}" hreflang="{other["lang"]}" lang="{other["lang"]}" aria-label="{e(oname)}">{ol}</a>
  </div>
</header>
<main id="main" class="doc">
  <p class="mono kicker">{idx + 1:02d} · {e(p["kick"])}</p>
  <h1 class="doc-h">{e(p["title"])}</h1>
  <p class="lead">{p["short"]}</p>
  <div class="ctas">{"".join(links)}</div>

  <section class="blk"><h2>{e(lb["problem"])}</h2>{problem}</section>
  <section class="blk"><h2>{e(lb["role"])}</h2>{role}</section>
  <section class="blk"><h2>{e(lb["stack"])}</h2><ul class="chips">{stack}</ul></section>
  <section class="blk res"><h2>{e(lb["result"])}</h2>{result}</section>
  <section class="blk"><h2>{e(lb["shots"])}</h2>{shots}</section>

  <nav class="doc-nav" aria-label="{e(lb["all"])}">
    <a href="{L["path"]}#work" class="pill" data-hover><span aria-hidden="true">←</span> {e(lb["all"])}</a>
    <a href="{proj_url(L, nxt)}" class="pill solid" data-hover>{e(lb["next"])}: {e(L["proj"][nxt]["title"])} <span aria-hidden="true">→</span></a>
  </nav>
  <footer class="firma">
    <a href="{NORA}" target="_blank" rel="noopener" class="firma-a">
      <img src="/assets/norastudio-bone.webp" alt="NORASTUDIO" width="80" height="16" loading="lazy">
      <span>{e(L["firma"])} <b>NORASTUDIO</b></span>
    </a>
    <a href="tel:+{WA_NUM}" class="firma-a">{e(L["firma_tel"])} <b>8757 8890</b></a>
  </footer>
</main>
</body>
</html>
'''

def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f: f.write(text)

def main():
    write(os.path.join(PUB, "index.html"), page(ES))
    write(os.path.join(PUB, "en", "index.html"), page(EN))
    urls = [("/", "/en/")]
    for i, s in enumerate(SLUGS):
        write(os.path.join(PUB, "proyectos", s, "index.html"), project_page(ES, s, i))
        write(os.path.join(PUB, "en", "projects", s, "index.html"), project_page(EN, s, i))
        urls.append((proj_url(ES, s), proj_url(EN, s)))
    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for es_p, en_p in urls:
        for p in (es_p, en_p):
            sm.append(f'  <url>\n    <loc>{SITE}{p}</loc>\n    <xhtml:link rel="alternate" hreflang="es" href="{SITE}{es_p}"/>\n'
                      f'    <xhtml:link rel="alternate" hreflang="en" href="{SITE}{en_p}"/>\n'
                      f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{es_p}"/>\n  </url>')
    sm.append("</urlset>\n")
    write(os.path.join(PUB, "sitemap.xml"), "\n".join(sm))
    write(os.path.join(PUB, "robots.txt"), f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
    write(os.path.join(PUB, "manifest.webmanifest"), json.dumps({
        "name": "David Ureña", "short_name": "David Ureña", "lang": "es", "start_url": "/", "display": "standalone",
        "background_color": "#07070b", "theme_color": "#07070b",
        "icons": [{"src": "/icon-192.png", "sizes": "192x192", "type": "image/png"},
                  {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png"},
                  {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]}, ensure_ascii=False, indent=2))
    print(f"ok: /, /en/, {len(SLUGS)*2} páginas de proyecto, sitemap.xml, robots.txt, manifest.webmanifest")

if __name__ == "__main__":
    main()

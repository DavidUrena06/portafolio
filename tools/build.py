#!/usr/bin/env python3
# ============================================================
#  build.py — genera el portafolio en español (/) e inglés (/en/).
#
#  Todo el texto vive aquí, en ES y EN. Las páginas de public/ se
#  generan con este script: no editarlas a mano.
#     python3 tools/build.py
# ============================================================
import json, os, html
from urllib.parse import quote

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(RAIZ, "public")

SITE = "https://david.norastudio.digital"   # dirección final del portafolio
MOSTRAR_PRECIOS = True                         # False oculta todos los precios de NoraStudio
WA_NUM = "50687578890"                         # WhatsApp de NoraStudio
EMAIL = "josue.calderon.urena@gmail.com"
LINKEDIN = "https://www.linkedin.com/in/davure"
GITHUB = "https://github.com/DavidUrena06"
INSTAGRAM = "https://www.instagram.com/urenas.js"
NORA = "https://norastudio.digital"
VERSION = "3"                                  # súbelo para romper caché de css/js

def wa(msg):
    return f"https://wa.me/{WA_NUM}?text={quote(msg)}"

e = html.escape

# ------------------------------------------------------------
#  CONTENIDO
# ------------------------------------------------------------
ES = {
    "lang": "es", "locale": "es_CR", "path": "/",
    "title": "David Ureña · Desarrollador full-stack en Costa Rica",
    "desc": "Desarrollador full-stack en San José y fundador de NoraStudio: desarrollo web, tiendas en línea y software a medida para negocios en Costa Rica.",
    "og_alt": "David Ureña, desarrollador full-stack en Costa Rica",
    "skip": "Saltar al contenido",
    "gate_k": "David Ureña · Portafolio 2026",
    "enter": "Entrar",
    "gate_h": 'Con sonido · <span class="t-touch">toca todo</span><span class="t-desk">mueve el mouse</span>',
    "sound": "Sonido",
    "nav": "Secciones",
    "other_lang": ("EN", "/en/", "English"),
    "hero_k": "Desarrollador full-stack · San José, Costa Rica",
    "h1": "David Ureña, desarrollador full-stack en Costa Rica",
    "hero_tag": "Sitios web, tiendas en línea y software a medida <em>para negocios en Costa Rica.</em>",
    "scroll": "Baja",
    "hints": {
        "hero": ("Toca · arrastra · mantén presionado", "Mueve el mouse · mantén el clic"),
        "about": ("Agita el teléfono", "Doble clic para explotar"),
        "nora": ("Toca un paquete para cotizar", "Clic en un paquete para cotizar"),
        "ngn": ("Desliza e inclina las tarjetas", "Pasa el mouse · arrastra"),
        "work": ("Desliza e inclina las tarjetas", "Pasa el mouse · arrastra"),
        "skills": ("Lanza las esferas · toca una para ver detalles", "Agarra y lanza · clic para ver detalles"),
        "process": ("Frota la pantalla", "Pasa el mouse por la lluvia"),
        "contact": ("Mantén presionado el centro", "Mantén presionado el centro"),
    },
    "names": {"hero": "Inicio", "about": "Sobre mí", "nora": "NoraStudio", "ngn": "Cliente", "work": "Proyectos", "skills": "Habilidades", "process": "Cómo trabajo", "contact": "Contacto"},

    # sobre mí
    "about_k": "02 — Sobre mí",
    "about_h": "Hola, soy <em>David.</em>",
    "about_lead": "Soy Josué David Calderón Ureña, desarrollador full-stack de San José, Costa Rica, y fundador de <b>NoraStudio</b>. Diseño y programo sitios web, tiendas en línea y sistemas a medida para que los negocios vendan y trabajen mejor.",
    "faith": "Soy cristiano, y mi fe guía cómo trabajo: con <b>integridad</b>, siendo <b>honesto</b> con cada cliente, buscando la <b>excelencia</b> y con espíritu de <b>servicio</b>. Sirvo en mi iglesia en el equipo de medios y pantallas.",
    "edu": [
        ("2026 — hoy", "Bachillerato en Desarrollo de Software", "Universidad Fidélitas"),
        ("2023 — 2025", "Técnico en Desarrollo Web", "Colegio Técnico Profesional de Educación Comercial y Servicios"),
        ("Idiomas", "Español nativo · Inglés B2", ""),
    ],
    "stats": [("100", "", "PageSpeed en ngn.co.cr"), ("6", "", "Certificaciones Cisco"), ("B2", "text", "Nivel de inglés")],

    # NoraStudio
    "nora_k": "03 — Mi estudio",
    "nora_h": "Fundador de <em>NoraStudio.</em>",
    "nora_lead": "Estudio de desarrollo web y software para negocios en Costa Rica. Cada proyecto se diseña a la medida, con <b>SEO</b> y <b>panel de administración</b> cuando aplica.",
    "promise_k": "Mi promesa",
    "promise": "Tu sitio <b>no se publica</b> hasta que estés <b>totalmente satisfecho.</b> Calidad ante todo.",
    "from": "desde", "min": "mínimo", "typ": "típico", "month": "/mes",
    "packs": [
        ("NORA Base", "Landing page", "₡100.000", "from", ""),
        ("NORA Presencia", "Sitio corporativo", "₡350.000", "from", ""),
        ("NORA Tienda", "Tienda en línea (e-commerce)", "₡500.000", "min", "típico ₡700.000"),
        ("NORA a Medida", "Software y apps web a medida", "₡600.000", "from", ""),
    ],
    "pack_msg": "Hola David, vi tu portafolio y me interesa {p}. ¿Me das más información?",
    "extras_k": "Además",
    "extras": [
        ("Mantenimiento", "₡25.000/mes", "Dominio y hosting aparte"),
        ("Gestión de Meta Ads", "₡45.000 – 70.000/mes", "Más la inversión publicitaria del cliente"),
    ],
    "social_k": "Contenido y redes · mensual",
    "social": [
        ("Esencial", "₡95.000", "8 posts · 2 videos"),
        ("Crecimiento", "₡165.000", "10 posts · 3 videos"),
        ("Estudio Completo", "₡260.000", "12 posts · 4 videos · gestión de Meta Ads"),
    ],
    "case_k": "En desarrollo",
    "case": "Tienda en línea para un negocio local de alimento para perros: SEO, panel de administración y tienda completa.",
    "nora_cta": "Cotizar por WhatsApp",
    "nora_msg": "Hola David, vi tu portafolio y quiero cotizar un proyecto con NoraStudio.",
    "nora_site": "Visitar norastudio.digital",

    # NGN
    "ngn_k": "04 — Cliente destacado",
    "ngn_h": "Desarrollo web y sistemas para <em>NGN Costa Rica.</em>",
    "ngn_lead": "Empresa de telecomunicaciones con 14 años de operación: telefonía IP y PBX, redes empresariales, WiFi y videovigilancia.",
    "ngn_cards": [
        ("01 · Sitio web", "ngn.co.cr", "Sitio corporativo en Astro con <b>100/100 en Google PageSpeed</b>, SEO y analítica con GTM y GA4.", "Astro · SEO · GTM · GA4", "ngn-sitio", "Página de inicio del sitio web de NGN Costa Rica", "https://ngn.co.cr", "Ver sitio"),
        ("02 · Sistema", "Comprobantes CR", "Facturación electrónica que lee los XML de Hacienda, con módulo de leads, registro de auditoría y clasificación de equipos con códigos CABYS.", "Node.js · Express · Prisma · PostgreSQL · Zoho Mail", "sistema-facturas", "Pantalla del sistema de comprobantes electrónicos (datos difuminados)", "https://github.com/DavidUrena06/comprobantes-cr", "Ver código"),
        ("03 · Herramienta · en desarrollo", "NGN Coverage Designer", "Diseña cobertura WiFi y de cámaras sobre planos, con mapas de calor, cotizaciones y exportación a PDF o imagen.", "Mapas de calor · Cotizaciones · PDF", "ngn-cobertura-wifi", "Editor de cobertura WiFi sobre un plano", "", ""),
        ("04 · Marketing digital", "Crecimiento y ventas", "Campañas de Google Ads por línea de negocio (telefonía IP y PBX, videovigilancia, redes WiFi), analítica con GTM y GA4, estrategia de contenido para su fanpage de ~10.000 seguidores y apoyo en ventas B2B.", "Google Ads · GA4 · Contenido · B2B", "", "", "", ""),
    ],
    "exp_k": "Otra experiencia",
    "exp": "<b>Soporte técnico (pasante)</b> · All In Tec · 2024 — soporte remoto y presencial en Windows.",

    # otros proyectos
    "work_k": "05 — Otros proyectos",
    "work_h": "Más <em>proyectos.</em>",
    "work_cards": [
        ("Tienda de moda", "NORA", "Tienda en línea completa con pasarela de pago Tilopay, panel de administración y servidor propio.", "Node.js · Express · PostgreSQL · Prisma · Tilopay · VPS", "", "", "", ""),
        ("Plataforma full-stack", "VirtualBet", "Casino virtual y apuestas deportivas: Crash, Mines, Blackjack, Keno, Plinko, CoinFlip y Dice; sportsbook con TheSportsDB, P2P y funciones sociales. <b>Demo con moneda virtual, sin dinero real.</b>", "Node.js · Express · Prisma · PostgreSQL · Supabase · Vercel · Render", "", "", "", ""),
        ("Investigación de datos · Python", "Laboratorio de trading", "Análisis de futuros XRP/USDT con controles de datos mezclados y criterios de falsación. Hallazgo: de 13 a 16 UTC el rango mediano de las velas es cerca del doble. <b>Ejercicio de rigor analítico, no consejo financiero.</b>", "Python · Análisis de datos · Estadística", "", "", "", ""),
    ],
    "gh_all": "Ver todo en GitHub",

    # habilidades
    "skills_k": "06 — Habilidades",
    "skills_h": "Lo que <em>sé hacer.</em>",
    "skills": [
        ("Código", "Lenguajes y frameworks", ["JavaScript", "TypeScript (nivel funcional)", "Node.js", "Express", "Astro", "HTML", "CSS", "SQL", "Fundamentos de Java, C# y ASP.NET"]),
        ("Backend", "Backend y datos", ["PostgreSQL", "Prisma ORM", "APIs REST", "Integraciones: Zoho Mail, Tilopay, TheSportsDB", "Supabase"]),
        ("Nube", "Nube y despliegue", ["Vercel", "Render", "VPS (Hostinger)", "Cloudflare", "AWS (EC2 y consola, en crecimiento)"]),
        ("Marketing", "Marketing y analítica", ["Google Tag Manager", "GA4", "Google Ads", "Meta Ads", "Microsoft Clarity", "SEO"]),
        ("Seguridad", "Seguridad e infraestructura", ["Fundamentos de redes", "IAM y RBAC", "Ciberseguridad"]),
        ("Equipo", "Herramientas", ["Git", "VS Code", "Visual Studio", "Figma"]),
        ("Personas", "Habilidades blandas", ["Comunicación", "Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Proactividad"]),
        ("Cisco", "Certificaciones · Cisco Networking Academy", ["IT Essentials", "Cybersecurity Essentials", "Python Essentials", "Data Science Essentials", "English for IT 1", "English for IT 2"]),
    ],

    # cómo trabajo
    "proc_k": "07 — Cómo trabajo",
    "proc_h": "Calidad <em>ante todo.</em>",
    "matrix": ["EXCELENCIA", "HONESTIDAD", "SERVICIO"],
    "steps": [("Escucho", "Entiendo tu negocio y lo que necesitas lograr."), ("Construyo", "Diseño y código a medida, con SEO y panel cuando aplica."), ("Entrego", "Publicamos solo cuando estés totalmente satisfecho.")],

    # contacto
    "contact_k": "08 — Contacto",
    "contact_h": "¿<em>Hablamos?</em>",
    "hold": "Mantén<br>presionado",
    "hold_done": "¡Hablemos!",
    "wa_label": "WhatsApp",
    "wa_msg": "Hola David, vi tu portafolio y me gustaría hablar contigo.",
    "mail_label": "Correo",
    "place": "San José, Costa Rica",
    "firma": "Diseñado y desarrollado por",
    "firma_tel": "Proyectos",
    "new_tab": "(abre en otra pestaña)",
}

EN = {
    "lang": "en", "locale": "en_US", "path": "/en/",
    "title": "David Ureña · Full-Stack Developer in Costa Rica",
    "desc": "Full-stack developer in San José and founder of NoraStudio: websites, online stores and custom software for businesses in Costa Rica.",
    "og_alt": "David Ureña, full-stack developer in Costa Rica",
    "skip": "Skip to content",
    "gate_k": "David Ureña · Portfolio 2026",
    "enter": "Enter",
    "gate_h": 'Sound on · <span class="t-touch">touch everything</span><span class="t-desk">move your mouse</span>',
    "sound": "Sound",
    "nav": "Sections",
    "other_lang": ("ES", "/", "Español"),
    "hero_k": "Full-stack developer · San José, Costa Rica",
    "h1": "David Ureña, full-stack developer in Costa Rica",
    "hero_tag": "Websites, online stores and custom software <em>for businesses in Costa Rica.</em>",
    "scroll": "Scroll",
    "hints": {
        "hero": ("Tap · drag · press and hold", "Move your mouse · hold the click"),
        "about": ("Shake your phone", "Double-click to explode"),
        "nora": ("Tap a package to get a quote", "Click a package to get a quote"),
        "ngn": ("Swipe and tilt the cards", "Hover · drag"),
        "work": ("Swipe and tilt the cards", "Hover · drag"),
        "skills": ("Throw the spheres · tap one for details", "Grab and throw · click for details"),
        "process": ("Rub the screen", "Move your mouse through the rain"),
        "contact": ("Press and hold the center", "Press and hold the center"),
    },
    "names": {"hero": "Home", "about": "About", "nora": "NoraStudio", "ngn": "Client", "work": "Projects", "skills": "Skills", "process": "How I work", "contact": "Contact"},

    "about_k": "02 — About me",
    "about_h": "Hi, I'm <em>David.</em>",
    "about_lead": "I'm Josué David Calderón Ureña, a full-stack developer from San José, Costa Rica, and the founder of <b>NoraStudio</b>. I design and build websites, online stores and custom systems that help businesses sell and work better.",
    "faith": "I'm a Christian, and my faith shapes how I work: with <b>integrity</b>, being <b>honest</b> with every client, pursuing <b>excellence</b> and with a heart for <b>service</b>. I serve at my church on the media and screens team.",
    "edu": [
        ("2026 — now", "Bachelor's in Software Development", "Universidad Fidélitas"),
        ("2023 — 2025", "Web Development Technician", "Colegio Técnico Profesional de Educación Comercial y Servicios"),
        ("Languages", "Native Spanish · English B2", ""),
    ],
    "stats": [("100", "", "PageSpeed on ngn.co.cr"), ("6", "", "Cisco certifications"), ("B2", "text", "English level")],

    "nora_k": "03 — My studio",
    "nora_h": "Founder of <em>NoraStudio.</em>",
    "nora_lead": "A web and software development studio for businesses in Costa Rica. Every project is custom-built, with <b>SEO</b> and an <b>admin panel</b> when it applies.",
    "promise_k": "My promise",
    "promise": "Your site <b>doesn't go live</b> until you're <b>completely satisfied.</b> Quality first.",
    "from": "from", "min": "minimum", "typ": "typical", "month": "/mo",
    "packs": [
        ("NORA Base", "Landing page", "₡100.000", "from", ""),
        ("NORA Presencia", "Corporate website", "₡350.000", "from", ""),
        ("NORA Tienda", "Online store (e-commerce)", "₡500.000", "min", "typical ₡700.000"),
        ("NORA a Medida", "Custom software and web apps", "₡600.000", "from", ""),
    ],
    "pack_msg": "Hi David, I saw your portfolio and I'm interested in {p}. Could you tell me more?",
    "extras_k": "Also",
    "extras": [
        ("Maintenance", "₡25.000/mo", "Domain and hosting not included"),
        ("Meta Ads management", "₡45.000 – 70.000/mo", "Plus the client's ad spend"),
    ],
    "social_k": "Content and social media · monthly",
    "social": [
        ("Esencial", "₡95.000", "8 posts · 2 videos"),
        ("Crecimiento", "₡165.000", "10 posts · 3 videos"),
        ("Estudio Completo", "₡260.000", "12 posts · 4 videos · Meta Ads management"),
    ],
    "case_k": "In progress",
    "case": "An online store for a local dog food business: SEO, admin panel and a complete shop.",
    "nora_cta": "Get a quote on WhatsApp",
    "nora_msg": "Hi David, I saw your portfolio and I'd like a quote for a project with NoraStudio.",
    "nora_site": "Visit norastudio.digital",

    "ngn_k": "04 — Featured client",
    "ngn_h": "Web development and systems for <em>NGN Costa Rica.</em>",
    "ngn_lead": "A telecommunications company with 14 years in operation: IP telephony and PBX, business networks, WiFi and video surveillance.",
    "ngn_cards": [
        ("01 · Website", "ngn.co.cr", "Corporate site built with Astro, scoring <b>100/100 on Google PageSpeed</b>, with SEO and analytics through GTM and GA4.", "Astro · SEO · GTM · GA4", "ngn-sitio", "Home page of the NGN Costa Rica website", "https://ngn.co.cr", "View site"),
        ("02 · System", "Comprobantes CR", "Electronic invoicing that reads Costa Rica's Hacienda XML files, with a leads module, audit log and equipment classification by CABYS code.", "Node.js · Express · Prisma · PostgreSQL · Zoho Mail", "sistema-facturas", "Screen of the electronic invoicing system (data blurred)", "https://github.com/DavidUrena06/comprobantes-cr", "View code"),
        ("03 · Tool · in progress", "NGN Coverage Designer", "Designs WiFi and camera coverage over floor plans, with heat maps, quotes and PDF or image export.", "Heat maps · Quotes · PDF", "ngn-cobertura-wifi", "WiFi coverage editor over a floor plan", "", ""),
        ("04 · Digital marketing", "Growth and sales", "Google Ads campaigns by business line (IP telephony and PBX, video surveillance, WiFi networks), analytics with GTM and GA4, content strategy for their ~10,000-follower page and B2B sales support.", "Google Ads · GA4 · Content · B2B", "", "", "", ""),
    ],
    "exp_k": "Other experience",
    "exp": "<b>Technical support (intern)</b> · All In Tec · 2024 — remote and on-site Windows support.",

    "work_k": "05 — Other projects",
    "work_h": "More <em>projects.</em>",
    "work_cards": [
        ("Fashion store", "NORA", "A complete online store with Tilopay payments, an admin panel and its own server.", "Node.js · Express · PostgreSQL · Prisma · Tilopay · VPS", "", "", "", ""),
        ("Full-stack platform", "VirtualBet", "Virtual casino and sports betting: Crash, Mines, Blackjack, Keno, Plinko, CoinFlip and Dice; a sportsbook powered by TheSportsDB, P2P and social features. <b>Demo with virtual currency, no real money.</b>", "Node.js · Express · Prisma · PostgreSQL · Supabase · Vercel · Render", "", "", "", ""),
        ("Data research · Python", "Trading research lab", "Analysis of XRP/USDT futures data with shuffled-data controls and falsification criteria. Finding: between 13 and 16 UTC the median candle range is about twice as large. <b>An exercise in analytical rigor, not financial advice.</b>", "Python · Data analysis · Statistics", "", "", "", ""),
    ],
    "gh_all": "See everything on GitHub",

    "skills_k": "06 — Skills",
    "skills_h": "What <em>I can do.</em>",
    "skills": [
        ("Code", "Languages and frameworks", ["JavaScript", "TypeScript (working knowledge)", "Node.js", "Express", "Astro", "HTML", "CSS", "SQL", "Fundamentals of Java, C# and ASP.NET"]),
        ("Backend", "Backend and data", ["PostgreSQL", "Prisma ORM", "REST APIs", "Integrations: Zoho Mail, Tilopay, TheSportsDB", "Supabase"]),
        ("Cloud", "Cloud and deployment", ["Vercel", "Render", "VPS (Hostinger)", "Cloudflare", "AWS (EC2 and console, growing)"]),
        ("Marketing", "Marketing and analytics", ["Google Tag Manager", "GA4", "Google Ads", "Meta Ads", "Microsoft Clarity", "SEO"]),
        ("Security", "Security and infrastructure", ["Networking fundamentals", "IAM and RBAC", "Cybersecurity"]),
        ("Tools", "Tools", ["Git", "VS Code", "Visual Studio", "Figma"]),
        ("People", "Soft skills", ["Communication", "Teamwork", "Problem solving", "Adaptability", "Proactivity"]),
        ("Cisco", "Certifications · Cisco Networking Academy", ["IT Essentials", "Cybersecurity Essentials", "Python Essentials", "Data Science Essentials", "English for IT 1", "English for IT 2"]),
    ],

    "proc_k": "07 — How I work",
    "proc_h": "Quality <em>first.</em>",
    "matrix": ["EXCELLENCE", "HONESTY", "SERVICE"],
    "steps": [("I listen", "I understand your business and what you need to achieve."), ("I build", "Custom design and code, with SEO and an admin panel when it applies."), ("I deliver", "We go live only when you're completely satisfied.")],

    "contact_k": "08 — Contact",
    "contact_h": "Let's <em>talk?</em>",
    "hold": "Press<br>and hold",
    "hold_done": "Let's talk!",
    "wa_label": "WhatsApp",
    "wa_msg": "Hi David, I saw your portfolio and I'd like to talk.",
    "mail_label": "Email",
    "place": "San José, Costa Rica",
    "firma": "Designed and developed by",
    "firma_tel": "Projects",
    "new_tab": "(opens in a new tab)",
}

ARTS = ["a1", "a2", "a3", "a4", "a5"]

# ------------------------------------------------------------
#  piezas
# ------------------------------------------------------------
def sec_attrs(L, key, shape):
    t, d = L["hints"][key]
    return f'id="{key}" class="sec s-{key}" data-shape="{shape}" data-name="{e(L["names"][key])}" data-hint-touch="{e(t)}" data-hint-desk="{e(d)}"'

def ext(L, href, label, cls="pill"):
    return f'<a href="{href}" class="{cls}" target="_blank" rel="noopener" data-hover>{label} <span aria-hidden="true">↗</span><span class="sr"> {L["new_tab"]}</span></a>'

def card(L, c, i):
    kick, title, desc, tags, img, alt, href, link = c
    if img:
        art = (f'<img class="art" src="/assets/img/{img}-720.webp" srcset="/assets/img/{img}-480.webp 480w, /assets/img/{img}-720.webp 720w, /assets/img/{img}-1080.webp 1080w" '
               f'sizes="(min-width: 900px) 320px, 74vw" width="1080" height="810" loading="lazy" decoding="async" alt="{e(alt)}">')
    else:
        art = f'<div class="art {ARTS[i % len(ARTS)]}" aria-hidden="true"></div>'
    more = ext(L, href, e(link), "card-link") if href else ""
    return (f'<article class="card" data-hover><div class="card-in">{art}<div class="holo" aria-hidden="true"></div><div class="glare" aria-hidden="true"></div>'
            f'<div class="card-txt"><span class="mono">{e(kick)}</span><h3>{e(title)}</h3><p>{desc}</p><p class="tags mono">{e(tags)}</p>{more}</div></div></article>')

def precio(L, p, kind):
    if not MOSTRAR_PRECIOS: return ""
    return f'<span class="price"><small>{L[kind]}</small>{e(p)}</span>'

def page(L):
    other = EN if L is ES else ES
    lang = L["lang"]
    url = SITE + L["path"]

    packs = "".join(
        f'<li><a class="pack" href="{e(wa(L["pack_msg"].format(p=n)))}" target="_blank" rel="noopener" data-hover>'
        f'<span class="pack-n"><b>{e(n)}</b><span>{e(d)}</span>{f"<small>{e(note)}</small>" if note and MOSTRAR_PRECIOS else ""}</span>'
        f'{precio(L, p, kind)}<span class="pack-go" aria-hidden="true">↗</span></a></li>'
        for n, d, p, kind, note in L["packs"])
    extras = "".join(f'<li><b>{e(n)}</b>{f"<span class=price-s>{e(p)}</span>" if MOSTRAR_PRECIOS else ""}<small>{e(s)}</small></li>' for n, p, s in L["extras"])
    social = "".join(f'<li><b>{e(n)}</b>{f"<span class=price-s>{e(p)}</span>" if MOSTRAR_PRECIOS else ""}<small>{e(s)}</small></li>' for n, p, s in L["social"])
    edu = "".join(f'<li><span class="mono">{e(y)}</span><b>{e(t)}</b>{f"<small>{e(s)}</small>" if s else ""}</li>' for y, t, s in L["edu"])
    stats = "".join(
        (f'<div><b class="txt">{e(n)}</b>' if kind == "text" else f'<div><b data-to="{n}">{n}</b>') + f'<span class="mono">{e(lbl)}</span></div>'
        for n, kind, lbl in L["stats"])
    ngn_cards = "".join(card(L, c, i) for i, c in enumerate(L["ngn_cards"]))
    work_cards = "".join(card(L, c, i + 1) for i, c in enumerate(L["work_cards"]))
    sk_groups = "".join(
        f'<div class="sk-group{" on" if i == 0 else ""}" data-ball="{e(b)}" data-n="{len(items)}" id="sk-{i}" role="tabpanel"><h3>{e(title)}</h3><ul>'
        + "".join(f"<li>{e(it)}</li>" for it in items) + "</ul></div>"
        for i, (b, title, items) in enumerate(L["skills"]))
    sk_tabs = "".join(f'<button role="tab" aria-selected="{"true" if i == 0 else "false"}" aria-controls="sk-{i}" data-i="{i}">{e(b)}</button>' for i, (b, _, _) in enumerate(L["skills"]))
    steps = "".join(f'<li><span class="mono">0{i+1}</span><b>{e(t)}</b><small>{e(d)}</small></li>' for i, (t, d) in enumerate(L["steps"]))

    cfg = {"lang": lang, "hero": ["DAVID", "UREÑA"], "heroDesk": ["DAVID UREÑA"], "nora": ["NORA"], "matrix": L["matrix"], "holdDone": L["hold_done"]}

    person = {
        "@type": "Person", "@id": SITE + "/#david",
        "name": "David Ureña", "alternateName": "Josué David Calderón Ureña",
        "jobTitle": "Desarrollador full-stack" if lang == "es" else "Full-stack developer",
        "url": SITE + "/", "image": SITE + "/assets/og.jpg", "email": "mailto:" + EMAIL,
        "address": {"@type": "PostalAddress", "addressLocality": "San José", "addressCountry": "CR"},
        "sameAs": [LINKEDIN, GITHUB, INSTAGRAM],
        "knowsLanguage": ["es", "en"],
        "knowsAbout": ["JavaScript", "Node.js", "Express", "Astro", "PostgreSQL", "Prisma", "SEO", "Google Ads", "GA4", "Desarrollo web" if lang == "es" else "Web development"],
        "alumniOf": {"@type": "EducationalOrganization", "name": "Colegio Técnico Profesional de Educación Comercial y Servicios"},
        "affiliation": {"@type": "CollegeOrUniversity", "name": "Universidad Fidélitas"},
        "founder": None,
    }
    person.pop("founder")
    offers = [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": n, "description": d},
               **({"priceSpecification": {"@type": "PriceSpecification", "minPrice": int(p.replace("₡", "").replace(".", "")), "priceCurrency": "CRC"}} if MOSTRAR_PRECIOS else {})}
              for n, d, p, _, _ in L["packs"]]
    nora = {
        "@type": "ProfessionalService", "@id": NORA + "/#org", "name": "NoraStudio", "url": NORA,
        "telephone": "+" + WA_NUM, "founder": {"@id": SITE + "/#david"},
        "areaServed": {"@type": "Country", "name": "Costa Rica"},
        "address": {"@type": "PostalAddress", "addressLocality": "San José", "addressCountry": "CR"},
        "description": L["nora_lead"].replace("<b>", "").replace("</b>", ""),
        "hasOfferCatalog": {"@type": "OfferCatalog", "name": "NoraStudio", "itemListElement": offers},
    }
    site = {"@type": "WebSite", "@id": SITE + "/#web", "url": SITE + "/", "name": "David Ureña", "inLanguage": ["es", "en"], "author": {"@id": SITE + "/#david"}}
    pageld = {"@type": "ProfilePage", "@id": url + "#page", "url": url, "name": L["title"], "inLanguage": lang, "isPartOf": {"@id": SITE + "/#web"}, "mainEntity": {"@id": SITE + "/#david"}}
    ld = json.dumps({"@context": "https://schema.org", "@graph": [person, nora, site, pageld]}, ensure_ascii=False)

    ol, ohref, oname = L["other_lang"]
    return f'''<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{e(L["title"])}</title>
<meta name="description" content="{e(L["desc"])}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="es" href="{SITE}/">
<link rel="alternate" hreflang="en" href="{SITE}/en/">
<link rel="alternate" hreflang="x-default" href="{SITE}/">
<meta name="theme-color" content="#07070b">
<meta name="author" content="David Ureña">
<meta property="og:type" content="profile">
<meta property="og:site_name" content="David Ureña">
<meta property="og:title" content="{e(L["title"])}">
<meta property="og:description" content="{e(L["desc"])}">
<meta property="og:url" content="{url}">
<meta property="og:locale" content="{L["locale"]}">
<meta property="og:locale:alternate" content="{other["locale"]}">
<meta property="og:image" content="{SITE}/assets/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{e(L["og_alt"])}">
<meta property="profile:first_name" content="David">
<meta property="profile:last_name" content="Ureña">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(L["title"])}">
<meta name="twitter:description" content="{e(L["desc"])}">
<meta name="twitter:image" content="{SITE}/assets/og.jpg">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="stylesheet" href="/css/styles.css?v={VERSION}">
<script type="application/ld+json">{ld}</script>
<noscript><style>#gate{{display:none}}body:not(.in) #main,#top{{opacity:1!important}}</style></noscript>
</head>
<body>
<a class="skip" href="#main">{e(L["skip"])}</a>
<canvas id="gl" aria-hidden="true"></canvas>
<div id="glow" aria-hidden="true"></div>
<div id="cursor" aria-hidden="true"><i></i></div>
<label id="haptic" aria-hidden="true"><input type="checkbox" switch tabindex="-1"></label>
<script id="cfg" type="application/json">{json.dumps(cfg, ensure_ascii=False)}</script>

<div id="gate">
  <p class="mono gate-k">{e(L["gate_k"])}</p>
  <button id="enter" class="enter loading" aria-busy="true" data-hover>
    <span class="enter-ring" aria-hidden="true"></span><span class="enter-ring r2" aria-hidden="true"></span>
    <span class="enter-txt">{e(L["enter"])}</span>
  </button>
  <p class="mono gate-h">{L["gate_h"]}</p>
</div>

<header id="top">
  <a class="brand" href="{L["path"]}" aria-label="David Ureña">D<em>u</em></a>
  <nav class="dots" id="dots" aria-label="{e(L["nav"])}"></nav>
  <div class="top-r">
    <a class="lang mono" href="{ohref}" hreflang="{other["lang"]}" lang="{other["lang"]}" aria-label="{e(oname)}" data-hover>{ol}</a>
    <button id="snd" class="snd" aria-label="{e(L["sound"])}" aria-pressed="true" data-hover><i></i><i></i><i></i><i></i></button>
  </div>
</header>

<div id="toast" class="mono" aria-live="polite"></div>

<main id="main">

  <section {sec_attrs(L, "hero", "text")}>
    <p class="mono kicker">{e(L["hero_k"])}</p>
    <h1 class="sr">{e(L["h1"])}</h1>
    <div class="hero-foot">
      <p class="hero-tag">{L["hero_tag"]}</p>
      <div class="scroll-cue mono" aria-hidden="true"><span>{e(L["scroll"])}</span><i></i></div>
    </div>
  </section>

  <section {sec_attrs(L, "about", "portrait")}>
    <div class="about-txt">
      <p class="mono kicker">{e(L["about_k"])}</p>
      <h2 class="big">{L["about_h"]}</h2>
      <p class="lead">{L["about_lead"]}</p>
      <p class="faith">{L["faith"]}</p>
      <ul class="edu">{edu}</ul>
      <div class="stats">{stats}</div>
    </div>
  </section>

  <section {sec_attrs(L, "nora", "nora")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["nora_k"])}</p>
      <h2 class="big">{L["nora_h"]}</h2>
      <p class="lead">{L["nora_lead"]}</p>
    </div>
    <p class="promise"><span class="mono">{e(L["promise_k"])}</span>{L["promise"]}</p>
    <ul class="packs">{packs}</ul>
    <div class="nora-more">
      <div><p class="mono mini-k">{e(L["extras_k"])}</p><ul class="mini">{extras}</ul></div>
      <div><p class="mono mini-k">{e(L["social_k"])}</p><ul class="mini">{social}</ul></div>
    </div>
    <p class="case"><span class="mono">{e(L["case_k"])}</span>{e(L["case"])}</p>
    <div class="ctas">
      {ext(L, e(wa(L["nora_msg"])), e(L["nora_cta"]), "pill solid")}
      {ext(L, NORA, e(L["nora_site"]))}
    </div>
  </section>

  <section {sec_attrs(L, "ngn", "galaxy")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["ngn_k"])}</p>
      <h2 class="big">{L["ngn_h"]}</h2>
      <p class="lead">{e(L["ngn_lead"])}</p>
    </div>
    <div class="cards">{ngn_cards}</div>
    <p class="exp"><span class="mono">{e(L["exp_k"])}</span>{L["exp"]}</p>
  </section>

  <section {sec_attrs(L, "work", "wave")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["work_k"])}</p>
      <h2 class="big">{L["work_h"]}</h2>
    </div>
    <div class="cards">{work_cards}</div>
    <div class="ctas">{ext(L, GITHUB, e(L["gh_all"]))}</div>
  </section>

  <section {sec_attrs(L, "skills", "planet")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["skills_k"])}</p>
      <h2 class="big">{L["skills_h"]}</h2>
    </div>
    <canvas class="phys" id="phys" aria-hidden="true"></canvas>
    <div class="sk-tabs" role="tablist">{sk_tabs}</div>
    <div class="sk-panel">{sk_groups}</div>
  </section>

  <section {sec_attrs(L, "process", "rain")}>
    <div class="sec-head">
      <p class="mono kicker">{e(L["proc_k"])}</p>
      <h2 class="big">{L["proc_h"]}</h2>
    </div>
    <canvas class="rain" id="rain" aria-label="{e(" · ".join(L["matrix"]))}" role="img"></canvas>
    <ol class="steps">{steps}</ol>
  </section>

  <section {sec_attrs(L, "contact", "hole")}>
    <div class="sec-head center">
      <p class="mono kicker">{e(L["contact_k"])}</p>
      <h2 class="big">{L["contact_h"]}</h2>
    </div>
    <div class="hole-wrap">
      <button class="hold" id="hold" data-hover>
        <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47"/><circle class="prog" cx="50" cy="50" r="47"/></svg>
        <span class="hold-txt mono">{L["hold"]}</span>
      </button>
    </div>
    <div class="links" id="links">
      {ext(L, e(wa(L["wa_msg"])), e(L["wa_label"]), "pill solid")}
      <a href="mailto:{EMAIL}" class="pill" data-hover>{e(L["mail_label"])} <span aria-hidden="true">↗</span></a>
      {ext(L, LINKEDIN, "LinkedIn")}
      {ext(L, GITHUB, "GitHub")}
      {ext(L, INSTAGRAM, "Instagram")}
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

def main():
    with open(os.path.join(PUB, "index.html"), "w", encoding="utf-8") as f: f.write(page(ES))
    os.makedirs(os.path.join(PUB, "en"), exist_ok=True)
    with open(os.path.join(PUB, "en", "index.html"), "w", encoding="utf-8") as f: f.write(page(EN))
    with open(os.path.join(PUB, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
''' + "".join(f'''  <url>
    <loc>{SITE}{p}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="{SITE}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="{SITE}/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}/"/>
  </url>
''' for p in ("/", "/en/")) + "</urlset>\n")
    with open(os.path.join(PUB, "robots.txt"), "w") as f:
        f.write(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
    with open(os.path.join(PUB, "manifest.webmanifest"), "w", encoding="utf-8") as f:
        json.dump({"name": "David Ureña", "short_name": "David Ureña", "lang": "es", "start_url": "/", "display": "standalone",
                   "background_color": "#07070b", "theme_color": "#07070b",
                   "icons": [{"src": "/icon-192.png", "sizes": "192x192", "type": "image/png"},
                             {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png"},
                             {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]}, f, ensure_ascii=False, indent=2)
    print("ok: /, /en/, sitemap.xml, robots.txt, manifest.webmanifest")

if __name__ == "__main__":
    main()

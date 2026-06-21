const WHATSAPP_NUMBER = "390000000000"; // sostituire con numero reale del locale
const WHATSAPP_MSG = "Ciao! Vorrei prenotare un tavolo da Vintage Chupiteria";
const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MSG
)}`;

type MenuItem = { name: string; price: string };
type MenuGroup = { id: string; title: string; note?: string; items: MenuItem[] };

const MENU: MenuGroup[] = [
  {
    id: "shot",
    title: "Shot & Amari",
    items: [
      { name: "Amari (tutta la selezione)", price: "€4" },
      { name: "Jägermeister", price: "€4" },
      { name: "Limoncello", price: "€4" },
    ],
  },
  {
    id: "cocktail",
    title: "Cocktail Principali",
    items: [
      { name: "Mojito", price: "€7" },
      { name: "Caipiroska", price: "€7" },
      { name: "Moscow Mule", price: "€7" },
      { name: "Gin Tonic", price: "€7" },
      { name: "Spritz", price: "€7" },
      { name: "Negroni", price: "€7" },
    ],
  },
  {
    id: "premium",
    title: "Premium Drink",
    items: [
      { name: "Vodka premium", price: "€10" },
      { name: "Gin premium", price: "€8–15" },
      { name: "Rum premium", price: "€6–10" },
      { name: "Whisky", price: "€6–9" },
    ],
  },
  {
    id: "food",
    title: "Food",
    items: [
      { name: "Hamburger", price: "€12–20" },
      { name: "Sfizioserie", price: "€10–18" },
      { name: "Dolci", price: "€6" },
    ],
  },
  {
    id: "birre",
    title: "Birre",
    items: [{ name: "Selezione birre", price: "€3–5" }],
  },
  {
    id: "vini",
    title: "Vini e Bollicine",
    items: [
      { name: "Calice", price: "€5–7" },
      { name: "Bottiglia", price: "€25–120" },
    ],
  },
];

type EventItem = { day: string; title: string; time: string };

const EVENTS: EventItem[] = [
  { day: "Giovedì", title: "Chupiteria Night — Shot & Beats", time: "21:00 — 02:00" },
  { day: "Venerdì", title: "DJ Set Live", time: "22:00 — 03:00" },
  { day: "Sabato", title: "Vintage Saturday Night", time: "22:00 — 03:00" },
];

export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0c;
          color: #f3eee6;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        :focus-visible { outline: 2px solid #ff2fb8; outline-offset: 3px; }

        .wrap { width: 100%; max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        /* ── nav ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          padding: 20px 0;
          background: linear-gradient(to bottom, rgba(10,10,12,0.92), transparent);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .nav-mark {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.02em;
          color: #fff;
        }
        .nav-mark span { color: #ff2fb8; }
        .nav-links { display: none; gap: 28px; }
        .nav-link {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #b8b0a6;
        }
        .nav-link:hover { color: #00e5ff; }
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 18px; border-radius: 999px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          background: #25d366; color: #06150c;
        }
        @media (min-width: 760px) { .nav-links { display: flex; } }

        /* ── hero ── */
        .hero {
          min-height: 100svh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(ellipse 70% 50% at 20% 10%, rgba(255,47,184,0.22), transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 30%, rgba(0,229,255,0.16), transparent 65%),
            #0a0a0c;
        }
        .hero-grid {
          position: absolute; inset: 0; opacity: 0.5; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
        }
        .hero-content { position: relative; z-index: 2; }
        .hero-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: #00e5ff;
        }
        .hero-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(42px, 9vw, 96px);
          line-height: 0.98;
          letter-spacing: -0.01em;
          margin-top: 16px;
          color: #fff;
        }
        .hero-title em { color: #ff2fb8; font-style: italic; }
        .hero-sub {
          margin-top: 22px; font-size: 17px; line-height: 1.65;
          color: #b8b0a6; max-width: 480px;
        }
        .hero-tagrow {
          margin-top: 28px; display: flex; gap: 10px; flex-wrap: wrap;
        }
        .pill {
          display: inline-flex; align-items: center;
          padding: 6px 14px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #f3eee6;
        }
        .hero-ctas { margin-top: 34px; display: flex; gap: 14px; flex-wrap: wrap; }

        /* ── buttons ── */
        .btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 15px 26px; border-radius: 999px;
          font-size: 14px; font-weight: 700; letter-spacing: 0.02em;
          border: 1px solid transparent;
        }
        .btn-wa { background: #25d366; color: #06150c; }
        .btn-outline { border-color: rgba(255,255,255,0.22); color: #f3eee6; }
        .btn-outline:hover { border-color: #00e5ff; color: #00e5ff; }

        /* ── sections ── */
        .section { padding: 88px 0; position: relative; }
        .section-alt { background: #111014; }
        .eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #ff2fb8;
        }
        .section-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.08;
          margin-top: 12px;
          color: #fff;
        }
        .section-text {
          margin-top: 18px; font-size: 16px; line-height: 1.75;
          color: #b8b0a6; max-width: 600px;
        }

        /* ── about ── */
        .about-grid {
          margin-top: 48px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          overflow: hidden;
        }
        .about-card { background: #0a0a0c; padding: 30px 26px; }
        .about-card h3 {
          font-family: Georgia, serif; font-style: italic; font-size: 19px;
          color: #00e5ff; margin-bottom: 8px;
        }
        .about-card p { font-size: 14px; line-height: 1.6; color: #b8b0a6; }

        /* ── menu ── */
        .menu-nav {
          display: flex; gap: 10px; flex-wrap: wrap; margin-top: 44px; margin-bottom: 48px;
        }
        .menu-nav a {
          padding: 9px 16px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          text-transform: uppercase; color: #b8b0a6;
        }
        .menu-nav a:hover { border-color: #ff2fb8; color: #ff2fb8; }

        .menu-group { padding: 40px 0; border-top: 1px solid rgba(255,255,255,0.1); }
        .menu-group:first-of-type { border-top: none; padding-top: 0; }
        .menu-group-title {
          font-family: Georgia, serif; font-style: italic; font-weight: 700;
          font-size: 26px; color: #fff; margin-bottom: 22px;
        }
        .menu-group-title span { color: #ff2fb8; }
        .menu-items { display: grid; grid-template-columns: 1fr; gap: 0; }
        .menu-row {
          display: flex; align-items: baseline; gap: 14px;
          padding: 13px 0;
          border-bottom: 1px dashed rgba(255,255,255,0.12);
        }
        .menu-row:last-child { border-bottom: none; }
        .menu-row-name { font-size: 16px; color: #f3eee6; }
        .menu-row-fill {
          flex: 1; border-bottom: 1px dotted rgba(255,255,255,0.18);
          transform: translateY(-4px);
        }
        .menu-row-price {
          font-weight: 700; font-size: 16px; color: #00e5ff; white-space: nowrap;
        }

        /* ── eventi ── */
        .events-list { margin-top: 44px; display: flex; flex-direction: column; }
        .event-row {
          display: grid; grid-template-columns: 110px 1fr auto;
          align-items: center; gap: 24px;
          padding: 26px 0; border-top: 1px solid rgba(255,255,255,0.1);
        }
        .events-list .event-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.1); }
        .event-day {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #ff2fb8;
        }
        .event-title {
          font-family: Georgia, serif; font-style: italic; font-weight: 700;
          font-size: clamp(18px, 2.4vw, 24px); color: #fff;
        }
        .event-time { font-size: 13px; color: #b8b0a6; white-space: nowrap; }

        /* ── info ── */
        .info-grid {
          margin-top: 44px; display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; overflow: hidden;
        }
        .info-card { background: #111014; padding: 28px 26px; }
        .info-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #00e5ff; margin-bottom: 8px;
        }
        .info-value { font-size: 15px; line-height: 1.7; color: #f3eee6; }

        /* ── prenota ── */
        .book-box {
          margin-top: 44px;
          display: flex; flex-wrap: wrap; align-items: center; gap: 26px;
          padding: 34px; border-radius: 12px;
          border: 1px solid rgba(255,47,184,0.3);
          background: radial-gradient(ellipse 80% 100% at 0% 0%, rgba(255,47,184,0.12), transparent 70%), #111014;
        }
        .book-text { font-size: 14px; color: #b8b0a6; line-height: 1.7; }

        /* ── footer ── */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 30px 0; text-align: center;
          font-size: 12px; color: #6f675e;
        }

        .float-wa {
          position: fixed; bottom: 22px; right: 22px; z-index: 60;
          width: 56px; height: 56px; border-radius: 50%;
          background: #25d366; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 26px rgba(0,0,0,0.5);
        }

        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr; }
          .info-grid { grid-template-columns: 1fr; }
          .event-row { grid-template-columns: 1fr; gap: 8px; }
          .event-time { text-align: left; }
        }
      `}</style>

      {/* ───────── NAV ───────── */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <span className="nav-mark">
            Vintage <span>Chupiteria</span>
          </span>
          <div className="nav-links">
            <a className="nav-link" href="#about">Chi siamo</a>
            <a className="nav-link" href="#menu">Menu</a>
            <a className="nav-link" href="#eventi">Eventi</a>
            <a className="nav-link" href="#info">Info</a>
          </div>
          <a className="nav-cta" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            Prenota
          </a>
        </div>
      </nav>

      {/* ───────── HERO ───────── */}
      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap hero-content">
          <p className="hero-eyebrow">Stradella (PV) — Lombardia</p>
          <h1 className="hero-title">
            Vintage
            <br />
            <em>Chupiteria</em>
          </h1>
          <p className="hero-sub">
            Chupiteria, cocktail bar, ristorante e nightlife sotto lo stesso tetto.
            Shot, drink d&apos;autore e serate che si accendono dopo cena.
          </p>
          <div className="hero-tagrow">
            <span className="pill">Chupiteria</span>
            <span className="pill">Cocktail Bar</span>
            <span className="pill">Ristorante</span>
            <span className="pill">Nightlife</span>
          </div>
          <div className="hero-ctas">
            <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Prenota su WhatsApp
            </a>
            <a className="btn btn-outline" href="#menu">Vedi il menu</a>
          </div>
        </div>
      </header>

      {/* ───────── ABOUT ───────── */}
      <section id="about" className="section">
        <div className="wrap">
          <span className="eyebrow">Chi siamo</span>
          <h2 className="section-title">Tre anime, un solo locale</h2>
          <p className="section-text">
            Vintage Chupiteria nasce a Stradella per unire tre esperienze in una sola
            serata: si parte come chupiteria, si continua come cocktail bar e
            ristorante, si finisce in nightlife. Un format pensato per chi vuole
            cambiare ritmo senza cambiare posto.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Chupiteria</h3>
              <p>Shot e amari serviti veloci, perfetti per aprire la serata in compagnia.</p>
            </div>
            <div className="about-card">
              <h3>Cocktail Bar &amp; Ristorante</h3>
              <p>Drink classici e premium, hamburger e sfizioserie per cena tra amici.</p>
            </div>
            <div className="about-card">
              <h3>Nightlife</h3>
              <p>DJ set e serate a tema che accendono Stradella dal giovedì al sabato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MENU ───────── */}
      <section id="menu" className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Il menu</span>
          <h2 className="section-title">Tutto quello che serviamo</h2>
          <p className="section-text">
            Dagli shot ai drink premium, dall&apos;hamburger alla bottiglia per il
            tavolo: il menu completo di Vintage Chupiteria.
          </p>

          <div className="menu-nav">
            {MENU.map((g) => (
              <a key={g.id} href={`#${g.id}`}>
                {g.title}
              </a>
            ))}
          </div>

          {MENU.map((group) => (
            <div className="menu-group" id={group.id} key={group.id}>
              <h3 className="menu-group-title">
                {group.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span>{group.title.split(" ").slice(-1)}</span>
              </h3>
              <div className="menu-items">
                {group.items.map((item) => (
                  <div className="menu-row" key={item.name}>
                    <span className="menu-row-name">{item.name}</span>
                    <span className="menu-row-fill" aria-hidden="true" />
                    <span className="menu-row-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── EVENTI ───────── */}
      <section id="eventi" className="section">
        <div className="wrap">
          <span className="eyebrow">Nightlife</span>
          <h2 className="section-title">Le serate della settimana</h2>
          <p className="section-text">
            DJ set, shot night e serate a tema: ecco cosa succede da Vintage
            Chupiteria.
          </p>

          <div className="events-list">
            {EVENTS.map((e) => (
              <div className="event-row" key={e.title}>
                <span className="event-day">{e.day}</span>
                <span className="event-title">{e.title}</span>
                <span className="event-time">{e.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── INFO ───────── */}
      <section id="info" className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Info</span>
          <h2 className="section-title">Dove e quando trovarci</h2>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-label">Location</div>
              <div className="info-value">Stradella (PV), Lombardia</div>
            </div>
            <div className="info-card">
              <div className="info-label">Orari</div>
              <div className="info-value">
                Gio–Sab: 21:00 — 03:00
                <br />
                Resto della settimana su richiesta per eventi privati
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PRENOTAZIONI ───────── */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Prenota</span>
          <h2 className="section-title">Stasera si esce a Stradella</h2>
          <p className="section-text">
            Scrivici su WhatsApp per prenotare un tavolo, organizzare una serata di
            gruppo o avere informazioni sui prossimi eventi.
          </p>

          <div className="book-box">
            <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              Scrivici su WhatsApp
            </a>
            <span className="book-text">
              Rispondiamo entro pochi minuti, tutti i giorni dal tardo pomeriggio.
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} Vintage Chupiteria — Stradella (PV)
        </div>
      </footer>

      <a className="float-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Scrivici su WhatsApp">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="#06150c" aria-hidden="true">
          <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}

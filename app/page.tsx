// ──────────────────────────────────────────────
// Configurazione locale — modifica questi valori per ogni cliente
// ──────────────────────────────────────────────
const NAME = "Notte";
const LOCATION = "Milano, Navigli";
const CLAIM = "La notte ha un indirizzo";
const SUBTITLE =
  "Cocktail d'autore, musica selezionata e un'atmosfera che non trovi altrove. Aperti dal mercoledì alla domenica.";
const DESCRIPTION =
  "Notte nasce sui Navigli nel 2019 da un'idea semplice: una serata fuori dovrebbe essere un'esperienza, non un'abitudine. Bancone in ottone, luci basse, una carta cocktail che cambia con le stagioni.";
const WHATSAPP_NUMBER = "393331234567"; // formato internazionale, senza +
const WHATSAPP_MESSAGE = "Ciao! Vorrei prenotare un tavolo da Notte";
const ADDRESS = "Alzaia Naviglio Grande 42, 20144 Milano";
const HOURS = "Mer–Dom 18:00–03:00";

const FEATURES = [
  {
    title: "Cocktail d'autore",
    text: "Carta stagionale firmata dal nostro head bartender.",
  },
  {
    title: "Musica dal vivo",
    text: "DJ set ogni settimana, selezionati per accompagnare la serata.",
  },
  {
    title: "Tavoli riservati",
    text: "Aree lounge su prenotazione per gruppi e occasioni speciali.",
  },
];

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <span className="nav-mark">{NAME}</span>
          <a
            className="nav-cta"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prenota
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <p className="hero-eyebrow">{LOCATION}</p>
          <h1 className="hero-title">{CLAIM}</h1>
          <p className="hero-subtitle">{SUBTITLE}</p>
          <div className="hero-ctas">
            <a
              className="btn btn-whatsapp"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.04 3C9.37 3 3.96 8.38 3.96 15c0 2.22.6 4.3 1.66 6.09L4 29l8.1-2.55a12.1 12.1 0 0 0 3.94.66c6.67 0 12.08-5.38 12.08-12s-5.41-12-12.08-12Zm0 21.8c-1.3 0-2.58-.34-3.7-.99l-.27-.16-4.8 1.51 1.55-4.62-.18-.28a9.7 9.7 0 0 1-1.53-5.26c0-5.4 4.43-9.78 9.93-9.78 5.5 0 9.96 4.39 9.96 9.78 0 5.4-4.46 9.8-9.96 9.8Zm5.46-7.33c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Prenota su WhatsApp
            </a>
            <a className="btn btn-outline" href="#esperienza">
              Scopri di più
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Chi siamo</span>
          <h2 className="section-title">Non un bar. Un&apos;abitudine da scoprire.</h2>
          <p className="section-text">{DESCRIPTION}</p>
        </div>
      </section>

      <section id="esperienza" className="section section-alt">
        <div className="container">
          <span className="eyebrow">L&apos;esperienza</span>
          <h2 className="section-title">Cosa rende {NAME} diverso</h2>
          <div className="features">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Prenota</span>
          <h2 className="section-title">Stasera si esce</h2>
          <p className="section-text">
            Scrivici su WhatsApp per prenotare un tavolo. Rispondiamo entro pochi minuti.
          </p>
          <div className="contact-box">
            <a
              className="btn btn-whatsapp"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrivici ora
            </a>
            <div className="contact-info">
              {ADDRESS}
              <br />
              {HOURS}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {NAME} — {LOCATION}
        </div>
      </footer>
    </>
  );
}

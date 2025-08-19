// src/components/HeaderFooter.jsx
import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import content from "../content/site.de.json";
import MailtoButton from "./MailtoButton";
import { useMenu } from "../context/MenuContext";

/* ----------------------------- Header ----------------------------- */
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMenuOpen, setMenuOpen } = useMenu();
  const dialogRef = useRef(null);

  const sectionIds = ["intro", "hero", "prozess", "leistungen", "kontakt"];
  const [activeSection, setActiveSection] = React.useState(null);

  // 🔐 Scroll Lock bei geöffnetem Menü
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // ⎋ ESC schließt Menü
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [setMenuOpen]);

  // 🔍 ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -30% 0px",
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Navigation zu Anker
  const handleNav = (id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
    setMenuOpen(false);
  };

  const NavLinks = ({ className = "", isMobile = false }) => (
    <nav aria-label="Hauptnavigation" className={className}>
      <ul className={`flex ${isMobile ? "flex-col gap-5" : "md:flex-row items-center gap-8"} text-sm font-medium`}>
        {[
          { id: "prozess-start", label: "Prozess", match: "prozess" },
          { id: "leistungen", label: "Leistungen", match: "leistungen" },
          { id: "kontakt", label: "Kontakt", match: "kontakt" },
        ].map(({ id, label, match }) => (
          <li key={id}>
            <button
              onClick={() => handleNav(id)}
              className={`transition-colors ${
                activeSection === match ? "text-teal-700 font-semibold" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Zur Startseite">
            <div className="h-8 w-8 rounded-lg bg-teal-600" aria-hidden />
            <span className="font-semibold tracking-tight">CompanyExit</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <MailtoButton
              email={content?.contact?.mailto.replace("mailto:", "")}
              label="Nachricht senden"
              tooltip="E-Mail schreiben"
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-sm text-sm"
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen">
              <Menu size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay + Mobile Menü */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />

          {/* Menü-Panel */}
          <aside
            ref={dialogRef}
            className="fixed top-16 right-0 w-[280px] h-[calc(100vh-4rem)] bg-background shadow-xl z-50 transition-transform duration-300 transform translate-x-0 p-6 flex flex-col gap-6 focus:outline-none"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilmenü"
            tabIndex={-1}
          >
            <NavLinks isMobile />
            <MailtoButton
              email={content?.contact?.mailto.replace("mailto:", "")}
              label="Nachricht senden"
              tooltip="E-Mail schreiben"
              className="bg-teal-600 hover:bg-teal-700 text-white w-full justify-center text-sm"
            />
          </aside>
        </>
      )}
    </>
  );
}

/* ----------------------------- Footer ----------------------------- */
export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Zur Startseite">
          <div className="h-8 w-8 rounded-lg bg-teal-600" aria-hidden />
          <div>
            <p className="font-semibold">CompanyExit</p>
            <p className="text-sm text-muted-foreground">Begleitung von Unternehmensübernahmen.</p>
          </div>
        </Link>
        <nav aria-label="Fußnavigation" className="flex items-center gap-6 text-sm">
          <a
            href={content.contact.mailto}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground"
          >
            contact@companyexit.org
          </a>
        </nav>
      </div>
    </footer>
  );
}

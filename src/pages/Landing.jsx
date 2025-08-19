// /app/frontend/src/pages/Landing.jsx
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Check,
  ShieldCheck,
  Gauge,
  Rocket,
  Phone,
  Search,
  FileCheck2,
  Handshake,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import content from "../content/site.de.json";
import MailtoButton from "../components/MailtoButton";
import scrollToId from "../hooks/scrollToId";
import { useMenu } from "../context/MenuContext";

function Icon({ name, className }) {
  const map = { ShieldCheck, Gauge, Rocket };
  const C = map[name] || ShieldCheck;
  return <C className={className} />;
}

export default function Landing() {
  const { intro, hero, features, process, contact, images } = content;
  const { isMenuOpen } = useMenu();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = React.useState(null);

  const scrollToKontakt = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "kontakt" } });
      setTimeout(() => scrollToId("kontakt"), 120);
    } else {
      scrollToId("kontakt");
    }
  };

  React.useEffect(() => {
    let target = null;
    if (location.state?.scrollTo) {
      target = location.state.scrollTo;
    } else if (window.location.hash) {
      target = decodeURIComponent(window.location.hash.slice(1));
    }
    if (target) {
      setTimeout(() => scrollToId(target), 120);
    }
  }, [location.key]);

  React.useEffect(() => {
    const sectionIds = ["intro", "hero", "prozess", "leistungen", "kontakt"];
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

  // Icon-Auswahl je Schritt
  const stepIcon = (n) => {
    switch (n) {
      case 1:
        return Phone;
      case 2:
        return Search;
      case 3:
        return FileCheck2;
      case 4:
      default:
        return Handshake;
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-50 via-white to-white">
      {/* Intro */}
      <section
        id="intro"
        className={`scroll-mt-24 py-20 md:py-28 relative bg-white transition-all duration-700 ease-in-out ${
          isMenuOpen ? "min-h-[100vh]" : ""
        }`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <div
            className="absolute -inset-[15%]"
            style={{
              backgroundImage: `url(${images.pattern})`,
              backgroundSize: "650px",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              filter: "saturate(0.9) contrast(1.05)",
              opacity: 0.35,
              transform: "rotate(10deg) scale(1.15)",
              transformOrigin: "50% 50%",
              willChange: "transform",
            }}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-white/35" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1
            className={`transition-all duration-700 ease-in-out ${
              isMenuOpen ? "translate-y-[65vh] scale-95 opacity-70" : ""
            } text-3xl md:text-6xl font-extrabold tracking-tight text-foreground whitespace-pre-line`}
            style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
          >
            {intro.headline}
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/80">
            {intro.subline}
          </p>
        </div>
      </section>

      <main id="main-content" tabIndex={-1} role="main">
        {/* Hero */}
        <section id="hero" className="scroll-mt-24 pt-8 md:pt-16 pb-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="cursor-default border-teal-100/80 shadow-lg bg-white/80 backdrop-blur-xl">
              <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <Badge className="bg-teal-600/10 text-teal-700 border-teal-200">
                      {hero.badge}
                    </Badge>
                    <h2 className="mt-5 text-2xl md:text-4xl font-extrabold tracking-tight text-foreground">
                      {hero.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                      {hero.subtitle}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <ShieldCheck size={18} /> {hero.qualities[0]}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Gauge size={18} /> {hero.qualities[1]}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Check size={18} /> {hero.qualities[2]}
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-teal-600 text-teal-700 hover:bg-teal-50"
                        onClick={scrollToKontakt}
                      >
                        Kontakt
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Neuer Anker für „Prozess“ */}
        <div id="prozess-start" className="h-px scroll-mt-24" />

        {/* Prozess */}
        <section
          id="prozess"
          className="scroll-mt-24 py-24 relative bg-gradient-to-b from-white to-teal-50/60"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold">{process.title}</h2>

              {/* IntroText statt Subtitle */}
              <div className="mt-6 space-y-6 leading-relaxed text-foreground/90">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {process.introText.h2}
                </h2>
                <p className="text-base md:text-lg">{process.introText.p1}</p>
                <h3 className="text-lg md:text-xl font-semibold">
                  {process.introText.h3}
                </h3>
                <p className="text-base md:text-lg">{process.introText.p2}</p>
              </div>
            </div>

            {/* Cards – stärker, farbig, mobil-optimiert */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(process.steps || []).map((s) => {
                const StepIcon = stepIcon(s.step);
                return (
                  <Card
                    key={s.step}
                    className="group relative border-teal-200 bg-teal-50/70 hover:bg-teal-50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] tracking-wider uppercase text-teal-700/90 bg-teal-600/10 px-2 py-1 rounded">
                          Schritt {s.step}
                        </span>
                        <StepIcon
                          className="h-5 w-5 text-teal-700/70 group-hover:text-teal-800"
                          aria-hidden
                        />
                      </div>
                      <h4 className="mt-3 font-semibold text-base md:text-lg">
                        {s.title}
                      </h4>
                      <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="scroll-mt-24 py-24 relative bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url(${images.pattern})`,
              backgroundSize: "600px",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold">Leistungen</h2>
              <p className="text-muted-foreground mt-2">
                Planbare Schritte und saubere Dokumentation.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card
                  key={f.title}
                  className="group relative overflow-hidden border-teal-100/60"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${images.pattern})`,
                      backgroundSize: "500px",
                      backgroundRepeat: "repeat",
                      filter: "blur(1px)",
                    }}
                  />
                  <CardContent className="p-6 relative z-10">
                    <Icon name={f.icon} className="h-6 w-6 text-teal-700" />
                    <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="scroll-mt-24 py-24 relative bg-teal-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-0 shadow-xl relative">
              <div className="relative p-8 md:p-10 bg-gradient-to-r from-teal-600 via-teal-600 to-emerald-600 text-white">
                <div
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0 opacity-40"
                  style={{
                    backgroundImage: `url(${images.handshake})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(2px)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.2) 0, transparent 50%)",
                  }}
                />
                <div className="relative grid md:grid-cols-2 gap-6 items-center z-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {contact.heading}
                    </h3>
                    <p className="mt-2 text-white/90">{contact.text}</p>
                  </div>
                  <div className="flex md:justify-end">
                    <MailtoButton
                      email={content.contact.mailto.replace("mailto:", "")}
                      label="Nachricht senden"
                      tooltip="E-Mail schreiben"
                      className="text-base font-semibold"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

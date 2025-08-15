export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold">CompanyExit</a>
        <nav className="space-x-6 text-sm">
          <a href="#prozess">Prozess</a>
          <a href="/unternehmensuebernahme">Leistungen</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </nav>
        <a href="#kontakt" className="rounded-lg px-3 py-2 bg-primary text-white text-sm">Nachricht senden</a>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-primary" />
          <div>
            <div className="font-medium">CompanyExit</div>
            <div>Begleitung von Unternehmensübernahmen.</div>
          </div>
        </div>
        <div className="mt-4 flex gap-6">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <div className="mt-6 text-xs">&copy; 2025 CompanyExit. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}

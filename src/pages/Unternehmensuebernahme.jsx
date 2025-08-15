export default function Unternehmensuebernahme() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Begleitung bei Unternehmensübernahmen</h1>
      <p className="mt-2 text-slate-600">Planbare Schritte und saubere Dokumentation.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {["Transaktionsvorbereitung","Bewertung und Analyse","Geordnete Ansprache"].map((t,i)=>(
          <div key={i} className="card p-6">
            <div className="font-medium">{t}</div>
            <p className="mt-1 text-sm text-slate-600">Platzhaltertext.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

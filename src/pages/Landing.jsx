export default function Landing() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-5xl font-extrabold leading-tight">
            Sie wollen raus aus der Krise –<br />wir zeigen Ihnen den Weg.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Begleitung zu einer geordneten Lösung – diskret, rechtssicher und menschlich.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="card p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500">Unternehmensübernahme</div>
          <h2 className="mt-2 text-3xl font-bold">Begleitung bei Unternehmensübernahmen</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Sachliche Beratung und strukturierte Umsetzung – von der Vorbereitung bis zum Abschluss.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <span>• Diskret</span><span>• Strukturiert</span><span>• Verlässlich</span>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="/unternehmensuebernahme" className="rounded-lg px-3 py-2 border">Leistungen</a>
            <a href="#kontakt" className="rounded-lg px-3 py-2 bg-primary text-white">Nachricht senden</a>
          </div>
        </div>
      </section>

      <section id="prozess" className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-2xl font-semibold">Prozess</h3>
        <p className="text-slate-600">Ablauf in fünf Schritten.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {["Analyse und Zielbild","Aufbereitung","Ansprache","Prüfung und Verhandlung","Abschluss"].map((t,i)=>(
            <div key={i} className="card p-4">
              <div className="text-xs uppercase text-slate-500">Schritt {i+1}</div>
              <div className="mt-1 font-medium">{t}</div>
              <p className="mt-1 text-sm text-slate-600">Kurzbeschreibung als Platzhalter.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12" id="kontakt">
        <div className="card p-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Kontakt</h3>
            <p className="text-slate-600">Wenn Sie eine Frage haben, schreiben Sie uns eine kurze Nachricht.</p>
          </div>
          <a href="mailto:info@example.com" className="rounded-lg px-4 py-2 bg-primary text-white">Nachricht senden</a>
        </div>
      </section>
    </div>
  );
}

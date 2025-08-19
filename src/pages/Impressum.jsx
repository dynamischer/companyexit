// src/pages/Impressum.jsx
import React from "react";

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Impressum</h1>
      <p className="mt-4 text-muted-foreground">Die nachstehenden Angaben dienen der Anbieterkennzeichnung.</p>

      <section className="mt-8 space-y-1 text-sm">
        <p>Unternehmen: Musterfirma GmbH</p>
        <p>Vertretungsberechtigte Person: Max Mustermann</p>
        <p>Straße und Hausnummer: Musterstraße 1</p>
        <p>PLZ und Ort: 10115 Berlin</p>
        <p>Kontakt: (wird nachgereicht)</p>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold">Haftung für Inhalte</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte wird keine Gewähr übernommen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold">Urheberrecht</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der Zustimmung der Rechteinhaber.
        </p>
      </section>
    </div>
  );
}

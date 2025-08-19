// src/pages/Unternehmensuebernahme.jsx
import React from "react";
import { Button } from "../components/ui/button";
import content from "../content/site.de.json";

export default function Unternehmensuebernahme() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <section>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Wenn alles ausweglos scheint –
          <br className="hidden md:block" />
          Sie sind nicht allein.
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Viele Unternehmer:innen kämpfen mit Überschuldung, Liquiditätsproblemen oder drohender Insolvenz. Oft fehlen
            Zeit, Ressourcen oder Know-how, um einen Ausweg zu finden.
          </p>
          <p>
            Hinzu kommt die emotionale Belastung – Scham, Druck, Unsicherheit.
            <br className="hidden md:block" />
            Die gute Nachricht: Es gibt Lösungen, ohne Insolvenz.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
          <a href={content.contact.mailto}>Nachricht senden</a>
        </Button>
      </section>
    </div>
  );
}

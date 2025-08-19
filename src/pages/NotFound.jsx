// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-4 text-muted-foreground">Die angeforderte Seite konnte nicht gefunden werden.</p>
      <div className="mt-8 flex items-center gap-3">
        <Button asChild variant="outline"><Link to="/">Zur Startseite</Link></Button>
        <a href="#kontakt" className="text-teal-700 hover:underline">Kontakt</a>
      </div>
    </div>
  );
}

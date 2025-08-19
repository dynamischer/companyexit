// src/App.jsx
import { useEffect } from "react";
import "./index.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import NotFound from "./pages/NotFound.jsx";
import Unternehmensuebernahme from "./pages/Unternehmensuebernahme.jsx";

import { Header, Footer } from "./components/HeaderFooter";
import { Toaster } from "./components/ui/toaster";

// Vite: Env-Var heißt VITE_*
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;

export default function App() {
  useEffect(() => {
    async function ping() {
      if (!API) return;
      try {
        await axios.get(`${API}/`);
      } catch {
        // static mode – ok
      }
    }
    ping();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" tabIndex={-1} role="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/unternehmensuebernahme" element={<Unternehmensuebernahme />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

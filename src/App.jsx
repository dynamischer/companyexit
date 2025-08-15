import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/ui/Header.jsx";
import Footer from "./components/ui/Footer.jsx";
import Landing from "./pages/Landing.jsx";
import Unternehmensuebernahme from "./pages/Unternehmensuebernahme.jsx";
import Impressum from "./pages/Impressum.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/unternehmensuebernahme" element={<Unternehmensuebernahme />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

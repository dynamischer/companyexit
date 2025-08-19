// src/components/ui/toaster.jsx
// Wir verwenden "sonner" und exportieren einen NAMED export "Toaster",
// so wie er in App.jsx importiert wird.

import { Toaster as SonnerToaster } from "sonner";

export function Toaster(props) {
  // sinnvolle Defaults; kannst du später anpassen
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      expand
      duration={4000}
      {...props}
    />
  );
}

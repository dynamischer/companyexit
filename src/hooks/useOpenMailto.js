// src/hooks/useOpenMailto.js
export default function useOpenMailto(
  email = "contact@companyexit.org",
  subject = "",
  body = ""
) {
  return (e) => {
    if (e) e.preventDefault();

    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const win = window.open(mailto, "_blank", "noopener,noreferrer");

    if (!win) {
      navigator.clipboard.writeText(email);
      alert(
        "Das E-Mail-Programm konnte nicht automatisch geöffnet werden.\n" +
          "Die E-Mail-Adresse wurde in deine Zwischenablage kopiert:\n\n" +
          email
      );
    }
  };
}

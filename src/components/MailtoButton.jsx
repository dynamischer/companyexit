// src/components/MailtoButton.jsx
import React from "react";
import { MdEmail } from "react-icons/md"; // npm install react-icons
import useOpenMailto from "../hooks/useOpenMailto";

export default function MailtoButton({
  email = "contact@companyexit.org",
  subject = "",
  body = "",
  label = "Nachricht senden",
  showIcon = true,
  tooltip = "E-Mail senden",
  className = "",
}) {
  // erweitern: subject + body an Hook übergeben
  const handleClick = useOpenMailto(email, subject, body);

  return (
    <button
      onClick={handleClick}
      title={tooltip}
      className={`mailto-button ${className}`}
      type="button"
      aria-label={tooltip}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.6rem 1.2rem",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#ffffff",
        color: "#065f46",
        fontWeight: 600,
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.2s ease-in-out",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f1f5f9")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
    >
      {showIcon && <MdEmail size={20} />}
      <span>{label}</span>
    </button>
  );
}

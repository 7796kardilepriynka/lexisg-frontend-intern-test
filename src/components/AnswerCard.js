import React from "react";

export default function AnswerCard({ answer, citation, onCitationClick }) {
  return (
    <div style={{ padding: "20px", marginTop: "20px", borderTop: "1px solid #ccc" }}>
      <h3>Answer</h3>
      <p>{answer}</p>

      <h4>Citation</h4>
      <p style={{ fontStyle: "italic" }}>{citation.text}</p>
      <button onClick={onCitationClick}>
        View Source PDF
      </button>
    </div>
  );
}

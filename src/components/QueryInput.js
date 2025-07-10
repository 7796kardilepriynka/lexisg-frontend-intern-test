import React, { useState } from "react";

export default function QueryInput({ onSubmit, loading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (query.trim()) onSubmit(query);
  };

  return (
    <div style={{ padding: "20px" }}>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={5}
        placeholder="Ask your legal question..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
}

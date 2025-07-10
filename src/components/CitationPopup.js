import React, { useState } from "react";
import QueryInput from "./components/QueryInput";
import AnswerCard from "./components/AnswerCard";
import CitationPopup from "./components/CitationPopup";

function App() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [citation, setCitation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleQuerySubmit = (query) => {
    setLoading(true);

    setTimeout(() => {
      const response = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7)",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };

      setAnswer(response.answer);
      setCitation(response.citations[0]);
      setLoading(false);
    }, 1000);
  };

  const handleCitationClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="App" style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>Lexi Legal Assistant</h1>

      <QueryInput onSubmit={handleQuerySubmit} loading={loading} />

      {answer && citation && (
        <AnswerCard
          answer={answer}
          citation={citation}
          onCitationClick={handleCitationClick}
        />
      )}

      {showPopup && citation && (
        <CitationPopup
          pdfLink={citation.link}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default App;

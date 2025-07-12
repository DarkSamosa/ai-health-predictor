import React, { useEffect, useState } from "react";

function Results() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const savedResults = localStorage.getItem("predictionResults");
    if (savedResults) {
      setPredictions(JSON.parse(savedResults));
    }
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", lineHeight: "1.6" }}>
      <h1>Prediction Results</h1>
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ If you have high-risk predictions, please consult your local doctor.
      </p>
      {predictions.length === 0 ? (
        <p>No prediction data found.</p>
      ) : (
        predictions.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <p><strong>Person ID:</strong> {item.Person_ID}</p>
            {Object.entries(item).map(([key, value]) => {
              if (key !== "Person_ID") {
                return (
                  <p key={key}><strong>{key}:</strong> {value}</p>
                );
              }
              return null;
            })}
          </div>
        ))
      )}
    </div>
  );
}

export default Results;

import React from "react";

function Results() {
  // You can move this array to state or props later if dynamic
  const predictions = [
    {
      disease: "Testicular cancer",
      risk: "49%",
      advice: "Perform regular self-examinations and schedule annual check-ups."
    },
    {
      disease: "Bipolar disorder",
      risk: "69%",
      advice: "Consult a mental health professional and maintain a consistent routine."
    },
    {
      disease: "Coronary artery disease",
      risk: "32%",
      advice: "Follow a heart-healthy diet, exercise regularly, and avoid smoking."
    },
    {
      disease: "Type 2 diabetes",
      risk: "57%",
      advice: "Monitor your blood sugar and maintain a balanced diet low in refined sugars."
    }
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", lineHeight: "1.6" }}>
      <h1>Prediction Results</h1>
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ If you have high-risk predictions, please consult your local doctor.
      </p>
      {predictions.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        >
          <p>
            <strong>{item.risk} risk of {item.disease}</strong>
          </p>
          <p><em>Preventive Measure:</em> {item.advice}</p>
        </div>
      ))}
    </div>
  );
}

export default Results;

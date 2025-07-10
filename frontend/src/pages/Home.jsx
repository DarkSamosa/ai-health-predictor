import React from "react";
import { useNavigate } from "react-router-dom";
import dnaStrandImage from "../assets/dna_strand.png";

function Home() {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/src/assets/dna-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "6rem 1rem",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          AI Health Predictor
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Your AI-powered companion to predict health risks from your DNA and
          family history.
        </p>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2>Why Choose Us?</h2>
        <ul style={{ textAlign: "left", marginTop: "1rem" }}>
          <li>
            Early detection of chronic and mental health conditions before
            symptoms appear.
          </li>
          <li>
            Personalized recommendations tailored to your unique genetic makeup.
          </li>
          <li>Secure, encrypted handling of your sensitive health data.</li>
          <li>
            Accessible predictive healthcare designed for everyone, including
            underserved communities.
          </li>
          <li>
            Powered by cutting-edge AI models (XGBoost, neural networks, NLP)
            and trusted scientific SNP databases.
          </li>
        </ul>
      </div>

      {/* Illustrative Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem 1rem",
          backgroundColor: "#f6fbfd",
        }}
      >
        <div style={{ flex: "1 1 300px", maxWidth: "450px" }}>
          <h2>How It Works</h2>
          <p>
            Upload your DNA report and family history. Our AI analyzes over
            600,000 genetic markers to give you early warnings and actionable
            recommendations for your health.
          </p>
        </div>
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src={dnaStrandImage}
            alt="DNA Strand"
            style={{ maxWidth: "200px" }}
          />
        </div>
      </div>

      {/* Predict Button Section */}
      <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
  <button
    onClick={handlePredictClick}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "1rem 2rem",
      fontSize: "1.1rem",
      backgroundColor: "#008080",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    <img
      src={dnaStrandImage}
      alt="DNA Icon"
      style={{ width: "24px", height: "24px" }}
    />
    Predict your diseases!
  </button>
</div>
<div style={{ textAlign: "center", padding: "1rem", fontStyle: "italic" }}>
  <p>Your data is 100% encrypted and never shared without your consent.</p>
</div>

    </>
  );
}

export default Home;

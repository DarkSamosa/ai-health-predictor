import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/dna-background.png";
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
          background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "8rem 1rem",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          AI Health Predictor
        </h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto" }}>
          Predict your health risks with cutting-edge AI powered by your unique DNA.
        </p>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          textAlign: "center",
          padding: "4rem 1rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2>Why Choose Us?</h2>
        <ul style={{ textAlign: "left", marginTop: "1.5rem", fontSize: "1.1rem" }}>
          <li>Early detection of chronic and mental health conditions before symptoms appear.</li>
          <li>Personalized recommendations tailored to your unique genetic makeup.</li>
          <li>Secure, encrypted handling of your sensitive health data.</li>
          <li>Accessible predictive healthcare for everyone, including underserved communities.</li>
          <li>Powered by cutting-edge AI models and trusted scientific SNP databases.</li>
        </ul>
      </div>

      {/* How It Works */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "3rem 1rem",
          backgroundColor: "#f0faff",
        }}
      >
        <div style={{ flex: "1 1 300px", maxWidth: "450px" }}>
          <h2>How It Works</h2>
          <p style={{ fontSize: "1.1rem" }}>
            Upload your DNA report and family history. Our AI analyzes over 600,000 genetic markers to give you early warnings and personalized health recommendations.
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
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#006666")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#008080")}
        >
          <img
            src={dnaStrandImage}
            alt="DNA Icon"
            style={{ width: "24px", height: "24px" }}
          />
          Predict your diseases!
        </button>
      </div>

      {/* Info Below Button */}
      <div style={{ textAlign: "center", padding: "1rem", fontStyle: "italic" }}>
        <p>Your data is 100% encrypted and never shared without your consent.</p>
      </div>
    </>
  );
}

export default Home;

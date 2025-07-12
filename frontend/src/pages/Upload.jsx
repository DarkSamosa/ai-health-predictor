import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({
    father: "",
    mother: "",
    paternalGrandfather: "",
    paternalGrandmother: "",
    maternalGrandfather: "",
    maternalGrandmother: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName("No file chosen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("file", fileInputRef.current.files[0]);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("predictionResults", JSON.stringify(data));
        navigate("/results");
      } else {
        alert("Prediction failed: " + data.error);
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Prediction failed due to network error.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "3rem auto",
        backgroundColor: "#f0faff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#004d66",
          marginBottom: "1.5rem",
        }}
      >
        Upload DNA Report
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
      >
        <label style={{ fontWeight: "500" }}>
          DNA Report (CSV or Excel)
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "0.4rem",
            }}
          >
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              style={{
                padding: "0.6rem 1rem",
                backgroundColor: "#008080",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Choose File
            </button>
            <span style={{ fontSize: "0.95rem", color: "#333" }}>
              {selectedFileName}
            </span>
          </div>
          <input
            type="file"
            accept=".csv,.xlsx"
            ref={fileInputRef}
            onChange={handleFileChange}
            required
            style={{ display: "none" }}
          />
        </label>

        {["father", "mother", "paternalGrandfather", "paternalGrandmother", "maternalGrandfather", "maternalGrandmother"].map(
          (name) => (
            <label key={name} style={{ fontWeight: "500" }}>
              {name.replace(/([A-Z])/g, " $1").replace(/^\w/, (c) => c.toUpperCase())}
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={name}
                required={name === "father" || name === "mother"}
                style={{
                  marginTop: "0.4rem",
                  padding: "0.6rem",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
              />
            </label>
          )
        )}

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "0.9rem",
            fontSize: "1rem",
            backgroundColor: "#008080",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#006666")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#008080")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Upload;
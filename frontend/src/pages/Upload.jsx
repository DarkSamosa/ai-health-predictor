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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results");
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
          DNA Report (CSV or PDF)
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
            accept=".csv,.pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            required
            style={{ display: "none" }}
          />
        </label>

        {[
          { name: "father", label: "Father's Disease History" },
          { name: "mother", label: "Mother's Disease History" },
          { name: "paternalGrandfather", label: "Paternal Grandfather (optional)" },
          { name: "paternalGrandmother", label: "Paternal Grandmother (optional)" },
          { name: "maternalGrandfather", label: "Maternal Grandfather (optional)" },
          { name: "maternalGrandmother", label: "Maternal Grandmother (optional)" },
        ].map(({ name, label }) => (
          <label key={name} style={{ fontWeight: "500" }}>
            {label}
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={label}
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
        ))}

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

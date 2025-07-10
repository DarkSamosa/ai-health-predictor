import React from "react";
import teamImage from "../assets/team_photo.jpg";

function Contact() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "3rem auto",
        backgroundColor: "#f0faff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#004d66", marginBottom: "1rem" }}>
        Contact Us
      </h1>

      <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
        Team Silverhands
      </h2>

      <img
        src={teamImage}
        alt="Team Silverhands"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      />

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "1rem 0",
          fontSize: "1.1rem",
          color: "#333",
        }}
      >
        <li>Shaurya Jain</li>
        <li>Satyam Trivedi</li>
        <li>Mehak Gupta</li>
        <li>Oje Verma</li>
      </ul>

      <p
        style={{
          marginTop: "1rem",
          color: "#555",
        }}
      >
      (Students from NIT Raipur)
      </p>
    </div>
  );
}

export default Contact;

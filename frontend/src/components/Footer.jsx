import React from "react";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#004d66",
      color: "#fff",
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem"
    }}>
      <p>Thank you for visiting AI Health Predictor – a project by Team Silverhands.</p>
      <p>
        <a
          href="https://www.linkedin.com/in/shaurya-jain-73836832b/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00bfff", textDecoration: "none" }}
        >
          Connect with Shaurya Jain on LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;

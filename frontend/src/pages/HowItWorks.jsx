import React from "react";

function HowItWorks() {
  return (
    <div className="page-container">
      <h1>How It Works</h1>
      <p>
        Welcome to your AI-Powered Predictive Health Companion! Here’s how our platform transforms your DNA and family health data into actionable, personalized health insights.
      </p>

      <h2>Step 1: Secure Data Collection</h2>
      <ul>
        <li><strong>Upload Your DNA Report:</strong> Provide your raw genetic data from a commercial DNA testing service (like 23andMe) or a certified laboratory.</li>
        <li><strong>Share Family Medical History:</strong> Enter details about your parents’ and grandparents’ health, including chronic diseases, lifestyle factors (smoking, diet, exercise), and any existing medical conditions.</li>
      </ul>

      <h2>Step 2: Advanced AI Analysis</h2>
      <ul>
        <li><strong>Genetic Interpretation:</strong> Our system analyzes over 600,000 genetic markers (SNPs) from your DNA to identify variations linked to health risks.</li>
        <li><strong>Family Pattern Recognition:</strong> We combine your genetic data with your family’s medical history to uncover inherited risk patterns.</li>
        <li><strong>Machine Learning Models:</strong> Using advanced algorithms (like XGBoost and neural networks), we calculate your personalized risk probabilities for chronic illnesses and mental health conditions.</li>
      </ul>

      <h2>Step 3: Personalized Risk Profile</h2>
      <ul>
        <li><strong>Comprehensive Health Report:</strong> Receive a clear, visual summary of your risk levels for various diseases and mental health conditions.</li>
        <li><strong>Early Warnings:</strong> Get notified about potential health risks before symptoms appear, enabling proactive care.</li>
        <li><strong>Mental Health Insights:</strong> Our AI examines neural pathway-linked SNPs and inherited psychiatric markers to provide early mental health indicators.</li>
      </ul>

      <h2>Step 4: Intelligent Recommendations</h2>
      <ul>
        <li><strong>Tailored Advice:</strong> Based on your unique profile, receive personalized recommendations for lifestyle, diet, exercise, and mental wellness.</li>
        <li><strong>Actionable Plans:</strong> Get suggestions for preventive screenings, therapies, and daily habits proven effective for users with similar profiles.</li>
        <li><strong>Continuous Learning:</strong> Our system adapts and improves its recommendations over time as more data is collected.</li>
      </ul>

      <h2>Step 5: Privacy & Accessibility</h2>
      <ul>
        <li><strong>Data Security:</strong> Your genetic and health information is encrypted and never shared without your consent.</li>
        <li><strong>Accessible to All:</strong> Designed to be affordable and user-friendly, making predictive healthcare available to everyone, including rural and underserved communities.</li>
      </ul>

      <h2>Why It Matters</h2>
      <ul>
        <li><strong>Prevention First:</strong> Move from symptom-based treatment to proactive, genetics-driven prevention.</li>
        <li><strong>Empowerment:</strong> Understand your inherited health risks and take control of your future.</li>
        <li><strong>Social Impact:</strong> Help break the chain of silent, inherited diseases and reduce stigma around mental health.</li>
      </ul>

      <p style={{ marginTop: "1.5rem", fontStyle: "italic" }}>
        Experience a new era of healthcare—where your unique genetic story guides smarter, healthier choices for you and your family.
      </p>
    </div>
  );
}

export default HowItWorks;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  } as React.CSSProperties,
  card: {
    background: "#fff",
    borderRadius: "1.25rem",
    boxShadow: "0 10px 32px rgba(16,185,129,0.18)",
    padding: "2.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    width: "100%",
    border: "1px solid #6ee7b7",
  } as React.CSSProperties,
  iconCircle: {
    marginBottom: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "#d1fae5",
    border: "4px solid #34d399",
    boxShadow: "0 2px 6px #a7f3d0",
  } as React.CSSProperties,
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#065f46",
    marginBottom: 8,
    animation: "fadeIn 0.9s cubic-bezier(.4,0,.2,1)",
  } as React.CSSProperties,
  subtitle: {
    color: "#047857",
    marginBottom: 2,
    fontWeight: 600,
  } as React.CSSProperties,
  text: {
    color: "#4b5563",
    marginBottom: 18,
    animation: "pulse 1.5s infinite alternate",
  } as React.CSSProperties,
  progress: {
    height: 8,
    width: 128,
    background: "#a7f3d0",
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 8,
  } as React.CSSProperties,
  progressBar: {
    height: "100%",
    background: "#10b981",
    width: "0%",
    animation: "progressBar 3s linear forwards",
  } as React.CSSProperties,
  // Keyframes as global styles
  keyframes: `
    @keyframes progressBar {
      0% { width: 0; }
      100% { width: 100%; }
    }
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(-16px);}
      100% { opacity: 1; transform: translateY(0);}
    }
    @keyframes pulse {
      0% { opacity: 1; }
      100% { opacity: 0.65; }
    }
  `,
};

const Appointment: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/patient-info"); // Go back to form
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <style>{styles.keyframes}</style>
      <div style={styles.card}>
        <div style={styles.iconCircle}>
          <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2.5" fill="#fff" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12l2.5 2.5L16 9" />
          </svg>
        </div>
        <h2 style={styles.title}>Appointment Confirmed</h2>
        <p style={styles.subtitle}>Thank you!</p>
        <p style={styles.text}>Returning to patient form in 3 seconds...</p>
        <div style={styles.progress}>
          <div style={styles.progressBar}></div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
export {}; 
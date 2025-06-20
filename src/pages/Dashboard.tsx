/*import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/patient-info")}>
        Go to Patient Info
      </button>
    </div>
  );
};

export default Dashboard;
export{};*/
import React from "react";
import { useNavigate } from "react-router-dom";

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f0fdfa 0%, #a7f3d0 100%)",
    textAlign: "center",
    padding: "1rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#065f46",
    marginBottom: "2rem",
    letterSpacing: "0.5px",
  },
  button: {
    padding: "0.75rem 2rem",
    background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "1rem",
    letterSpacing: "0.5px",
    cursor: "pointer",
    transition: "background 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 14px rgba(16,185,129,0.12)",
  },
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard</h2>
      <button onClick={() => navigate("/patient-info")} style={styles.button}>
        Go to Patient Info
      </button>
    </div>
  );
};

export default Dashboard;
export {};
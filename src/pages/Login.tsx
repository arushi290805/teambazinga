/*import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="User ID" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={() => navigate("/dashboard")}>Login</button>
    </div>
  );
};

export default Login;
export{};*/
// Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0fdfa 0%, #a7f3d0 100%)",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "1rem",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 360,
    padding: "2rem",
    borderRadius: "1.5rem",
    background: "rgba(255, 255, 255, 0.85)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: "1.5rem",
    color: "#065f46",
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "0.5px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "2.5rem",
    marginBottom: "1rem",
    padding: "0 1rem",
    fontSize: "1rem",
    border: "1px solid #cbd5e1",
    borderRadius: "0.75rem",
    background: "#f0fdfa",
    outline: "none",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "2.75rem",
    marginTop: "0.5rem",
    background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
    border: "none",
    borderRadius: "0.75rem",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(16,185,129,0.12)",
    transition: "transform 0.2s",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Login</h2>
        <input
          type="text"
          placeholder="User ID"
          style={inputStyle}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />
        <br />
        <button
          style={buttonStyle}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
export {};
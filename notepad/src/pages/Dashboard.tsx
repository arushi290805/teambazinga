import React from "react";
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
export{};
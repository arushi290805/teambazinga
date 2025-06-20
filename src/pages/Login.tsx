import React from "react";
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
export{};
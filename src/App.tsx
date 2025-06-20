import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PatientInfo from "./pages/PatientInfo";
import DoctorPage from "./pages/DoctorPage";
import Appointment from "./pages/Appointment";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/patient-info" element={<PatientInfo />} />
    <Route path="/doctor" element={<DoctorPage />} />
    <Route path="/appointment" element={<Appointment />} />
  </Routes>
);

export default App;
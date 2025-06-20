import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorPage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const navigate = useNavigate();

  const doctors = [
    "Dr. Smith – Cardiology",
    "Dr. Jane – Neurology",
    "Dr. Kim – Pediatrics",
  ];

  const handleConfirm = () => {
    if (selectedDoctor) {
      navigate("/appointment");
    } else {
      alert("Please select a doctor.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Select a Doctor</h2>
      {doctors.map((doc) => (
        <label key={doc} className="block mb-2">
          <input
            type="radio"
            name="doctor"
            value={doc}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="mr-2"
          />
          {doc}
        </label>
      ))}
      <button
        onClick={handleConfirm}
        className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded"
      >
        Confirm
      </button>
    </div>
  );
};

export default DoctorPage;
export {};
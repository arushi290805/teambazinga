/*import React, { useState } from "react";
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
export {};*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh", // Full page gradient
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0fdfa 0%, #a7f3d0 100%)",
    textAlign: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "1.25rem",
    boxShadow: "0 10px 32px rgba(16,185,129,0.18)",
    padding: "2.5rem 2rem",
    maxWidth: 400,
    width: "100%",
    border: "1px solid #6ee7b7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#065f46",
    marginBottom: "1.25rem",
    letterSpacing: "0.5px",
  },
  doctorList: {
    width: "100%",
    marginBottom: "1.5rem",
  },
  doctorOption: {
    display: "flex",
    alignItems: "center",
    background: "#f0fdfa",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    marginBottom: "0.75rem",
    cursor: "pointer",
    transition: "box-shadow 0.2s, border 0.2s",
    border: "1.5px solid transparent",
  },
  doctorOptionSelected: {
    border: "1.5px solid #10b981",
    boxShadow: "0 0 0 2px #6ee7b7",
    background: "#a7f3d0",
  },
  radio: {
    accentColor: "#10b981",
    marginRight: 12,
    width: 18,
    height: 18,
  },
  button: {
    marginTop: "1rem",
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

const DoctorPage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const navigate = useNavigate();

  const doctors = [
    "Dr. Smith – Cardiology",
    "Dr. Jane – Neurology",
    "Dr. Kim – Pediatrics",
    "Dr. Patel – Dermatology",
    "Dr. Singh – Orthopedics",
    "Dr. Bose – Gastroenterology",
    "Dr. Mehra – Endocrinology",
    "Dr. Rao – Psychiatry",
    "Dr. Desai – Oncology",
    "Dr. Ghosh – Pulmonology",
  ];

  const handleConfirm = () => {
    if (selectedDoctor) {
      navigate("/appointment");
    } else {
      alert("Please select a doctor.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Select a Doctor</h2>
        <div style={styles.doctorList}>
          {doctors.map((doc) => (
            <label
              key={doc}
              style={{
                ...styles.doctorOption,
                ...(selectedDoctor === doc ? styles.doctorOptionSelected : {}),
              }}
            >
              <input
                type="radio"
                name="doctor"
                value={doc}
                checked={selectedDoctor === doc}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                style={styles.radio}
              />
              <span>{doc}</span>
            </label>
          ))}
        </div>
        <button onClick={handleConfirm} style={styles.button}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DoctorPage;
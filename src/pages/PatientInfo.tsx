import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }
}

type Form = {
  name: string;
  age: string;
  gender: string;
  contactNumber: string;
  symptoms: string;
  medication: string;
};

const allowedGenders = ["male", "female", "others"];

const PatientInfo: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Form>({
    name: "",
    age: "",
    gender: "",
    contactNumber: "",
    symptoms: "",
    medication: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>(
    {}
  );
  const [isConfirming, setIsConfirming] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
        .charAt(0)
        .toUpperCase()
        .concat(value.slice(1).replace(/\.+$/, "")),
    }));
  };

  const startListening = (field: keyof Form) => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return alert("SpeechRecognition not supported.");

    const recog = new SR();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onresult = (ev: SpeechRecognitionEvent) => {
      let transcript = ev.results[0][0].transcript
        .trim()
        .replace(/\.+$/, "");
      if (field === "gender") {
        if (/mail/i.test(transcript)) transcript = "Male";
        else if (/femail|femal/i.test(transcript)) transcript = "Female";
        else if (/other/i.test(transcript)) transcript = "Others";
      }
      if (field === "age" || field === "contactNumber") {
        transcript = transcript.replace(/\D/g, "");
      }
      setFormData((prev) => ({
        ...prev,
        [field]: transcript.charAt(0).toUpperCase() + transcript.slice(1),
      }));
    };

    recog.onerror = () => recog.stop();
    recog.start();
  };

  const validateForm = (): Partial<Record<keyof Form, string>> => {
    const errs: Partial<Record<keyof Form, string>> = {};
    const ageNum = Number(formData.age);
    if (!formData.age.trim()) errs.age = "Age is required.";
    else if (isNaN(ageNum) || ageNum <= 0) errs.age = "Age must be > 0.";
    if (!allowedGenders.includes(formData.gender.toLowerCase()))
      errs.gender = "Gender must be Male, Female, or Others.";
    if (!/^\d{9,10}$/.test(formData.contactNumber))
      errs.contactNumber = "Contact number must be 9 or 10 digits.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setIsConfirming(false);
      return;
    }
    setErrors({});
    setIsConfirming(true);
  };
  const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.REACT_APP_API_URL;


  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setIsConfirming(false);
      return;
    }
    try {
      const res = await fetch(`${baseURL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      alert("Patient info submitted!");
      setFormData({
        name: "",
        age: "",
        gender: "",
        contactNumber: "",
        symptoms: "",
        medication: "",
      });
      navigate("/doctor");
    } catch {
      alert("Failed to submit patient info.");
    }
    setIsConfirming(false);
  };

  // ---- Styles ----
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    background: "linear-gradient(135deg, #f0fdfa, #a7f3d0, #d9f99d)",
    fontFamily: "Segoe UI, sans-serif",
  };
  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 600,
    padding: "2rem",
    borderRadius: "1.75rem",
    background: "rgba(255,255,255,0.8)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    backdropFilter: "blur(12px)",
  };
  const headingStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#065f46",
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "1.5rem",
  };
  const inputWrapper: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    borderRadius: "0.75rem",
    overflow: "hidden",
    border: "1px solid #ccc",
    marginBottom: "1rem",
    background: "rgba(255,255,255,0.6)",
  };
  const inputStyle: React.CSSProperties = {
    flex: 1,
    height: "2.75rem",
    padding: "0 1rem",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    background: "transparent",
  };
  const micButton: React.CSSProperties = {
    width: "2.75rem",
    height: "2.75rem",
    background: "#ecfdf5",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const errorStyle: React.CSSProperties = {
    color: "#dc2626",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
    marginLeft: "0.5rem",
  };
  const confirmNoteStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#047857",
    fontWeight: 600,
    gap: "0.5rem",
    marginBottom: "1rem",
  };
  const submitStyle: React.CSSProperties = {
    width: "100%",
    height: "3rem",
    background: "linear-gradient(90deg, #10b981, #059669)",
    border: "none",
    borderRadius: "0.75rem",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(16,185,129,0.12)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>CLINI-CAL</h1>

        {isConfirming && (
          <div style={confirmNoteStyle}>
            <span>✔</span>
            Please confirm the details below
          </div>
        )}

        <form onSubmit={isConfirming ? handleConfirm : handleSubmit}>
          {(Object.keys(formData) as Array<keyof Form>).map((field) => (
            <div key={field}>
              <div
                style={{
                  ...inputWrapper,
                  borderColor: errors[field] ? "#dc2626" : "#ccc",
                }}
              >
                <input
                  type="text"
                  name={field}
                  placeholder={
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isConfirming}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => startListening(field)}
                  disabled={isConfirming}
                  style={micButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{ width: 20, height: 20, fill: "#047857" }}
                  >
                    <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" />
                  </svg>
                </button>
              </div>
              {errors[field] && <div style={errorStyle}>{errors[field]}</div>}
            </div>
          ))}

          <button type="submit" style={submitStyle}>
            {isConfirming ? "CONFIRM" : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientInfo;
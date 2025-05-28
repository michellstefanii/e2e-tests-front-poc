import React, { useState, CSSProperties, FormEvent } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const allcontainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    background: "#f0f2f5",
  };

  const containerStyle: CSSProperties = {
    background: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle: CSSProperties = {
    marginBottom: "1rem",
    color: "#333",
    textAlign: "center",
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle: CSSProperties = {
    width: "100%",
    padding: "0.5rem",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const footerStyle: CSSProperties = {
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#666",
  };

  const successMessageStyle: CSSProperties = {
    marginTop: "1rem",
    textAlign: "center",
    color: "green",
    fontSize: "0.9rem",
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <div style={allcontainerStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        </form>
        <div style={footerStyle}>Fake Auth Page</div>
        {showMessage && (
          <p id="success-message" style={successMessageStyle}>
            Login successful (fake!)
          </p>
        )}
      </div>
    </div>
  );
}

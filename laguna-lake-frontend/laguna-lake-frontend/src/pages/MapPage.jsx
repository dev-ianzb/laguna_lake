import React from "react";
import { useNavigate } from "react-router-dom";
import LagunaMap from "../components/LagunaMap";

function MapPage() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <button
        className="btn btn-secondary"
        style={{
          position: "absolute",
          top: "10px",
          left: "50px",
          zIndex: 1000,
        }}
        onClick={() => navigate("/")}
      >
        Back
      </button>

      <LagunaMap />
    </div>
  );
}

export default MapPage;

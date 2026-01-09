import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

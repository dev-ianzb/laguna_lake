import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LagunaMap() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stations")
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, []);

  return (
    <MapContainer
      center={[14.25, 121.33]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((station) => (
        <Marker key={station.id} position={station.coordinates}>
          <Popup className="glass-popup">
            <div className="container-fluid p-2">
              <h5 className="fw-bold mb-2 text-primary">{station.name}</h5>

              <ul className="list-unstyled mb-0 small">
                <li className="d-flex justify-content-between">
                  <span>DO</span>
                  <span>{station.parameters.DO} mg/L</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>pH</span>
                  <span>{station.parameters.pH}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>BOD</span>
                  <span>{station.parameters.BOD} mg/L</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>COD</span>
                  <span>{station.parameters.COD} mg/L</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Turbidity</span>
                  <span>{station.parameters.Turbidity}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Temp</span>
                  <span>{station.parameters.Temperature} °C</span>
                </li>
              </ul>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LagunaMap;

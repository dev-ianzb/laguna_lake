import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WaterQualityCharts from "../components/WaterQualityCharts";

function LandingPage() {
  const lakeImageRef = useRef(null);
  const mapImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (lakeImageRef.current) observer.observe(lakeImageRef.current);
    if (mapImageRef.current) observer.observe(mapImageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="d-flex align-items-center text-center text-white"
        style={{
          height: "100vh",
          backgroundImage: "url('/images/Laguna_de_Bay_2020.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        <div className="container position-relative">
          <h1 className="display-3 fw-semibold">Laguna Lake</h1>
          <p className="lead fs-4 mb-4">The Largest Lake In The Philippines</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              <strong>Laguna de Bay</strong>, commonly known as Laguna Lake, is
              the largest lake in the Philippines and one of the country’s most
              important freshwater resources. Located southeast of Metro Manila
              between the provinces of Laguna and Rizal, the lake supports
              millions of people through fisheries, agriculture, and domestic
              water use.
            </p>

            <p>
              Despite its economic and environmental significance, Laguna Lake
              faces challenges such as pollution, population pressure, and
              overfishing. These concerns highlight the importance of continuous
              water quality monitoring, as the lake’s condition directly affects
              surrounding communities and ecosystems.
            </p>
          </div>

          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              ref={lakeImageRef}
              src="/images/laguna-lake.jpg"
              alt="Laguna Lake Philippines"
              className="img-fluid rounded shadow fade-in-image"
              style={{ maxHeight: "370px" }}
            />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                ref={mapImageRef}
                src="/images/philippines-map-png.webp"
                alt="Map of the Philippines"
                className="img-fluid rounded fade-in-image"
                style={{ maxHeight: "350px" }}
              />
            </div>

            <div className="col-md-6 text-center text-md-start">
              <h2 className="display-5">Laguna Lake Water Quality</h2>

              <p className="lead">
                Visualizing environmental data from multiple monitoring stations
                based on LLDA standards.
              </p>

              <p>
                Laguna Lake water quality monitoring is important because the
                lake supports millions of people through water supply,
                fisheries, and flood control. Visualizing data from multiple
                LLDA monitoring stations helps identify pollution trends, assess
                environmental health, and support sustainable lake management
                using recognized national standards.
              </p>

              <Link to="/map" className="btn btn-primary btn-lg mt-3">
                View Interactive Map
              </Link>
            </div>
          </div>
        </div>
      </div>

      <WaterQualityCharts />

      <div className="container text-center mb-4">
        <small className="text-muted">
          Data shown are simulated for academic purposes it is based on LLDA
          historical reports and DENR water quality standards.
        </small>
      </div>
    </>
  );
}

export default LandingPage;

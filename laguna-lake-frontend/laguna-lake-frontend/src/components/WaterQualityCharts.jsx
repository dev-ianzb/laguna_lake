import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const chartColors = {
  DO: "rgba(13, 110, 253, 0.7)",
  pH: "rgba(25, 135, 84, 0.7)",
  BOD: "rgba(220, 53, 69, 0.7)",
  COD: "rgba(255, 193, 7, 0.7)",
  Turbidity: "rgba(108, 117, 125, 0.7)",
  Temperature: "rgba(255, 99, 132, 0.8)",
};

function WaterQualityCharts() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stations")
      .then((res) => res.json())
      .then((data) => setStations(data));
  }, []);

  const labels = stations.map((s) => s.name);

  const createBarDataset = (label, key) => ({
    labels,
    datasets: [
      {
        label,
        data: stations.map((s) => s.parameters[key]),
        backgroundColor: chartColors[key],
        borderColor: chartColors[key].replace("0.7", "1"),
        borderWidth: 1,
      },
    ],
  });

  const temperatureDataset = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: stations.map((s) => s.parameters.Temperature),
        borderColor: chartColors.Temperature,
        backgroundColor: chartColors.Temperature,
        tension: 0.3,
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
          padding: 10,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 20,
          callback: function (value) {
            const label = this.getLabelForValue(value);
            return label.length > 15 ? label.substr(0, 15) + "…" : label;
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Water Quality Overview (All Stations)
      </h2>

      <div className="row g-4">
        <div className="col-md-6" style={{ height: "350px" }}>
          <Bar
            data={createBarDataset("Dissolved Oxygen (mg/L)", "DO")}
            options={chartOptions}
          />
        </div>

        <div className="col-md-6" style={{ height: "350px" }}>
          <Bar
            data={createBarDataset("pH Level", "pH")}
            options={chartOptions}
          />
        </div>

        <div className="col-md-6" style={{ height: "350px" }}>
          <Bar
            data={createBarDataset("Biochemical Oxygen Demand (mg/L)", "BOD")}
            options={chartOptions}
          />
        </div>

        <div className="col-md-6" style={{ height: "350px" }}>
          <Bar
            data={createBarDataset("Chemical Oxygen Demand (mg/L)", "COD")}
            options={chartOptions}
          />
        </div>

        <div className="col-md-6" style={{ height: "350px" }}>
          <Bar
            data={createBarDataset("Turbidity (NTU)", "Turbidity")}
            options={chartOptions}
          />
        </div>

        <div className="col-md-6" style={{ height: "350px" }}>
          <Line data={temperatureDataset} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default WaterQualityCharts;

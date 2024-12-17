import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ data }) {
  return (
    <Line
      data={{
        labels: data.map((item) => item.month),
        datasets: [
          {
            label: "Total Users",
            data: data.map((item) => item.totalUsers),
            borderColor: "#35B9E9",
            backgroundColor: "#35B9E9",
          },
          {
            label: "Active Users",
            data: data.map((item) => item.activeUsers),
            borderColor: '#6E3FF3',
            backgroundColor: "#6E3FF3",
          },
        ],
      }}
    />
  );
}
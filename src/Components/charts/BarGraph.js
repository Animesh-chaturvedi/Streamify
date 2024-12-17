import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarGraph({ data }) {
  return (
    <Bar
      data={{
        labels: data.map((item) => item.song),
        datasets: [
          {
            label: "Stream Count",
            data: data.map((item) => item.streams),
            backgroundColor: "#35B9E9",
          },
        ],
      }}
    />
  );
}
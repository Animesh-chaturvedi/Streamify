import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";

function generateBlueShades(count) {
    const baseBlue = [72, 149, 247]; 
    const shades = [];
    const hoverShades = [];
    for (let i = 0; i < count; i++) {
      const factor = 1 - i / (count + 1);
      const color = `rgba(${baseBlue[0]}, ${baseBlue[1]}, ${baseBlue[2]}, ${factor})`;
      const hoverFactor = Math.max(0.3, factor - 0.15); // Ensure it's darker but not too transparent
      shades.push(color);
      hoverShades.push(`rgba(${baseBlue[0]}, ${baseBlue[1]}, ${baseBlue[2]}, ${hoverFactor})`);
    }
    return {shades, hoverShades};
  }

export default function PieChart({ data }) {
  const { shades, hoverShades } = useMemo(() => generateBlueShades(data.length),[data.length]); 
  return (

      <Pie
        data={{
          labels: data.map((item) => item.source),
          datasets: [
            {
              data: data.map((item) => item.value),
              backgroundColor: shades,
              hoverBackgroundColor: hoverShades,
              borderColor: "#fff",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
  );
}
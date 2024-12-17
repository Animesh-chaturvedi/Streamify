import React from 'react';
import { Chart as ChartJS } from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';

function ChartComponent({ chartData, chartType }) {
  // Function to dynamically render the appropriate chart type
  const renderChart = () => {
    const ChartComponent = {
      'line': Line,
      'pie': Pie,
      'bar': Bar
    }[chartType];

    if (!ChartComponent) {
      return <p>No valid chart type provided</p>;
    }

    return <ChartComponent data={chartData} options={{ maintainAspectRatio: false }} />;
  };

  return (
    <div>
      {renderChart()}
    </div>
  );
}

export default ChartComponent;

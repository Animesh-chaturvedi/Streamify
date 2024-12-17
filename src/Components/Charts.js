import React from 'react';
import ChartComponent from './ChartComponent';

function Charts() {
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{ label: 'Monthly Sales', data: [65, 59, 80, 81, 56, 55], fill: false, borderColor: 'rgb(75, 192, 192)', tension: 0.1 }]
      };
    
      const pieData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{ data: [300, 50, 100], backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'] }]
      };
    
      const barData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{ label: 'Quarterly Revenue', data: [200, 300, 400, 500], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }]
      };

  return (
    <div>
      <h2>Line Graph</h2>
      <ChartComponent chartData={lineData} chartType="line" />

      <h2>Pie Chart</h2>
      <ChartComponent chartData={pieData} chartType="pie" />

      <h2>Bar Graph</h2>
      <ChartComponent chartData={barData} chartType="bar" />
    </div>
  );
}

export default Charts;

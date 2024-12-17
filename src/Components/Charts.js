import React, {useState, useEffect} from 'react';
import ChartComponent from './ChartComponent';

function Charts() {

  const [chartsData, setChartsData] = useState([])

  useEffect(() => {
    fetch("/api/charts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setChartsData(data.charts)})
      .catch(error => console.error('Error fetching users:', error));
  },[])

  return (
    <div>
      {
        chartsData.map((chart, index) => {
          return (
            <div key={index}>
              <h2>{chart.type}</h2>
              <ChartComponent chartData={chart.chartData} chartType={chart.type} />
            </div>
          )
        })
      }
    </div>
  );
}

export default Charts;

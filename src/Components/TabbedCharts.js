import React, { Suspense, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { DataContext } from "./context/DataContext";
import LineChart from "./charts/LineChart";
const PieChart = React.lazy(() => import("./charts/PieChart"));
const BarGraph = React.lazy(() => import("./charts/BarGraph"));

export default function TabsComponent() {
  const { userGrowth, revenue, topSongs,  } = useContext(DataContext);

  return (
    <div className="tabs-container">
    <Tabs defaultActiveKey="user-growth" id="charts-tabs">
      <Tab eventKey="user-growth" title="User Growth">
        <div className="tab-chart-container">
          <LineChart data={userGrowth} />
        </div>
      </Tab>
      <Tab eventKey="revenue-distribution" title="Revenue Distribution">
        <div className="tab-chart-container">
        <Suspense fallback={<div>Loading...</div>}>
          <PieChart data={revenue} />
        </Suspense>
        </div>
      </Tab>
      <Tab eventKey="top-songs" title="Top Songs">
        <div className="tab-chart-container">
        <Suspense fallback={<div>Loading...</div>}>
          <BarGraph data={topSongs} />
        </Suspense>
        </div>
      </Tab>
    </Tabs>
  </div>

  );
}

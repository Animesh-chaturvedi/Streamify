import React, { useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { DataContext } from "./context/DataContext";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import BarGraph from "./charts/BarGraph";
// import StreamTable from "./Table";

export default function TabsComponent() {
  const { userGrowth, revenue, topSongs,  } = useContext(DataContext);

  return (
    <div className="tabs-container">
    <Tabs defaultActiveKey="user-growth" id="charts-tabs" className="h-100">
      <Tab eventKey="user-growth" title="User Growth">
        <div className="tab-chart-container">
          <LineChart data={userGrowth} />
        </div>
      </Tab>
      <Tab eventKey="revenue-distribution" title="Revenue Distribution">
        <div className="tab-chart-container">
          <PieChart data={revenue} />
        </div>
      </Tab>
      <Tab eventKey="top-songs" title="Top Songs">
        <div className="tab-chart-container">
          <BarGraph data={topSongs} />
        </div>
      </Tab>
    </Tabs>
  </div>

  );
}

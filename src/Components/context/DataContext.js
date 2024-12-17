import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [metrics, setMetrics] = useState({});
  const [userGrowth, setUserGrowth] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [recentStreams, setRecentStreams] = useState([]);

  useEffect(() => {
    fetch("/api/metrics").then((res) => res.json()).then((data) => setMetrics(data));
    fetch("/api/user-growth").then((res) => res.json()).then(setUserGrowth);
    fetch("/api/revenue-distribution").then((res) => res.json()).then(setRevenue);
    fetch("/api/top-streamed-songs").then((res) => res.json()).then(setTopSongs);
    fetch("/api/recent-streams").then((res) => res.json()).then(setRecentStreams);
  }, []);

  return (
    <DataContext.Provider value={{ metrics, userGrowth, revenue, topSongs, recentStreams }}>
      {children}
    </DataContext.Provider>
  );
};

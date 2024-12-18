import React, { useState, useEffect, useContext, useCallback } from "react";
import { Table, Form, InputGroup, Button } from "react-bootstrap";
import { DataContext } from "./context/DataContext";
import { debounce } from "../utils";

const StreamTable = React.memo(function StreamTable() {
  const {recentStreams} = useContext(DataContext)
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(recentStreams);
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "asc" }); // Sorting config

 
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    setFilteredData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  const filterData = useCallback(
    debounce((text) => {
      const filtered = recentStreams.filter(
        (item) =>
          item.song.toLowerCase().includes(text.toLowerCase()) ||
          item.artist.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }, 300),
    [recentStreams, filter]
  );

  useEffect(() => {
    filterData(filter);
  }, [filter, filterData]);

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? (
        <i className="bi bi-chevron-up ms-1"></i>
      ) : (
        <i className="bi bi-chevron-down ms-1"></i>
      );
    }
    return <i className="bi bi-chevron-expand ms-1"></i>; // Unsorted state
  };


  return (
    <div className="transaction-table-container p-4 shadow-sm bg-white rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="table-heading">
          <h5 className="fw-bold mb-0">Recent Streams</h5>
          <small className="text-muted">Recent streams in the table below.</small>
        </div>
        <div className="d-flex align-items-center gap-2">
          <InputGroup size="sm">
            <Form.Control
              placeholder="Search by Song or Artist"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              // className="border-start-0"
            />
          </InputGroup>
          <Button variant="outline-secondary" className="text-nowrap" size="sm">
            See All
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table hover responsive className="mb-0">
        <thead className="table-light">
          <tr>
            <th onClick={() => handleSort("song")} style={{ cursor: "pointer" }}>
              Song Name {getSortIndicator("song")}
            </th>
            <th onClick={() => handleSort("artist")} style={{ cursor: "pointer" }}>
              Artist {getSortIndicator("artist")}
            </th>
            <th onClick={() => handleSort("date")} style={{ cursor: "pointer" }}>
              Date Streamed {getSortIndicator("date")}
            </th>
            <th onClick={() => handleSort("streams")} style={{ cursor: "pointer" }}>
              Stream Count {getSortIndicator("streams")}
            </th>
            <th>User ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <tr key={idx}>
                <td className="fw-bold text-muted">{item.song}</td>
                <td className="text-muted">{item.artist}</td>
                <td className="text-muted">{item.date}</td>
                <td className="text-muted">{item.streams}</td>
                <td className="text-muted">{item.user}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
})

export default StreamTable;

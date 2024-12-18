import React, { useState, useEffect, useContext, useMemo } from "react";
import { Table, Form, InputGroup, Button } from "react-bootstrap";
import { DataContext } from "../context/DataContext";
import { debounce } from "../../utils";
import "./StreamTable.css";

const StreamTable = React.memo(function StreamTable() {
  const { recentStreams } = useContext(DataContext);
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "asc" });
  const [filteredData, setFilteredData] = useState(recentStreams);

  // Debounced filtering
  const filterData = debounce((text) => {
    const filtered = recentStreams.filter(
      (item) =>
        item.song.toLowerCase().includes(text.toLowerCase()) ||
        item.artist.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  }, 300);
  
  useEffect(() => {
    filterData(filter);
  }, [filter, recentStreams, filterData]);

  // Sorting logic with useMemo
  const sortedData = useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

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
      <div className="row align-items-center mb-3 g-3">
        <div className="col-12 col-lg-6">
          <div className="table-heading">
            <h3 className="fw-bold mb-0 table-title">Recent Streams</h3>
            <div className="text-muted">Recent streams in the table below.</div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-lg-end gap-2">
          <InputGroup size="md" className="w-100 w-lg-auto py-2">
            <Form.Control
              placeholder="Search by Song or Artist"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control"
            />
          </InputGroup>
          <Button
            variant="outline-secondary"
            className="text-nowrap"
            size="md"
            onClick={() => setFilter("")}
          >
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
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((item, idx) => (
              <tr key={idx}>
                <td className="fw-bold text-muted">{item.song}</td>
                <td className="text-muted py-3">{item.artist}</td>
                <td className="text-muted py-3">{item.date}</td>
                <td className="text-muted py-3">{item.streams}</td>
                <td className="text-muted py-3">{item.user}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
});

export default StreamTable;


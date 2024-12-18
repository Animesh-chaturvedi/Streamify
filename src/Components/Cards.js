import React, {useContext} from 'react';
import { DataContext } from "./context/DataContext";
import { Card } from 'react-bootstrap';
import "./Cards.css"

function Cards() {

const {metrics} = useContext(DataContext)

const iconMap = {
  totalUsers: "bi-people",
  activeUsers: "bi-person-check",
  totalStreams: "bi-music-note-beamed",
  revenue: "bi-cash-stack",
  topArtist: "bi-star",
};

  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-3">
    {Object.entries(metrics).map(([key, value], idx) => (
      <Card key={idx} className="custom-card shadow-sm border-0">
        <Card.Body className="card-body d-flex align-items-center gap-3 justify-content-center">
          <div className="icon-circle d-flex align-items-center justify-content-center">
            <i className={`bi ${iconMap[key]}`} aria-hidden="true"></i>
          </div>
          <div>
            <div className="card-title">
              {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
            </div>
            <div className="card-value">
              {key === "revenue" ? "$" : ""}
              {value || "-"}
            </div>
          </div>
        </Card.Body>
      </Card>
    ))}
  </div>
  );
}

export default Cards;
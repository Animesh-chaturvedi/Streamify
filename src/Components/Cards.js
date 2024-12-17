import React, {useContext} from 'react';
// import Card from './Card';
import { DataContext } from "./context/DataContext";
import { Card } from 'react-bootstrap';

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
    // <div className="container mt-5">
    //   <div className="row">
    //     {Object.entries(metrics) && Object.entries(metrics).map((entry, index) => (
    //       <div className="col-sm-12 col-md" key={index}>
    //          <Card title={entry} text={metrics[entry]} imageUrl={entry.imageUrl} />
    //       </div>
    //     ))}
    //   </div>
    // </div> 
    <div className="d-flex flex-wrap justify-content-center gap-3">
            {Object.entries(metrics).map(([key, value], idx) => (
              <Card
                key={idx}
                className="custom-card shadow-sm border-0"
                style={{
                  minWidth: "250px",
                  maxWidth: "300px",
                  flexBasis: "30%",
                }}
              >
                <Card.Body className="d-flex align-items-center gap-3">
                  <div className="icon-circle d-flex align-items-center justify-content-center">
                    <i className={`bi ${iconMap[key]}`} style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <div>
                    <div className="card-title text-muted" style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                      {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
                    </div>
                    <div className="card-value fw-bold" style={{ fontSize: "1.5rem", color: "#4895F7" }}>
                      {key === "revenue" ? "$" :""}{value || "-"}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
  );
}

export default Cards;
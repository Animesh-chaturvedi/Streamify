import React from 'react';

function Card({ title, text, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl ? imageUrl :""} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;

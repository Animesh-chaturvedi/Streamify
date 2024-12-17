import React from 'react';
import Card from './Card';

function Cards() {
  const cards = [
    { title: "Card 1", text: "This is Card One", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 2", text: "This is Card Two", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 3", text: "This is Card Three", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 4", text: "This is Card Four", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 5", text: "This is Card Five", imageUrl: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-sm-12 col-md" key={index}>
            <Card title={card.title} text={card.text} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
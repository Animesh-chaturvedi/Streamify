import React, {useEffect, useState} from 'react';
import Card from './Card';

function Cards() {

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("/api/cards")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCardsData(data.cards)})
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    console.log(cardsData,"usersSHere")
  },[cardsData])

  return (
    <div className="container mt-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-sm-12 col-md" key={index}>
             <Card title={card.name} text={card.value} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
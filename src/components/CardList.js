import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return (
          <Card 
            id={robots[i].id} 
            name={robots[i].name} 
            username={robots[i].username} 
            email={robots[i].email} 
            key={i}
          />
        )
      })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;
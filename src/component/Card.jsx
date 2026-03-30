import React, { use } from "react";
import CardStore from "./CardStore";
 

const Card = ({ getDataPromise, carts, setCarts }) => {
  const cards = use(getDataPromise);

 
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 p-3 gap-6">
      {cards.map((card, id) => (
        <div key={id}>
          <CardStore card={card} carts={carts} setCarts={setCarts} />
        </div>
      ))}
    </div>
  );
};

export default Card;

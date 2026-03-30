import { useState } from "react";

const CardStore = ({ card, carts, setCarts}) => {

     
 const [isBought, setIsBought] = useState(false);

 const handleBuyButton = () => {

    setIsBought(true)
    setCarts([...carts,card])
 }

  return (
    <div>
    
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md group transform transition-all  duration-300 hover:-translate-y-2">
        <div className="flex justify-between items-center mb-6">
          <div className="p-3 bg-purple-50 rounded-2xl">
            <img src={card.img} alt="" className="w-8 h-8 object-contain" />
          </div>
          <span className="px-3 py-1 text-xs font-bold text-purple-600 bg-purple-100 rounded-full">
            {card.tag}
          </span>
        </div>

        <div className="space-y-2 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{card.name}</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl font-black text-gray-900">
            ${card.price}
            <span className="text-sm font-medium text-gray-400">
              /{card.period}
            </span>
          </h2>
        </div>

        <ul className="space-y-3 mb-8">
          {card.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-gray-600 gap-2"
            >
              <span className="text-purple-500 font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <button onClick={handleBuyButton} disabled={isBought} className=" w-full py-3 bg-purple-400 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors">
         {isBought ? 'Purchase Done' : 'Buy Now'}
           
        </button>
      </div>
    </div>
  );
};

export default CardStore;

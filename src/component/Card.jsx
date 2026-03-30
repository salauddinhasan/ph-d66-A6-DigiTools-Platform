import React, { use } from "react";

const Card = ({ getDataPromise }) => {
  const cards = use(getDataPromise);

  return (
    <div>
      {/* title */}
      <div className="text-center py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Premium Digital Tools
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
      </div>

      {/* tab button */}
      <div className="tabs justify-center tabs-box bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab  w-30 rounded-full bg-purple-600 text-white font-semibold text-base"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-30 rounded-full text-gray-500 font-semibold text-base"
          aria-label="Cart(0)"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {cards.map((card, id) => (
          <div key={id}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-purple-50 rounded-2xl">
                  <img
                    src={card.img}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="px-3 py-1 text-xs font-bold text-purple-600 bg-purple-100 rounded-full">
                  {card.tag}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {card.name}
                </h2>
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

              <button className="w-full py-3 bg-purple-400 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

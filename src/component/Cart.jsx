import React from "react";
import Tab from "./Tab";

const Cart = ({ carts, setCarts}) => {
    const handlePayment = () => {
        setCarts([])
    }

    const handleDelete =(cart) => {
        const filterArray = carts.filter(c => c.id !== cart.id)
         setCarts(filterArray)
    }
   
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 px-2">
          Your Cart
        </h2>

        <div className="space-y-4">
          {carts.map((cart, id) => (
            <div
              key={id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white p-2 rounded-xl border border-gray-200">
                  <img
                    src={cart.img}
                    alt={cart.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cart.name}</h3>
                  <p className="text-purple-600 font-semibold text-sm">
                    ${cart.price}
                  </p>
                </div>
              </div>

              <button onClick={() => handleDelete(cart)} className="text-sm font-medium text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-all">
                Remove
              </button>
            </div>
          ))}

          {carts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-400 text-3xl">Your cart is empty!</p>
            </div>
          )}
        </div>

        {carts.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex flex-col gap-4 mb-6 px-2">
              <div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Total Price:
                </h2>
                <h2 className="text-2xl font-black text-purple-600">
                  ${carts.reduce((total, item) => total + item.price, 0)}
                </h2>
              </div>
            </div>

            <div className="px-2">
              <button onClick={handlePayment} className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-purple-600 hover:shadow-xl active:scale-[0.98] transition-all duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

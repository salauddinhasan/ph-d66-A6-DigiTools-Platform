import { Suspense, useState } from "react";
import "./App.css";
import Card from "./component/Card";
import CounterSection from "./component/CounterSection";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Ready from "./component/Ready";
import SimplePricing from "./component/SimplePricing";
import Started from "./component/Started";
import Cart from "./component/Cart";
import Tab from "./component/Tab";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const getDataPromise = getData();
  const [isActiveTab, setIsActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <div>
      <Navbar carts={carts}/>
      <Hero />
      <CounterSection />/
      <Tab />
      {/* tab button */}
      <div className="tabs justify-center tabs-box bg-transparent pb-10 gap-4">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-30 rounded-full font-semibold text-base transition-all ${
            isActiveTab === "Products"
              ? "bg-purple-600 text-white"
              : "text-gray-500 bg-gray-100"
          }`}
          aria-label="Products"
          defaultChecked
          onClick={() => setIsActiveTab("Products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-30 rounded-full font-semibold text-base transition-all ${
            isActiveTab === "Cart"
              ? "bg-purple-600 text-white"
              : "text-gray-500 bg-gray-100"
          }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setIsActiveTab("Cart")}
        />
      </div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        {isActiveTab === "Products" && (
          <Card
            getDataPromise={getDataPromise}
            carts={carts}
            setCarts={setCarts}
          />
        )}
      </Suspense>
      {isActiveTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}
      <Started />
      <SimplePricing />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;

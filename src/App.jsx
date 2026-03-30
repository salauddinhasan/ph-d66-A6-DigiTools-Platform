import { Suspense } from "react";
import "./App.css";
import Card from "./component/Card";
import CounterSection from "./component/CounterSection";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Ready from "./component/Ready";
import SimplePricing from "./component/SimplePricing";
import Started from "./component/Started";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const getDataPromise = getData();

  return (
    <div>
      <Navbar />
      <Hero />
      <CounterSection />/

      
      <Suspense fallback={<p>salauddin loading....</p>}>
        <Card getDataPromise={getDataPromise} />
      </Suspense>


      <Started />
      <SimplePricing />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;

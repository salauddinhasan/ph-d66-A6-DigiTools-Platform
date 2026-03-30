import "./App.css";
import CounterSection from "./component/CounterSection";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import SimplePricing from "./component/SimplePricing";
import Started from "./component/Started";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CounterSection/>/
      <Started/>
      <SimplePricing/>


    </div>
  );
}

export default App;

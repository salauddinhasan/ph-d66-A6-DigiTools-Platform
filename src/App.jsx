import "./App.css";
import CounterSection from "./component/CounterSection";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Ready from "./component/Ready";
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
      <Ready/>
      <Footer/>

    </div>
  );
}

export default App;

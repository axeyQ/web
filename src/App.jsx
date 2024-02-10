import { useEffect } from "react";
import "./App.css";
import Featured1 from "./Components/Featured/Featured1";
import Hero3 from "./Components/Hero Section/Hero3";
import Navbar from "./Components/Navbar";
import OrderDetails1 from "./Components/Order/OrderDetails1";
import Purpose1 from "./Components/Purpose Section/Purpose1";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother = ScrollSmoother.create({
      content: ".app",
      smooth: 3,
      effects: true,
    });
    smoother.effects("hero-3-img", { speed: "auto" });
  });
  useEffect(() => {
    // lenis smoothener starts here
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // lenis smoothener ends here
  });

  return (
    <div className='app'>
      <Navbar />
      <Hero3 />
      <Purpose1 />
      <Featured1 />
      <OrderDetails1 />
    </div>
  );
}

export default App;

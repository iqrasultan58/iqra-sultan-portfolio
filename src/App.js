
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "animate.css";
import Skills from "./Components/Skills";
import StickyCursor from "./Components/StickyCursor";
import Lenis from "lenis";
import { useEffect } from "react";
import { initGA, logPageView } from "./Components/Analytics";
import { useLocation } from "react-router-dom";

function App() {
  // Initialize Lenis
  const lenis = new Lenis();

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    initGA("G-9VFRTKFSWB"); // Replace with your Tracking ID
  }, []);

  const TrackPageView = () => {
    const location = useLocation();
    useEffect(() => {
      logPageView(location.pathname);
    }, [location]);

    return null;
  };

  return (
    <>
      <TrackPageView />
      <div>
        <StickyCursor />
        <Header />
        <Home id="home" title="Home" />
        <About id="about" title="About" />
        <Skills />
        <Resume id="resume" title="Resume" />
        {/* <Portfolio id="portfolio" title="Portfolio" /> */}
        <Contact id="contact" title="Contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;

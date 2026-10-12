import { useRef } from "react";
import heroImage from "../assets/but.webp";

function Hero() {

  const heroRef = useRef(null);
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {

    const hero = heroRef.current;
    const bg = bgRef.current;

    const rect = hero.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    bg.style.transform =
      `translate(${-x * 45}px, ${-y * 45}px) scale(1.12)`;
  };


  const handleMouseLeave = () => {

    bgRef.current.style.transform =
      "translate(0,0) scale(1.12)";

  };


  return (
    <header
      className="hero text-center"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

     
     <div
  className="hero-bg"
  ref={bgRef}
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
></div>



      <div className="hero-overlay">

        <div className="container">

          <h1 className="display-4 fw-bold">
            Crafted Around You
          </h1>

          <p className="lead">
            Welcome to the ATAFO bespoke consultation.
            <br />
            Complete the details below to begin your tailoring journey.
          </p>

        </div>

      </div>

    </header>
  );
}

export default Hero;
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function About({ Template }) {
  const aboutRef = useRef(null);
  const [key, setKey] = useState(0); // Forces re-animation when route changes
  const location = useLocation(); // Track route changes

  useEffect(() => {
    setKey((prev) => prev + 1); // Update key to force reanimation
  }, [location.pathname]); // Reset animation when route changes

  useEffect(() => {
    const element = aboutRef.current;

    // Ensure opacity is set to 1 immediately
    gsap.set(element, { opacity: 1 });

    // GSAP Animation
    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset", // Ensure replay when scrolling back
        },
      }
    );

    // Fix for React Router navigation: Refresh ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      animation.kill(); // Cleanup animation
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove old triggers
    };
  }, [key]); // Re-run animation when `key` updates

  return (
    <section ref={aboutRef} className="content-padding">
      <Template
        number="01"
        title="About"
        children="Fullstack dev who loves artistic combination of code and design. I centralize in the development and design of webpages. Currently a student of Federal University of Petroleum Resources studying marine engineering."
      />
    </section>
  );
}

export default About;

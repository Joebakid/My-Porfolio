import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function CoreTechnology({ Template }) {
  const techRef = useRef(null);
  const [key, setKey] = useState(0); // Forces re-animation when route changes
  const location = useLocation(); // Track route changes

  useEffect(() => {
    setKey((prev) => prev + 1); // Update key to force reanimation
  }, [location.pathname]); // Reset animation when route changes

  useEffect(() => {
    const element = techRef.current;

    // Ensure opacity is set to 1 immediately
    gsap.set(element, { opacity: 1 });

    // GSAP Animation
    const animation = gsap.fromTo(
      ".technology-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reset",
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

  const technologies = [
    "HTML5",
    "CSS",
    "JAVASCRIPT",
    "TAILWIND CSS",
    "NEXT.JS",
    "REACT",
    "TYPESCRIPT",
    'GSAP',
    'FRAMER-MOTION'
  ];

  return (
    <section className="content-padding" ref={techRef}>
      <Template number="02" title="Core Technology">
        <div className="technology-list">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-item">
              <span className="line"></span>
              <span className="text">{tech}</span>
            </div>
          ))}
        </div>
      </Template>
    </section>
  );
}

export default CoreTechnology;

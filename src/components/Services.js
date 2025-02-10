import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Services({ Template }) {
  const servicesRef = useRef(null);
  const [key, setKey] = useState(0);
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    setKey((prev) => prev + 1); // Refresh animation on route change
  }, [location.pathname]);

  useEffect(() => {
    const element = servicesRef.current;
    gsap.set(".ag-courses_item", { opacity: 1 }); // Ensure opacity is always set

    // GSAP Animation
    const animation = gsap.fromTo(
      ".ag-courses_item",
      { opacity: 0, y: 40, scale: 0.95 }, // Initial state
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, // Items appear one after another
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      }
    );

    ScrollTrigger.refresh(); // Refresh animations for route changes

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup
    };
  }, [key]);

  return (
    <section className="content-padding" ref={servicesRef}>
      <Template number="05" title="Services" />
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {[
            { title: "TECHNICAL WRITING" },
            { title: "UX/UI Web-Design" },
            { title: "BLOCKCHAIN TECH" },
            { title: "WEBSITE DEVELOPMENT" },
          ].map((service, index) => (
            <div className="ag-courses_item" key={index}>
              <p className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{service.title}</div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services({ Template }) {
  const servicesRef = useRef([]);

  useEffect(() => {
    servicesRef.current.forEach((service, index) => {
      gsap.fromTo(
        service,
        { opacity: 1, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup
    };
  }, []);

  return (
    <section className="content-padding">
      <Template number="05" title="Services" />
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {[
            { title: "TECHNICAL WRITING" },
            { title: "UX/UI Web-Design" },
            { title: "BLOCKCHAIN TECH" },
            { title: "WEBSITE DEVELOPMENT" },
          ].map((service, index) => (
            <div
              className="ag-courses_item"
              key={index}
              ref={(el) => (servicesRef.current[index] = el)}
            >
              <p className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{service.title}</div>
                {/* <div className="ag-courses-item_date-box">
                  Start:{" "}
                  <span className="ag-courses-item_date">04.11.2022</span>
                </div> */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

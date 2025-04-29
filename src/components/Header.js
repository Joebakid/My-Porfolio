import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Header({ BtnMain, BtnPrimary }) {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section ref={headerRef} className="content-padding">
      <div className="content">
        <h2 className="text-shadows">hey</h2>
      </div>
      <h1> I'm Joseph Bawo</h1>
      <h3 className="gray-text">A Web Developer.</h3>
      <div className="dropping-texts">
        <div>Technical Writer</div>
        <div>Blockchain Developer</div>
        <div>Project Advisor</div>
      </div>
      <p>
        I am a self-taught fullstack developer, dedicated to beautiful and
        responsive design. I am available for open-source projects, internships,
        and collaborations.
      </p>

      <div className="btn-flex">
        <BtnMain text="Contact Me" href="mailto:josephbawo.com" />
        <BtnPrimary
          text="View My Resume"
          href="https://drive.google.com/file/d/1X7kcDH0C17yBK84an91GEtI29WDuRvjB/view?usp=drive_link"
        />
      </div>

      <hr />
    </section>
  );
}

export default Header;

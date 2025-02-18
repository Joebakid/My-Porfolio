import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
// import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function Experience({ Template, LinkEx }) {
  const experienceRef = useRef(null);
  const [key, setKey] = useState(0); // Forces re-animation when route changes
  const location = useLocation(); // Track route changes

  useEffect(() => {
    setKey((prev) => prev + 1); // Update key to force reanimation
  }, [location.pathname]); // Reset animation when route changes

  useEffect(() => {
    const element = experienceRef.current;

    // Ensure opacity is set to 1 immediately
    gsap.set(element, { opacity: 1 });

    // GSAP Animation
    const animation = gsap.fromTo(
      ".tech-wrapper-ex",
      { opacity: 0, y: -30 },
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

  function ExperienceItem({ text }) {
    return (
      <span className="tech-wrapper-ex">
        <span className="bar-tech"></span>
        <p>{text}</p>
      </span>
    );
  }

  return (
    <section className="content-padding">
      <Template number="03" title="Experience" />
      <div ref={experienceRef}>
        <ExperienceItem
          text={
            <>
              In collaboration with{" "}
              <LinkEx text="david ogar" href="https://www.owogogah.com/" />
              {" and "}
              <LinkEx text="turbo layefa" href="https://tlaye.vercel.app/" />
              {" we made "}
              <LinkEx text="chucksale" href="https://www.chucksales.com/" />.
            </>
          }
        />

        <ExperienceItem
          text={
            <>
              In collaboration with{" "}
              <LinkEx text="david ogar" href="https://www.owogogah.com/" />
              {" and "} myself, {" we made "}
              <LinkEx text="Blubot" href="https://blubot.xyz/" /> [A telegram
              trading bot].
            </>
          }
        />

        <ExperienceItem
          text={
            <>
              Me and a team of developers made a rarity checker for{" "}
              <LinkEx text="Frontcartel" href="https://www.fronkcartel.com/" />{" "}
              ,
              <LinkEx
                text=" d9monz"
                href="https://www.fronkcartel.com/d9monz"
              />{" "}
              ,
              <LinkEx text=" .dev" href="https://www.fronkcartel.com/devs" />
            </>
          }
        />

        <ExperienceItem
          text={
            <>
              Me and a team of developers made a rarity checker for
              <LinkEx
                text=" Doginal-dragons"
                href="https://doginals-dragon.vercel.app/"
              />
              .
            </>
          }
        />

        <ExperienceItem
          text={
            <>
              Made the Official webpage of{" "}
              <LinkEx
                text="  DogeAiPepe"
                href="https://doge-ai-pepe.vercel.app/"
              />{" "}
              Freelancing.
            </>
          }
        />

        <ExperienceItem
          text={
            <>
              Me and <LinkEx text="Ash" href="https://github.com/AshNotGrey" />{" "}
              made the Official webpage of
              <LinkEx
                text="doginalduppets"
                href="https://www.doginalduppets.com/"
              />{" "}
              Freelancing.
            </>
          }
        />
        <ExperienceItem
          text={
            <>
              Made a startup called
              <LinkEx
                text="chronoliteNg"
                href="https://chronolite.com.ng/"
              />{" "}
              . We sell male/female watches, female Bags, Tee's and Caps.
            </>
          }
        />

        <ExperienceItem
          text={<>Worked as computer attender at Edmart Computers</>}
        />
      </div>
    </section>
  );
}

export default Experience;

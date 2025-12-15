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
              {" we made "}
              <LinkEx
                text="ronscryptotherapy"
                href="https://ronscryptotherapy.com/"
              />{" "}
              with payment integration from fiat directly to cryptocurrency.
            </>
          }
        />

        <ExperienceItem
          text={
            <>
              In collaboration with{" "}
              <LinkEx text="david ogar" href="https://www.owogogah.com/" />
              {" and "} myself, {" we made "}
              <LinkEx text="ChuckBot" href="https://chuckbot.xyz/" /> [A
              telegram trading bot].
            </>
          }
        />
        <ExperienceItem
          text={
            <>
            I   made  
              <LinkEx text="techjojo {online ecom gadget website}" href="https://techjojo.store/" /> [no backend but client wants to be in control of adding/removing products without me interfering. so i wrote some code that get the data from csv file. client is familiar with excel so a win win].
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
              <LinkEx
                text=" .dev"
                href="https://fronk-cartel-latest.vercel.app/"
              />
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
      I built a <LinkEx text="Contract Generator" href="https://contract-generator-xyz.vercel.app/" /> 
      that automatically creates professional, ready-to-use contracts based on the user’s selected profession.
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
                href="https://doginal-puppet.vercel.app/"
              />{" "}
              Freelancing.
            </>
          }
        />
        <ExperienceItem
          text={
            <>
              Made my own startup called
              <LinkEx text="chronoliteNg" href="https://chronolite.com.ng/" /> .
              We sell male/female watches, female Bags, Tee's and Caps.
            </>
          }
        />
        <ExperienceItem
          text={
            <>
           I and <LinkEx text="Unuigbokhai Noah(ui/ux)" href="https://linktr.ee/unuigbokhainoah?utm_source=linktree_profile_share&ltsid=dae4cb4f-18f8-452f-8b97-e30f4883fe69" />  designer   Made  
              <LinkEx text="pdf house" href="https://pdfhouse.vercel.app/" /> .
              to access pdf and school documents
            </>
          }
        />
       


          <ExperienceItem
          text={
            <>
             I made 
              <LinkEx
                text=" Tetris game"
                href="https://tetris-chuck.vercel.app/"
              />
              .
            </>
          }
        />
          <ExperienceItem
          text={
            <>
             I made 
              <LinkEx
                text=" Tic Tac game"
                href="https://tic-tac-tan-one.vercel.app/"
              />
              .
            </>
          }
        />
          <ExperienceItem
          text={
            <>
             I made my own npm package for frontend devlopers to scaffold and reduce setup time
              <LinkEx
                text="[npx create-bawo-frontend my-app]"
                href="https://create-bawo-frontend.vercel.app/"
              />
              .
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

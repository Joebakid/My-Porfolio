import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects({ BtnMain, BtnPrimary, Template, ProjectItem }) {
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 30, scale: 0.98 }); // Smaller initial offset

        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 5, // Faster transition
          ease: "power2.out",
          delay: index * 0.15, // Stagger effect for smoother appearance
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Triggers animation earlier
            end: "bottom 15%",
            toggleActions: "play none none reset",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const projects = [
    {
      src: "/img/ron.jpg",
      title: "Crypto Payment",
      text: "React js,Typescript",
      hrefBtnMain: "https://ronscryptotherapy.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/Ron-s-Crypto-Therapy---Master-Crypto-Trading",
    },
    {
      src: "/img/chronolite.jpg",
      title: "Ecommerce",
      text: "React js",
      hrefBtnMain: "https://chronolite.com.ng/",
      hrefBtnPrimary: "https://github.com/Joebakid/chronoliteNG",
    },
    {
      src: "/img/frontcartel.png",
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://www.fronkcartel.com/",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/blubot.jpg",
      title: "TELEGRAM BOT",
      text: "TS JS",
      hrefBtnMain: "https://chuckbot.xyz/",
      hrefBtnPrimary: "https://github.com/Joebakid/BluBot",
    },
    {
      src: "/img/bluealien.jpg",
      title: "NFT CHECKER",
      text: "REACT JS",
      hrefBtnMain: "https://basedblualien.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/AlienBlue",
    },
    {
      src: "/img/d9monz.png",
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://www.fronkcartel.com/d9monz",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/doginal-dragon.png",
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://doginals-dragon.vercel.app/",
      hrefBtnPrimary: "https://github.com/Joebakid/doginals_dragon",
    },
    {
      src: "/img/pixel doge.png",
      title: "NFT WEBSITE",
      text: "HTML CSS JS",
      hrefBtnMain: "https://pixel-doge.vercel.app/",
      hrefBtnPrimary: "https://github.com/Joebakid/Pixel-doge",
    },
    {
      src: "/img/chucksales.png",
      title: "LAUNCHPAD",
      text: "TS JS NEXT.JS",
      hrefBtnMain: "https://www.chucksales.com/",
      hrefBtnPrimary: "https://github.com/CHUCKSALE",
    },
    {
      src: "/img/duppet.jpg",
      title: "WEBSITE",
      text: "REACT JS",
      hrefBtnMain: "https://www.doginalduppets.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/MILLIONAIRE_NFT",
    },
    {
      src: "/img/dev.png",
      title: "NFT CHECKER",
      text: "REACT JS",
      hrefBtnMain: "https://www.fronkcartel.com/devs",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/crypto-blog.png",
      title: "BLOG",
      text: "HTML CSS JS",
      hrefBtnMain: "https://nftblog.vercel.app/index.html",
      hrefBtnPrimary: "https://github.com/Joebakid/NFT-blog",
    },
  ];

  return (
    <section className="content-padding">
      <Template number="04" title="Projects" />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

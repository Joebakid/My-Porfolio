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
      // src: "/img/ron.jpg",
      aboutProject: 'A seamless crypto payment platform integrated with mentorship services. Users can make payments in various cryptocurrencies, including USDC, with real-time wallet updates.',
      title: "Crypto Payment",
      text: "React js, Typescript",
      hrefBtnMain: "https://ronscryptotherapy.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/Ron-s-Crypto-Therapy---Master-Crypto-Trading",
    },
    {
      aboutProject: 'A fully functional e-commerce platform with Paystack payment integration for buying goods like bags and watches. Ensures a secure and efficient checkout process.',
      title: "Ecommerce",
      text: "React js",
      hrefBtnMain: "https://chronolite.com.ng/",
      hrefBtnPrimary: "https://github.com/Joebakid/chronoliteNG",
    },
    {
      aboutProject: 'A decentralized NFT verification platform that allows users to check the rarity and authenticity of NFTs with a fast and responsive interface.',
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://www.fronkcartel.com/",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/blubot.jpg",
      aboutProject: 'A powerful Telegram trading bot designed to automate crypto trading on the Base blockchain. Features real-time market analysis, trade execution, and portfolio tracking.',
      title: "TELEGRAM BOT",
      text: "TS JS",
      hrefBtnMain: "https://chuckbot.xyz/",
      hrefBtnPrimary: "https://github.com/Joebakid/BluBot",
    },
    {
      src: "/img/bluealien.jpg",
      aboutProject: 'A Next.js-powered NFT rarity checker providing real-time NFT metadata, market insights, and verification features for collectors.',
      title: "NFT CHECKER",
      text: "REACT JS",
      hrefBtnMain: "https://basedblualien.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/AlienBlue",
    },
    {
      src: "/img/d9monz.png",
      aboutProject: 'A specialized NFT rarity checker tailored for the D9monz collection, allowing users to verify metadata, ownership, and rarity rankings.',
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://www.fronkcartel.com/d9monz",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/doginal-dragon.png",
      aboutProject: 'An NFT rarity verification platform for Doginals Dragon NFTs, offering detailed insights, rankings, and metadata analysis for collectors.',
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://doginals-dragon.vercel.app/",
      hrefBtnPrimary: "https://github.com/Joebakid/doginals_dragon",
    },
    {
      src: "/img/pixel doge.png",
      aboutProject: 'A visually appealing NFT website built with HTML, CSS, and JavaScript, showcasing NFT collections with interactive UI components.',
      title: "NFT WEBSITE",
      text: "HTML CSS JS",
      hrefBtnMain: "https://pixel-doge.vercel.app/",
      hrefBtnPrimary: "https://github.com/Joebakid/Pixel-doge",
    },
    {
      src: "/img/chucksales.png",
      aboutProject: 'A feature-rich launchpad enabling crypto projects to raise funds and launch tokens with secure smart contract integrations.',
      title: "LAUNCHPAD",
      text: "TS JS NEXT.JS",
      hrefBtnMain: "https://www.chucksales.com/",
      hrefBtnPrimary: "https://github.com/CHUCKSALE",
    },
    {
      src: "/img/duppet.jpg",
      aboutProject: 'An interactive website for showcasing Doginal Duppets NFTs, offering users an engaging experience with information about NFT utilities and collections.',
      title: "WEBSITE",
      text: "REACT JS",
      hrefBtnMain: "https://www.doginalduppets.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/MILLIONAIRE_NFT",
    },
    {
      src: "/img/dev.png",
      aboutProject: 'A dedicated NFT checker for developers and collectors, ensuring the authenticity and rarity of NFTs within various ecosystems.',
      title: "NFT CHECKER",
      text: "REACT JS",
      hrefBtnMain: "https://www.fronkcartel.com/devs",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/crypto-blog.png",
      aboutProject: 'A simple yet effective crypto blog built with HTML, CSS, and JavaScript. Provides insights on blockchain, NFTs, and crypto trends.',
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

import React from "react";
import { motion } from "framer-motion";

function Projects({ BtnMain, BtnPrimary, Template, ProjectItem }) {
  const projects = [
    {
      aboutProject:
        "A classic Tetris game built using modern web technologies. The game features smooth controls, intuitive UI, and responsive design.  ",
      title: "Tetris Game",
      text: "TypeScript, Tailwindcss, shadonUi",
      hrefBtnMain: "https://tetris-chuck.vercel.app/", // replace with actual live link if available
      hrefBtnPrimary: "https://github.com/Joebakid?tab=repositories",
    },
    {
      aboutProject:
        "A seamless crypto payment platform integrated with mentorship services. Users can make payments in various cryptocurrencies, including USDC, with real-time wallet updates.",
      title: "Crypto Payment",
      text: "React js, Typescript",
      hrefBtnMain: "https://ronscryptotherapy.com/",
      hrefBtnPrimary:
        "https://github.com/Joebakid/Ron-s-Crypto-Therapy---Master-Crypto-Trading",
    },
    {
      aboutProject:
        "A digital resource hub for students to easily access and download academic PDFs, including textbooks, solutions, and lecture notes. Organized by course for quick reference and study support.",
      title: "PDF House",
      text: "React js,Tailwind",
      hrefBtnMain: "https://pdfhouse.vercel.app/",
      hrefBtnPrimary: "https://github.com/Joebakid/PDFHOUSE",
    },
    {
      aboutProject:
        "A fully functional e-commerce platform with Paystack payment integration for buying goods like bags and watches. Ensures a secure and efficient checkout process.",
      title: "Ecommerce",
      text: "React js,Tailwind",
      hrefBtnMain: "https://chronolite.com.ng/",
      hrefBtnPrimary: "https://github.com/Joebakid/chronoliteNG",
    },
    {
      aboutProject:
        "A decentralized NFT verification platform that allows users to check the rarity and authenticity of NFTs with a fast and responsive interface.",
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://www.fronkcartel.com/",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/blubot.jpg",
      aboutProject:
        "A powerful Telegram trading bot designed to automate crypto trading on the Base blockchain. Features real-time market analysis, trade execution, and portfolio tracking.",
      title: "TELEGRAM BOT",
      text: "TS JS",
      hrefBtnMain: "https://chuckbot.xyz/",
      hrefBtnPrimary: "https://github.com/Joebakid/BluBot",
    },
    {
      src: "/img/bluealien.jpg",
      aboutProject:
        "A Next.js-powered NFT rarity checker providing real-time NFT metadata, market insights, and verification features for collectors.",
      title: "NFT CHECKER",
      text: "REACT JS",
      hrefBtnMain: "https://basedblualien.com/",
      hrefBtnPrimary: "https://github.com/Joebakid/AlienBlue",
    },
    {
      src: "/img/d9monz.png",
      aboutProject:
        "A specialized NFT rarity checker tailored for the D9monz collection, allowing users to verify metadata, ownership, and rarity rankings.",
      title: "NFT CHECKER",
      text: "NEXT JS",
      hrefBtnMain: "https://www.fronkcartel.com/d9monz",
      hrefBtnPrimary: "https://github.com/Fronk-Cartel/front_cartel",
    },
    {
      src: "/img/tictactoe.png",
      aboutProject:
        "A simple and interactive Tic Tac Toe game where two players can compete in a turn-based match. Built for the web with responsive design and clear win-draw logic.",
      title: "TIC TAC TOE",
      text: "REACT JS",
      hrefBtnMain: "https://tic-tac-tan-one.vercel.app/",
      hrefBtnPrimary: "https://github.com/Joebakid/tic-tac",
    },
  ];

  // Animation variants for Framer Motion
  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="content-padding">
      <Template number="04" title="Projects" />
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of element is in view
          >
            <ProjectItem {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

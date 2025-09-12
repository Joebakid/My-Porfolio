import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import CoreTechnology from "./components/CoreTechnology";
import Experience from "./components/Experience";
import NavBar from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import BlogList from "./components/Blog/BlogList";
import Blog1 from "./components/Blog/blog1";
import Blog2 from "./components/Blog/blog2";
import Blog3 from "./components/Blog/blog3";
import Blog4 from "./components/Blog/blog4";
import Blog5 from "./components/Blog/blog5";
// import Blog6 from "./components/Blog/blog6";
import Footer from "./components/Footer";
import Likes from "./components/Likes";
import ScrollToTop from "./components/ScrollToTop";
import gsap from "gsap";
import PageNotFound from "./components/PageNotFound";
// import { Analytics } from "@vercel/analytics/react"

// ⏳ Show loader only once using localStorage
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
    } else {
      const t = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 3000);
      return () => clearTimeout(t);
    }
  }, []);

  if (loading) {
    return <div className="loader text-shadows">JOSEPH BAWO...</div>;
  }

  return (
    <Router>
      <ScrollToTop />
      {/* <Analytics/> */}
      <div className="container">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header BtnMain={BtnMain} BtnPrimary={BtnPrimary} />
                <About Template={Template} />
                <CoreTechnology Template={Template} />
                <Experience Template={Template} LinkEx={LinkEx} />
                <Projects
                  Template={Template}
                  BtnMain={BtnMain}
                  BtnPrimary={BtnPrimary}
                  ProjectItem={ProjectItem}
                />
                <Services
                  Template={Template}
                  BtnMain={BtnMain}
                  BtnPrimary={BtnPrimary}
                />
              </>
            }
          />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/mistakes-i-made" element={<Blog1 />} />
          <Route path="/blog/how-to-land-a-frontend-job" element={<Blog2 />} />
          <Route path="/blog/porfolio" element={<Blog3 />} />
          <Route path="/blog/blosignificance-of-npx-create-bawo-frontend" element={<Blog4 />} />
          <Route path="/blog/making-you-own-package" element={<Blog5 />} />
          {/* <Route path="/blog/blog6" element={<Blog6 />} /> */}
          <Route path="/Likes" element={<Likes ProjectItem={ProjectItem} />} />

          {/* 404 must be the last child inside <Routes> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

// 🔘 Button components
function BtnMain({ href, btnMainClassName = "", text }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={`${btnMainClassName} css-button-retro--blue`}
      href={href}
    >
      {text}
    </a>
  );
}

function BtnPrimary({ href, btnPrimaryClassName = "", text }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={`${btnPrimaryClassName} css-button-retro--grey`}
      href={href}
    >
      {text}
    </a>
  );
}

// 📄 Template section (for About, Experience, etc.)
function Template({ number, title, children }) {
  return (
    <div>
      <div className="template-flex">
        <h2 className="number">{number}</h2>
        <h2 className="title">{title}</h2>
      </div>
      <p className="template-text">{children}</p>
    </div>
  );
}

// 🔗 External link
function LinkEx({ text, href }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="link-ex hover-underline"
    >
      {text}
    </a>
  );
}

// 📝 Blog list item
function BlogListItems({ timestamp, blogtitle, slug }) {
  return (
    <div className="blog-flex">
      <p className="blog-time">{timestamp}</p>
      <Link to={`/blog/${slug}`} className="blog-title hover-underline">
        {blogtitle}
      </Link>
    </div>
  );
}

// 🔙 Back button
function BackBtn({ back }) {
  return (
    <div className="back-container mt-2">
      <Link className="back-link hover-underline" to="/blog">
        {back}
      </Link>
    </div>
  );
}

// 🧱 Project card item
function ProjectItem({
  title,
  text,
  src,
  aboutProject,
  alt,
  hrefBtnMain,
  hrefBtnPrimary,
}) {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="project-card">
      <div className="project-description">
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        <br />
        <p className="about-project">{aboutProject}</p>
      </div>
      <div className="btn-flex">
        {hrefBtnMain && <BtnMain text="Link" href={hrefBtnMain} />}
        {hrefBtnPrimary && <BtnPrimary text="Github" href={hrefBtnPrimary} />}
      </div>
    </div>
  );
}

export default App;

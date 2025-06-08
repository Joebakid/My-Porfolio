import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import About from "./components/About";
import CoreTechnology from "./components/CoreTechnology";
import Experience from "./components/Experience";
import NavBar from "./components/Nav";
import Services from "./components/Services";
import BlogList from "./components/Blog/BlogList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Likes from "./components/Likes";
import ScrollToTop from "./components/ScrollToTop";
import { useRef } from "react";

function App() {
  function BtnMain({ href, btnMainClassName, text }) {
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="btnMainClassName css-button-retro--blue"
        href={href}
      >
        {text}
      </a>
    );
  }

   const [loading, setLoading] = useState(true);
  const timerSet = useRef(false);

  if (!timerSet.current) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    timerSet.current = true;
  }

  if (loading) {
    return <div className="loader text-shadows">JOSEPH BAWO...</div>;
  }

  function ProjectItem({ title, text, src, aboutProject, alt, hrefBtnMain, hrefBtnPrimary }) {
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

  function BtnPrimary({ href, btnPrimaryClassName, text }) {
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="btnPrimaryClassName css-button-retro--grey"
        href={href}
      >
        {text}
      </a>
    );
  }

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

  function BackBtn({ back }) {
    return (
      <div className="back-container mt-2">
        <Link className="back-link hover-underline" to="/blog">
          {back}
        </Link>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/Likes" element={<Likes ProjectItem={ProjectItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

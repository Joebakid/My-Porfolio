// import logo from "./logo.svg";
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
import BlogList from "./blog/BlogList";
import Footer from "./components/Footer";
import BlogPage from "./blog/BlogPage";
import { useEffect } from "react";
import gsap from "gsap";
import Likes from "./components/Likes";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".container",
  //     { opacity: 0, y: 20 },
  //     { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  //   );
  // }, [location]);

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

  function Loader() {
    const [loading, setLoading] = useState(true);
    return loading ? <div className="loader">Loading...</div> : null;
  }

  function ProjectItem({ title, text, src, alt, hrefBtnMain, hrefBtnPrimary }) {
    useEffect(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
      );
    }, []);
    return (
      <div className="project-card">
        {/* Render image only if src is provided */}
        {src && (
          <img
            className="img-className"
            src={src}
            alt={alt || "Project image"}
          />
        )}

        <div className="project-description">
          {/* Render title only if it exists */}
          {title && <h2>{title}</h2>}

          {/* Render text only if it exists */}
          {text && <p>{text}</p>}
        </div>

        <div className="btn-flex">
          {/* Render buttons only if they exist */}
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

  function NavItem({ lightDarkMode }) {
    const location = useLocation(); // Get current path

    return (
      <div className="flex-nav ">
        <span>{lightDarkMode}</span>
        <Link
          to={location.pathname === "/blog" ? "/" : "/blog"}
          className="hover-underline blog"
        >
          {location.pathname === "/blog" ? "Home" : "Blog"}
        </Link>
      </div>
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
      <div className=" back-container mt-2">
        <Link className="back-link hover-underline" to="/blog">
          {" "}
          {back}
        </Link>
      </div>
    );
  }

  // function project({}) {}

  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <NavBar NavItem={NavItem} />
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
          <Route
            path="/blog"
            element={<BlogList BlogListItems={BlogListItems} />}
          />
          <Route
            path="/blog/:slug"
            element={<BlogPage BackBtn={BackBtn} ProjectItem={ProjectItem} />}
          />
          <Route
            path="/Likes"
            element={
              <Likes
                ProjectItem={ProjectItem}
                BackBtn={BackBtn}
                Loader={Loader}
              />
            }
          />{" "}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

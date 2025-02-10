import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

function Nav() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   gsap.to(".nav-container", { opacity: 1, y: 0, duration: 0 });

  //   gsap.from(".nav-container", {
  //     opacity: 1,
  //     y: -30,
  //     duration: 1,
  //     ease: "power2.out",
  //   });

  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="flex-nav sticky">
        {/* Dark Mode Toggle */}
        <button className="mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Dynamic Blog/Home Link */}
        <Link
          to={location.pathname === "/blog" ? "/" : "/blog"}
          className="hover-underline blog"
        >
          {location.pathname === "/blog" ? "Home" : "Blog"}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

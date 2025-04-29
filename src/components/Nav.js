import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

function Nav() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Animate only if not scrolled
    if (!isScrolled) {
      gsap.fromTo(
        ".nav-container",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    // Handle scrolling behavior
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]); // Depend on isScrolled to prevent reanimation

  useEffect(() => {
    // Toggle dark mode classes
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="flex-nav sticky">
        {/* Dark Mode Toggle */}
        <button className="mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <p className="mode-p">light</p> : <p className="mode-p">dark</p>}
        </button>

        {/* Navigation Links */}
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

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const social = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/josephbawo2/?igshid=ZGUzMzM3NWJiOQ%3D%3D",
    },
    { name: "Github", url: "https://github.com/Joebakid" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/joseph-bawo-82569022a/",
    },
    { name: "X", url: "https://x.com/dogexdrc20" }, // X is Twitter
  ];

  function ContactInfo({ email, movieRecommedation, copyright }) {
    return (
      <div className="footer-div">
        <div>
          <span>
            <a
              className="hover-underline email-socials"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </span>
        </div>

        <div className="socials-div-footer">
          {social.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline footer-social-link"
            >
              {platform.name}
            </a>
          ))}
        </div>

        <div>
          <Link to="/Likes" className="hover-underline link-default-color">
            {movieRecommedation}
          </Link>
        </div>

        <div>
          <span>{copyright}</span>
        </div>
      </div>
    );
  }

  return (
    <section className="content-padding">
      <hr />
      <ContactInfo
        email="josephbawo@gmail.com"
        copyright="Copyright © 2022 Josephbawo. All rights reserved."
        movieRecommedation="Likes"
      />
    </section>
  );
}

export default Footer;

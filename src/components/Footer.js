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
    <blockquote>
      <p>
        “I have lost my mind in this game like Vincent van Gogh. Dedicated his life to
        his art and lost his mind in the process. That’s happened to me. But f*** it.
        When that gold belt is around my waist, and my mother has a big mansion, my
        girlfriend has a car for every day of the week, and my kids’ kids have everything
        they ever want — then it will pay. Then I’ll be happy I lost my mind.”
      </p>
      <footer>
        — <cite>
          <a
            href="https://www.youtube.com/shorts/VNGyOCTfz-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conor McGregor, 2013 Interview
          </a>
        </cite>
      </footer>
    </blockquote>

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

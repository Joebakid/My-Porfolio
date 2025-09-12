import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const list = [
  {
    title: "Mistakes I Made as a Beginner Developer and How to Avoid Them",
    date: "March 1, 2025",
    path: "mistakes-i-made",
  },
  {
    title: "How to Land Your First Job as a Frontend Developer",
    date: "March 5, 2025",
    path: "how-to-land-a-frontend-job",
  },
  {
    title: "How to Build a Portfolio That Stands Out as a React Developer",
    date: "March 10, 2025",
    path: "porfolio",
  },
  {
    title: "The significance of npx create-bawo-frontend my-app",
    date: "March 26, 2025",
    path: "significance-of-npx-create-bawo-frontend",
  },
  {
    title: "Making your own npm package",
    date: "August 26, 2025",
    path: "making-your-own-package",
  },
];

function BlogList() {
  const listRef = useRef([]);
  const blockquoteRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      blockquoteRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: list.length * 0.2, // start after list animation
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="container-blog">
      <h2 className="blog-text">Blog</h2>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            ref={(el) => (listRef.current[index] = el)}
            className="blog-flex"
          >
            <p className="blog-time">{item.date}</p>
            <Link
              to={`/blog/${item.path}`}
              className="blog-title blog-align hover-underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <blockquote className="mt-20" ref={blockquoteRef}>
        <p>
          "Programs must be written for people to read, and only incidentally
          for machines to execute."
        </p>
        <footer>
          —{" "}
          <cite>
            <a
              href="https://www.youtube.com/watch?v=Kbd7yFFfKnw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harold Abelson, co-author of Structure and Interpretation of
              Computer Programs
            </a>
          </cite>
        </footer>
      </blockquote>
    </div>
  );
}

export default BlogList;

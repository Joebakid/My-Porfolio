import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const list = [
  {
    title: "Mistakes I Made as a Beginner Developer and How to Avoid Them",
    date: "March 1, 2025",
  },
  {
    title: "How to Land Your First Job as a Frontend Developer",
    date: "March 5, 2025",
  },
  {
    title: "How to Build a Portfolio That Stands Out as a React Developer",
    date: "March 10, 2025",
  },
  {
    title: "How to Stay Motivated When Learning to Code",
    date: "March 15, 2025",
  },
  {
    title: "The Importance of Blogging as a Developer",
    date: "March 20, 2025",
  },
  {
    title: "Understanding Tokenomics: What Makes a Good Meme Coin?",
    date: "March 20, 2025",
  },
];

function BlogList() {
  const listRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
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
              to={`/blog/${index}`}
              className="blog-title blog-align hover-underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

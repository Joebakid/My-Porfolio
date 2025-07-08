import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const list = [
  {
    title: "Mistakes I Made as a Beginner Developer and How to Avoid Them",
    date: "March 1, 2025",
    path: "blog1",
  },
  {
    title: "How to Land Your First Job as a Frontend Developer",
    date: "March 5, 2025",
    path: "blog2",
  },
  {
    title: "How to Build a Portfolio That Stands Out as a React Developer",
    date: "March 10, 2025",
    path: "blog3",
  },
  {
    title: "How to Stay Motivated When Learning to Code",
    date: "March 15, 2025",
    path: "blog4",
  },
  {
    title: "The Importance of Blogging as a Developer",
    date: "March 20, 2025",
    path: "blog5",
  },
  {
    title: "Books i should consider reading",
    date: "March 20, 2025",
    path: "blog6",
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
              to={`/blog/${item.path}`}
              className="blog-title blog-align hover-underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <blockquote className="mt-20">
        <p>
          “I have lost my mind in this game like Vincent van Gogh. Dedicated his
          life to his art and lost his mind in the process. That’s happened to
          me. But fuck it. When that gold belt is around my waist, and my mother
          has a big mansion, my girlfriend has a car for every day of the week,
          and my kids’ kids have everything they ever want — then it will pay.
          Then I’ll be happy I lost my mind.”
        </p>
        <footer>
          —{" "}
          <cite>
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
    </div>
  );
}

export default BlogList;

// import React from "react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import gsap from "gsap";

function BlogList({ BlogListItems }) {
  const getFormattedDate = (inputDate) => {
    const date = new Date(inputDate);
    return date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase();
  };

  const blogListRef = useRef(null); // Reference for animation

  useEffect(() => {
    if (blogListRef.current) {
      gsap.fromTo(
        blogListRef.current.children,
        {
          opacity: 0,
          y: -100, // Start position (above)
        },
        {
          opacity: 1,
          y: 0, // End position (normal)
          duration: 0.8,
          stagger: 0.2, // Animate each item sequentially
          ease: "power2.out",
        }
      );
    }
  }, []);

  const blogs = [
    {
      timestamp: getFormattedDate("2022-12-25"),
      blogtitle: "Best editors for Android",
      slug: "best-editors-for-android",
    },
    {
      timestamp: getFormattedDate("2022-12-26"),
      blogtitle: "Free materials to Learn Programming",
      slug: "free-materials-to-learn-programming",
    },
    {
      timestamp: getFormattedDate("2022-12-27"),
      blogtitle: "Animation on scroll",
      slug: "animation-on-scroll",
    },
    {
      timestamp: getFormattedDate("2022-12-29"),
      blogtitle: "Projects with just HTML and CSS",
      slug: "projects-with-html-css",
    },
    {
      timestamp: getFormattedDate("2022-12-30"),
      blogtitle: "Useful extensions to use on VSCode",
      slug: "vscode-useful-extensions",
    },
    {
      timestamp: getFormattedDate("2022-12-31"),
      blogtitle: "CSS Frameworks",
      slug: "css-frameworks",
    },

    {
      timestamp: getFormattedDate(new Date()),
      blogtitle: "Libraries built on top of React",
      slug: "react-libraries",
    },
    {
      timestamp: getFormattedDate(new Date()),
      blogtitle: "Cheap Smart glasses you can access ChatGpt Under $299",
      slug: "smart-glasses",
    },
    {
      timestamp: getFormattedDate("2025-1-10"),
      blogtitle: "Popular JavaScript libraries",
      slug: "popular-javascript-libraries",
    },
  ];

  return (
    <section className="content-padding blog-list-align" ref={blogListRef}>
      <div className="blog-list-title">
        <h1>Blog</h1>
      </div>
      {blogs.map((blog) => (
        <BlogListItems
          key={blog.slug}
          timestamp={blog.timestamp}
          blogtitle={blog.blogtitle}
          slug={blog.slug}
        />
      ))}
    </section>
  );
}

export default BlogList;

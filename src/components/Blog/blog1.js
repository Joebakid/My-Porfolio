import React from "react";
import Template from "../Template";
import BlogSection from "../BlogBody";

const Blog1 = () => {
  return (
    <div className="container">
      {/* <div className="header-content">
        Mistakes I Made as a Beginner Developer and How to Avoid Them
      </div> */}

      <Template
        // video="tkTZnzWYYo0"
        title="Mistakes I Made as a Beginner Developer and How to Avoid Them"
        // src="https://via.placeholder.com/400x200"
        alt="Coding mistake"
        text="One mistake I made was skipping the fundamentals."
        subtitle1="Key Lesson"
        subtitletext1=" When I first started my journey as a developer, I made many avoidable mistakes.
          While they were part of the learning process, I wish someone had warned me early.
          Here are some of the biggest mistakes I made and how you can avoid them."
        date="March 1, 2025"
      />

      {/* Full Blog Content */}
      <div className="blog-content">
        <BlogSection
          title="1. Ignoring the Fundamentals"
          content="I jumped straight into frameworks like React without fully understanding JavaScript. This caused confusion and frustration. Make sure you build a strong foundation in HTML, CSS, and JavaScript first."
        />
        <BlogSection
          title="2. Copying Code Without Understanding"
          content="Copying and pasting from Stack Overflow helped me solve problems, but I didn’t understand what I was doing. Always take time to understand how the solution works before using it."
        />
        <BlogSection
          title="3. Avoiding Version Control"
          content="I started multiple projects without Git, and lost track of changes. Learning Git early will save you hours of headache and teach you collaboration best practices."
        />
        <BlogSection
          title="4. Not Building Projects"
          content="I focused too much on tutorials. Building real-world projects helps you apply what you've learned and improves your problem-solving skills."
        />
        <BlogSection
          title="5. Fear of Asking Questions"
          content="I was too shy to ask for help. Whether it’s online forums, communities, or coworkers, asking questions is one of the fastest ways to grow."
        />
        <BlogSection
          title="Conclusion"
          content="Mistakes are inevitable, but being aware of common pitfalls can accelerate your learning. Stay curious, keep building, and don't be afraid to make mistakes—they're a sign that you're trying."
        />
      </div>
    </div>
  );
};

export default Blog1;

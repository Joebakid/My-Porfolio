import React from "react";

function BlogSection({ title, content, children }) {
  return (
    <section className="blog-section py-2">
      <h2 className="text-gray-400 uppercase font-medium">{title}</h2>
      <div className="content max-w-none">
        {children ? (
          children
        ) : (
          <>
            <br />
            <p className="lineheight">{content}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default BlogSection;

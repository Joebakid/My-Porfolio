import React from "react";

function BlogSection({ title, content }) {
  return (
   
    <div className="blog-section py-2">
      <h2 className="gray uppercase font-medium">{title}</h2>
      <p className="lineheight">{content}</p>
    </div>
   
  );
}

export default BlogSection;

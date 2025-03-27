import React from "react";
import { useParams } from "react-router-dom";

const list = [
  { title: 'Mistakes I Made as a Beginner Developer and How to Avoid Them', content: 'Here is how you can avoid common mistakes as a beginner developer...', date: 'March 1, 2025' },
  { title: 'How to Land Your First Job as a Frontend Developer', content: 'Getting your first job as a frontend developer can be challenging...', date: 'March 5, 2025' },
  { title: 'How to Build a Portfolio That Stands Out as a React Developer', content: 'Your portfolio is your resume as a developer...', date: 'March 10, 2025' },
  { title: 'How to Stay Motivated When Learning to Code', content: 'Staying motivated while learning to code can be tough...', date: 'March 15, 2025' },
  { title: 'The Importance of Blogging as a Developer', content: 'Blogging helps developers share knowledge...', date: 'March 20, 2025' },
  { title: 'Understanding Tokenomics: What Makes a Good Meme Coin?', content: 'Tokenomics is the backbone of any cryptocurrency project...', date: 'March 20, 2025' }
];

function BlogPost() {
  const { id } = useParams(); // Get the blog post ID from the URL
  const post = list[id];

  if (!post) return <h2>Blog post not found</h2>;

  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-time">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;

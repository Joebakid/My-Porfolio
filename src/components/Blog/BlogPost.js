import React from "react";
import { useParams } from "react-router-dom";

const list = [
  { title: 'Mistakes I Made as a Beginner Developer and How to Avoid Them',    content: `As a new developer, it’s easy to make mistakes, but learning from them is part of the growth process. Here are some common ones to watch out for:

    1. Not Asking for Help
    Struggling too long on a problem instead of seeking guidance.
    Thinking that asking questions makes you look less capable (it doesn’t!).
    
    2. Not Reading Documentation
    Ignoring official docs and relying only on tutorials.
    Not knowing that most answers are already documented.
    
    3. Copy-Pasting Code Without Understanding It
    Using code from Stack Overflow or GitHub without knowing how it works.
    This leads to debugging nightmares later.
    
    4. Trying to Learn Too Many Things at Once
    Jumping between multiple programming languages or frameworks.
    Leads to shallow knowledge instead of deep understanding.
    
    ...
    
    15. Not Documenting Code
    Writing code that nobody (including future you) can understand.
    Not adding meaningful comments or README files.
    
    16. Not Keeping Up with Industry Trends
    Sticking to outdated practices and not learning new, better approaches.
    Not following communities, blogs, or updates in your tech stack.`,
    'author':'Joseph bawo',
    'img':'/img/mistakes.webp',
    alt:'ai generate mistake img'
   },
  { title: 'How to Land Your First Job as a Frontend Developer', content: 'Getting your first job as a frontend developer can be challenging...', date: 'March 5, 2025', 'author':'Joseph bawo' },
  { title: 'How to Build a Portfolio That Stands Out as a React Developer', content: 'Your portfolio is your resume as a developer...', date: 'March 10, 2025', 'author':'Joseph bawo' },
  { title: 'How to Stay Motivated When Learning to Code', content: 'Staying motivated while learning to code can be tough...', date: 'March 15, 2025', 'author':'Joseph bawo' },
  { title: 'The Importance of Blogging as a Developer', content: 'Blogging helps developers share knowledge...', date: 'March 20, 2025', 'author':'Joseph bawo' },
  { title: 'Understanding Tokenomics: What Makes a Good Meme Coin?', content: 'Tokenomics is the backbone of any cryptocurrency project...', date: 'March 20, 2025', 'author':'Joseph bawo' }
];

function BlogPost() {
  const { id } = useParams(); // Get the blog post ID from the URL
  const post = list[id];

  if (!post) return <h2>Blog post not found</h2>;

  return (
    <div className="blog-post">

<h2 className="blog-post-title">{post.title}</h2>
<p className="blog-time">{post.date}</p>
      <p className="blog-author"><i>by </i> : {post.author}</p>
        <div className="blog-img">
        <img  src={post.img} alt={post.alt}/>
        </div>
   
       
      <div className="blog-flex mb">
      
      </div>
      <p className="blog-content">{post.content}</p>
     
       
     
    
    </div>
  );
}

export default BlogPost;

import { useParams } from "react-router-dom";
import { useState } from "react";

function BlogPage({ BackBtn, ProjectItem }) {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const blogContent = {
    "best-editors-for-android": {
      text: "There are many code editors available for Android devices, and the best one for you will depend on your personal preferences and the type of programming you are doing. Some popular options include:",
      img: "../img/images-edtor.jpeg",
      editorLists: [
        {
          title: " Replit- Code anything",
          img: "../img/replit.jpg",
          hrefBtnMain:
            "https://play.google.com/store/apps/details?id=com.replit.app",
        },
        {
          title: "TrebEdit - Mobile HTML Editor",
          img: "../img/trebedit.jpg",
          hrefBtnMain:
            "https://play.google.com/store/apps/details?id=com.teejay.trebedit",
        },
        {
          title: "Acode - code editor | FOSS",
          img: "../img/ascode.jpg",
          hrefBtnMain:
            "https://play.google.com/store/apps/details?id=com.foxdebug.acodefree",
        },
        {
          title: "Dcoder, Compiler IDE :Code & P",
          img: "../img/dcoder.jpg",
          hrefBtnMain:
            "https://play.google.com/store/apps/details?id=com.paprbit.dcoder",
        },
      ],
    },
    "free-materials-to-learn-programming": {
      text: "Here are free materials to learn programming...",
      img: "/img/program.jpg",
      projectItems: [
        {
          title: "HTML & CSS Full Course - Beginner to Pro",
          text: "Learn the basics of HTML and CSS with this full course.",
          src: "/img/html-css-course.jpg",
          alt: "HTML & CSS Course",
          hrefBtnMain: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=3s",
          hrefBtnPrimary: "https://github.com/freeCodeCamp/html-css-course",
        },
        {
          title: "CSS Tutorial - Zero to Hero",
          text: "A complete guide to mastering CSS.",
          src: "/img/css-tutorial.jpg",
          alt: "CSS Tutorial",
          hrefBtnMain: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
          hrefBtnPrimary: "https://github.com/freeCodeCamp/css-course",
        },
        {
          title: "JavaScript Tutorial for Beginners",
          text: "Learn JavaScript fundamentals with hands-on projects.",
          src: "/img/javascript-course.jpg",
          alt: "JavaScript Course",
          hrefBtnMain:
            "https://www.youtube.com/watch?v=PlbupGCBV6w&list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4",
          hrefBtnPrimary: "https://github.com/freeCodeCamp/javascript-course",
        },
      ],
      paidCourse: [
        {
          title: "Build Responsive Real-World Websites with HTML and CSS",
          text: "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid Bestseller Rating: 4.8 out of 5 4.8 (87,800 ratings) 352,857 students",
          hrefBtnMain:
            "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?couponCode=24T2MT070225",
        },
        {
          title: "Tailwind CSS From Scratch | Learn By Building Projects",
          text: "uild great looking layouts fast and efficiently using Tailwind CSS utility classes",
          hrefBtnMain:
            "https://www.udemy.com/course/tailwind-from-scratch/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_535397245863_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1010299_._pd__._&matchtype=&gclid=CjwKCAiAzKqdBhAnEiwAePEjku1iGCuWkCTWjGYxENLdaRr9QNO7ddlvEn5ph3-zbDrfIEguFhUu8hoCFP8QAvD_BwE",
        },
        {
          title: "The Complete JavaScript Course 2023: From Zero to Expert!",
          text: "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid Bestseller Rating: 4.8 out of 5 4.8 (87,800 ratings) 352,857 students",
          hrefBtnMain:
            "https://www.udemy.com/course/the-complete-javascript-course/",
        },
      ],
    },
    "animation-on-scroll": {
      text: "Learn how to implement animation on scroll , use for Html Css mainly...",
      img: "/img/css-animate-scroll.jpg",
      code: [
        {
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <title>Document</title>
  </head>

  <!-- AOS JS INITIALIZATION -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <body></body>
  <script>[
    AOS.init();
  </script>
  <!-- DONT FORGET TO LINK JS -->
</html>
`,
          hrefBtnPrimary: "https://michalsnik.github.io/aos/",
          hrefBtnMain: "https://www.youtube.com/watch?v=0kmFlBJIUkQ&t=398s",
        },
      ],
    },
    "projects-with-html-css": {
      text: "Writing in Progress......",
      img: "/img/html-css-projects.jpg",
    },
    "vscode-useful-extensions": {
      text: "Writing in Progress......",
      img: "/img/vscode-extensions.jpg",
    },
    "css-frameworks": {
      text: "Writing in Progress......",
      img: "/img/css-frameworks.jpg",
    },
    "popular-javascript-libraries": {
      text: "Writing in Progress......",
      img: "/img/javascript-libraries.jpg",
    },
    "react-libraries": {
      text: "Writing in Progress......",
      img: "/img/react-libraries.jpg",
    },
  };

  const blogData = blogContent[slug] || {
    text: "Blog content not found.",
    img: "/img/default.jpg",
  };

  return (
    <section className="content-padding">
      <BackBtn back="< Go back" />

      {/* Loader - Show only when the image is loading */}
      {isLoading && <div className="image-loader">Loading...</div>}

      <img
        src={blogData.img}
        alt={slug.replace(/-/g, " ")}
        className="blog-image"
        onLoad={() => setIsLoading(false)} // Hide loader when loaded
        onError={() => setIsLoading(false)} // Hide loader if error occurs
        style={{ display: isLoading ? "none" : "block" }} // Hide image until loaded
      />
      <h1 className="blog-title-slug">{slug.replace(/-/g, " ")}</h1>
      <p className="blog-text-slug">{blogData.text}</p>

      <div className="program-content-wrapper">
        {/* Render only for "best-editors-for-android" */}
        {slug === "best-editors-for-android" && blogData.editorLists && (
          <div className="editors-section">
            <h2 className="sub-title-blog">Best Code Editors for Android</h2>
            <div className="projects-grid">
              {blogData.editorLists.map((item, index) => (
                <ProjectItem
                  key={index}
                  title={item.title}
                  src={item.img}
                  // text={item.text}
                  hrefBtnMain={item.hrefBtnMain}
                />
              ))}
            </div>
          </div>
        )}

        {/* Render ProjectItems if they exist */}
        {blogData.projectItems && (
          <div className="projects-section">
            <h2 className="sub-title-blog">Free Programming Courses</h2>
            <div className="projects-grid">
              {blogData.projectItems.map((item, index) => (
                <ProjectItem
                  key={index}
                  title={item.title}
                  text={item.text}
                  hrefBtnMain={item.hrefBtnMain}
                />
              ))}
            </div>
          </div>
        )}

        {blogData.paidCourse && (
          <div className="projects-section">
            <h2 className="sub-title-blog">Paid Programming Courses</h2>
            <div className="projects-grid">
              {blogData.paidCourse.map((item, index) => (
                <ProjectItem
                  key={index}
                  title={item.title}
                  text={item.text}
                  hrefBtnMain={item.hrefBtnMain}
                />
              ))}
            </div>
          </div>
        )}

        {/* Render only for "animation-on-scroll" */}
        {slug === "animation-on-scroll" && blogData.code && (
          <div className="animation-code-section">
            <h2 className="sub-title-blog">Animation on Scroll Example</h2>

            {/* Display the code block correctly */}
            {blogData.code.map((item, index) => (
              <pre key={index}>
                <code>{item.code}</code>
              </pre>
            ))}

            {/* Render ProjectItem components */}
            <div className="projects-grid">
              {blogData.code.map((item, index) => (
                <ProjectItem
                  key={index}
                  title={`Code Example ${index + 1}`}
                  text="Click below to learn more"
                  hrefBtnMain={item.hrefBtnMain}
                  hrefBtnPrimary={item.hrefBtnPrimary}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogPage;

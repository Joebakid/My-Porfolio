import React from "react";


function Template({ src, alt, title, video, text, subtitle1, subtitletext1,date ,content }) {
  const showImage = Boolean(src && src.trim().length > 0);
  const showVideo = Boolean(video && video.trim().length > 0);

  return (
    <>
     
      {showVideo && (
        <div>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
            title={`${title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <h3 className="gray bold uppercase smaller">{date}</h3>

   
      {title && <h1 className="bold py-2 gray x-large">{title}</h1>}

     
      {showImage && (
        <div>
          <img
            src={src}
            alt={alt || "Blog image"}
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>
      )}

      {/* Text */}
      {text && <p className="py-2">{text}</p>}

      {/* Subtitle & List */}
      {subtitle1 && subtitletext1 && (
        <div className="py-2">
          <h2 className="gray">{subtitle1}</h2>
          <ul>
            <li className="lineheight">{subtitletext1}</li>
          </ul>
        </div>
      )}


   
     


        
    </>
  );
}

export default Template;

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pdfs = [
  {
    name: "Outwitting the Devil",
    href: "https://drive.google.com/file/d/1XuH5P9IMh7wo3q3OwMOeA-zc4JIZYoL8/view?usp=drivesdk",
    cover: "https://covers.openlibrary.org/b/id/10958362-L.jpg", // Replaced with Open Library
    year: "1938",
  },
  {
    name: "Entrepreneurial You",
    href: "https://drive.google.com/file/d/1ux6K2rZGMT7F44-iCY27G-C77_x-Haml/view?usp=drivesdk",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
    year: "2017",
  },
  {
    name: "The Psychology of Money",
    href: "https://drive.google.com/file/d/14hgkddEMnUrrerZ1dM1BPEAZueCyI1cF/view?usp=drivesdk",
    cover: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    year: "2020",
  },
  {
  name: "The Richest Man in Babylon",
  href: "https://drive.google.com/file/d/15L-k6JbX77GJjuCSuHp6Qm9zpmkw9zgi/view?usp=drivesdk",
  cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg", // ✅ Working image
  year: "1926",
}
];


function Likes() {
  const [videoLoaded, setVideoLoaded] = useState({});
  const [activeVideoKey, setActiveVideoKey] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoClick = (sectionIndex, index) => {
    const key = `${sectionIndex}-${index}`;
    setActiveVideoKey(key);
  };

  useEffect(() => {
    videoRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reset",
            },
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const sections = [
    {
      title: "Movies",
      items: [
        { title: "Beautiful Boy", year: "2018", videoId: "y23HyopQxEg" },
        { title: "Interstellar", year: "2014", videoId: "zSWdZVtXT7E" },
        { title: "Inception", year: "2010", videoId: "YoHD9XEInc0" },
        { title: "The Social Network", year: "2010", videoId: "lB95KLmpLR4" },
        { title: "Oppenheimer", year: "2023", videoId: "uRJQJcy3f8w" },
        { title: "Shutter Island", year: "2010", videoId: "v8yrZSkKxTA" },
        { title: "Dune 2", year: "2023", videoId: "Way9Dexny3w" },
      ],
    },
    {
      title: "Series",
      items: [
        { title: "Breaking Bad", year: "2008", videoId: "HhesaQXLuRY" },
        { title: "Stranger Things", year: "2016", videoId: "b9EkMc79ZSU" },
        { title: "Game of Thrones", year: "2011", videoId: "KPLWWIOCOOQ" },
        { title: "Last of Us", year: "2023", videoId: "uLtkt8BonwM" },
      ],
    },
    {
      title: "Music",
      items: [
        { title: "Blinding Lights", artist: "The Weeknd", videoId: "4NRXx6U8ABQ" },
        { title: "Until I Found You", artist: "Stephen Sanchez", videoId: "GxldQ9eX2wo" },
        { title: "Someone Like You", artist: "Adele", videoId: "hLQl3WQQoQ0" },
        { title: "The Night We Met", artist: "Lord Huron", videoId: "KtlgYxa6BMU" },
        { title: "Beautiful Boy", artist: "John Lennon", videoId: "Lt3IOdDE5iA" },
        { title: "Romantic Homicide", artist: "d4vd", videoId: "eKL3TceSxvk" },
        { title: "Kalam Eineh | شيرين - كلام عينيه", artist: "Sherine", videoId: "R8I3FOX7aZY" },
        { title: "Brooklyn Baby", artist: "Lana Del Rey", videoId: "T5xcnjAG8pE" },
        { title: "Formidable (ceci n'est pas une leçon)", artist: "Stromae", videoId: "hdwjwN-eFn0" },
        { title: "Me and the Devil", artist: "Soap&Skin", videoId: "T7Oe1H87yi8" },
        { title: "Hotline Bling", artist: "Billie Eilish", videoId: "8jWgbnXBEPQ" },
        { title: "Amour Plastique", artist: "Videoclub", videoId: "5NjJLFI_oYs" },
        { title: "Tom's Diner", artist: "AnnenMayKantereit x Giant Rooks", videoId: "5r3B7yz6J68" },
        { title: "La Verdolaga", artist: "Totó La Momposina", videoId: "9MUFCwX_jMg" },
        { title: "Summertime Sadness", artist: "Lana Del Rey", videoId: "tQz93eTCpSA" },
        { title: "Sad Girl", artist: "Lana Del Rey", videoId: "TdrL3QxjyVw" },
        { title: "Ocean Eyes", artist: "Billie", videoId: "viimfQi_pUw" },
        { title: "Say Yes to Heaven", artist: "Lana Del Rey", videoId: "MiAoetOXKcY" },
        { title: "Glimpse of Us", artist: "Joji", videoId: "FvOpPeKSf_4" },
        { title: "Here With Me", artist: "d4vd", videoId: "Ip6cw8gfHHI" },
        { title: "Daylight", artist: "David Kushner", videoId: "MoN9ql6Yymw" },
        { title: "Apocalypse (Before Sunrise)", artist: "Cigarettes After Sex", videoId: "MblPa7pCnZ8" },
      ],
    },
    {
      title: "Albums",
      items: [
        { title: "DAMN.", artist: "Kendrick Lamar", videoId: "NLZRYQMLDW4" },
        { title: "25", artist: "Adele", videoId: "YQHsXMglC9A" },
      ],
    },
    {
      title: "Books",
      items: pdfs.map((pdf) => ({
        title: pdf.name,
        year: pdf.year,
        cover: pdf.cover,
        href: pdf.href,
      })),
    },
  ];

  return (
    <div className="likes-container">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="likes-section">
          <p className="text-center py-2 gray bold">
            [ click to open/play {section.title.toLowerCase()} ]
          </p>
          <h2 className="section-title">{section.title}</h2>
          <div className="video-grid">
            {section.items.map((item, index) => {
              const key = `${sectionIndex}-${index}`;
              const isBook = !item.videoId;

              return (
                <div key={key} className="video-item" ref={(el) => (videoRefs.current[key] = el)}>
                  {isBook ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <img className="video-thumbnail" src={item.cover} alt={item.title} />
                    </a>
                  ) : (
                    <div className="video-container" onClick={() => handleVideoClick(sectionIndex, index)}>
                      {activeVideoKey !== key ? (
                        <img
                          className="video-thumbnail"
                          src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                          alt={item.title}
                        />
                      ) : (
                        <iframe
                          width="100%"
                          height="315"
                          src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=0&playsinline=1`}
                          title={`${item.title} Trailer`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          onLoad={() => setVideoLoaded((prev) => ({ ...prev, [key]: true }))}
                        />
                      )}
                    </div>
                  )}
                  <h3 className="title-text-like">
                    {item.title} {item.artist ? `- ${item.artist}` : ""} {item.year ? `(${item.year})` : ""}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Likes;

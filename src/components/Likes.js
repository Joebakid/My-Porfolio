import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Likes({ Loader }) {
  const [videoLoaded, setVideoLoaded] = useState({});
  const [showIframe, setShowIframe] = useState({});
  // const [videoLoaded, setVideoLoaded] = useState({});
  // const [showIframe, setShowIframe] = useState({});
  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    setShowIframe((prev) => {
      // Reset all iframes before opening a new one
      const updatedState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      return { ...updatedState, [index]: true };
    });
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
        { title: "dune 2", year: "2023", videoId: "Way9Dexny3w" },
      ],
    },
    {
      title: "Series",
      items: [
        { title: "Breaking Bad", year: "2008", videoId: "HhesaQXLuRY" },
        { title: "Stranger Things", year: "2016", videoId: "b9EkMc79ZSU" },
        { title: "Game of Thrones", year: "2011", videoId: "KPLWWIOCOOQ" },
        { title: "Last of us", year: "2023", videoId: "uLtkt8BonwM" },
      ],
    },
    {
      title: "Music",
      items: [
        {
          title: "Blinding Lights",
          artist: "The Weeknd",
          videoId: "4NRXx6U8ABQ",
        },
        {
          title: "Until I Found You ",
          artist: "Stephen Sanchez ",
          videoId: "GxldQ9eX2wo",
        },
        { title: "Someone Like You", artist: "Adele", videoId: "hLQl3WQQoQ0" },
        {
          title: "The night we met",
          artist: "lord Horun",
          videoId: "KtlgYxa6BMU",
        },
        {
          title: "Beautiful Boy",
          artist: "John Lenon",
          videoId: "Lt3IOdDE5iA",
        },
        {
          title: " Romantic Homicide",
          artist: "d4vd ",
          videoId: "eKL3TceSxvk",
        },
        {
          title: "Kalam Eineh | شيرين - كلام عينيه",
          artist: "Sherine",
          videoId: "R8I3FOX7aZY",
        },
        {
          title: " Brooklyn Baby",
          artist: "Lana Del Rey",
          videoId: "T5xcnjAG8pE",
        },
        {
          title: " Stromae",
          artist: " Formidable (ceci n'est pas une leçon)",
          videoId: "hdwjwN-eFn0",
        },
        {
          title: "Me and the Devil",
          artist: "Soap&Skin",
          videoId: "T7Oe1H87yi8",
        },
        {
          title: "hotline bling ",
          artist: "Billie Eilish",
          videoId: "8jWgbnXBEPQ",
        },
        {
          title: "Amour plastique",
          artist: "VIDEOCLUB",
          videoId: "5NjJLFI_oYs",
        },
        {
          title: "AnnenMayKantereit x Giant Rooks",
          artist: "Tom's Diner",
          videoId: "5r3B7yz6J68",
        },
        {
          title: "La Verdolaga",
          artist: "Totó La Momposina",
          videoId: "9MUFCwX_jMg",
        },
        {
          title: "Summertime Sadness",
          artist: "Lana Del Rey",
          videoId: "tQz93eTCpSA",
        },
        {
          title: "sad girl",
          artist: "Lana Del Rey",
          videoId: "TdrL3QxjyVw",
        },
        {
          title: "Ocean eyes",
          artist: "Billie",
          videoId: "viimfQi_pUw",
        },
        {
          title: "Say yes to heaven",
          artist: "Lana del rey",
          videoId: "MiAoetOXKcY",
        },
        {
          title: "Glimpse of us",
          artist: "Joji",
          videoId: "FvOpPeKSf_4",
        },
        {
          title: "Here With Me",
          artist: "d4vd ",
          videoId: "Ip6cw8gfHHI",
        },
        {
          title: "Daylight (Official Music Video)",
          artist: "David Kushner  ",
          videoId: "MoN9ql6Yymw",
        },
        {
          title: " Apocalypse (Before Sunrise)",
          artist: " Cigarettes After Sex   ",
          videoId: "MblPa7pCnZ8",
        },
      ],
    },
    {
      title: "Albums",
      items: [
        { title: "DAMN.", artist: "Kendrick Lamar", videoId: "NLZRYQMLDW4" },
        { title: "25", artist: "Adele", videoId: "YQHsXMglC9A" },
      ],
    },
  ];

  return (
    <>
      {/* <BackBtn back="< Go

      back" /> */}
      <div className="likes-container">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="likes-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="video-grid">
              {section.items.map((item, index) => (
                <div key={index} className="video-item">
                  <div
                    className="video-container"
                    onClick={() => handleVideoClick(index)}
                  >
                    {!showIframe[index] ? (
                      <img
                        className="video-thumbnail"
                        src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                        alt={item.title}
                      />
                    ) : (
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&enablejsapi=1`}
                        title={`${item.title} Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() =>
                          setVideoLoaded((prev) => ({ ...prev, [index]: true }))
                        }
                        ref={(el) => {
                          if (el) {
                            el.contentWindow.postMessage(
                              '{"event":"command","func":"pauseVideo","args":""}',
                              "*"
                            );
                          }
                        }}
                      ></iframe>
                    )}
                  </div>
                  <h3 className="title-text-like">
                    {item.title} {item.year ? `(${item.year})` : ""}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Likes;

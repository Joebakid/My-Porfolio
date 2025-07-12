import React from "react";
import BlogSection from "../BlogBody";  

function PDFListSection() {
  const pdfs = [
    {
      name: "Outwitting the Devil",
      href: "https://drive.google.com/file/d/1XuH5P9IMh7wo3q3OwMOeA-zc4JIZYoL8/view?usp=drivesdk",
    },
    {
      name: "Entrepreneurial You",
      href: "https://drive.google.com/file/d/1ux6K2rZGMT7F44-iCY27G-C77_x-Haml/view?usp=drivesdk",
    },
    {
      name: "The Psychology of Money",
      href: "https://drive.google.com/file/d/14hgkddEMnUrrerZ1dM1BPEAZueCyI1cF/view?usp=drivesdk",
    },
    {
      name: "The Richest Man in Babylon",
      href: "https://drive.google.com/file/d/15L-k6JbX77GJjuCSuHp6Qm9zpmkw9zgi/view?usp=drivesdk",
    },
  ];

  return (
     <div className="container">
    <BlogSection
      title="Free PDF Resources on Discipline, Wealth & Mindset"
      content={
        <ul className=" py-2">
          {pdfs.map((pdf, index) => (
            <li key={index} className="py-1 flex">
              <a
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover list-disc   card-stick mt-5"
              >
                {pdf.name}
              </a>
            </li>
          ))}
        </ul>
      }
    />
    </div>
  );
}

export default PDFListSection;

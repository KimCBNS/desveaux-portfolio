import React from "react";

// use a card building component
import PortfolioCard from "../components/PortfolioCard";  


// Example array of project data
const projects = [
  {
    title: "Weather Guide",
    image: "/assets/WeatherDash.png",  
    github: "https://github.com/KimCBNS/WeatherGuides",
    deployed: "https://kimcbns.github.io/WeatherGuides/"
  },
  {
    title: "Social Media DB",
    image: "/assets/Insomnia.png",
    github: "https://github.com/KimCBNS/social-app",
    deployed: "https://www.loom.com/share/80a6c507f51e4397a91eb39f25af96f6"
  },
  {
    title: "Lyric Swap",
    image: "/assets/LyricSwap3.png",
    github: "https://github.com/lukemaines/lyric-swap",
    deployed: " https://lukemaines.github.io/lyric-swap/"
  },
  {
    title: "Note Taker",
    image: "/assets/NoteTaker1.png",
    github: "https://github.com/KimCBNS/note-taker",
    deployed: "https://note-taker-h4t5.onrender.com/"
  },
  {
    title: "Tech Blog",
    image: "/assets/TechBlog.png",
    github: "https://github.com/KimCBNS/tech-blog",
    deployed: "https://tech-blog-uvhf.onrender.com/"
  },
  {
    title: "SVG Designer",
    
    image: "/assets/Insomnia.png",
    github: " https://github.com/KimCBNS/oop-svg-designer",
    deployed: "https://drive.google.com/file/d/1Aral2EH9Wz42jGT7vVThucuB7pQVxr-Z/"
  }
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-cards">
        {/* Using map() to render PortfolioCard for each project */}
        {projects.map((project, index) => (
          <PortfolioCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
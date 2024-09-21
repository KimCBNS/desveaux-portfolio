import React from "react";

import PortfolioCard from "../components/PortfolioCard";
// Example array of project data
const projects = [
  {
    title: "Project One",
    image: "https://via.placeholder.com/150",  // Placeholder image
    github: "https://github.com/user/project-one",
    deployed: "https://project-one.com"
  },
  {
    title: "Project Two",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/user/project-two",
    deployed: "https://project-two.com"
  },
  {
    title: "Project Three",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/user/project-three",
    deployed: "https://project-three.com"
  },
  {
    title: "Project Four",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/user/project-four",
    deployed: "https://project-four.com"
  },
  {
    title: "Project Five",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/user/project-five",
    deployed: "https://project-five.com"
  },
  {
    title: "Project Six",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/user/project-six",
    deployed: "https://project-six.com"
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
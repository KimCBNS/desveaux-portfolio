import React from "react";

function PortfolioCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} className="card-image" />
      <h2>{project.title}</h2>
      <p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
        <a href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed App</a>
      </p>
    </div>
  );
}

export default PortfolioCard;
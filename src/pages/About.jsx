import React from 'react';

// use a card building component
import ProfileCard from "../components/ProfileCard";  


// Example array of project data
const profile = [
  {
    title: "Kim Desveaux",
    image: "/assets/IMG_0211.jpeg", 
    text: "I am a developer and I would love to help you with your next project."
   },
];

function Profile() {
  return (
    <div className="portfolio">
      <h1>About Me</h1>
      <div className="portfolio-cards">
        {/* Using map() to render PortfolioCard for each project */}
        {profile.map((profile, index) => (
          <ProfileCard profile={profile} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
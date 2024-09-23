import React from "react";

function ProfileCard({ profile }) {
  return (
    <div className="card">
      <img src={profile.image} alt={profile.title} className="card-image" />
      <h2>{profile.title}</h2>
      <h5>{profile.text}</h5>
     
    </div>
  );
}

export default ProfileCard;
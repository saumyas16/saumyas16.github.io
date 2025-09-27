import React from 'react';
import profilePhoto from '../assets/dp.jpeg';
import './Landing.css';

function Landing() {
  return (
    <div className="landing" style={{marginTop:'80px',fontFamily:'Karla'}}>
      <img src={profilePhoto} alt="Saumya Singh" className="profile-photo" />
      <div className="intro">
        <p>
          Hello! I am Saumya Singh, a passionate researcher and developer. This site showcases my journey, projects, and interests.
        </p>
        <p>
          Here, you will find information about my education, the projects I have worked on, and my hobbies. Feel free to explore and connect with me!
        </p>
      </div>
    </div>
  );
}

export default Landing;
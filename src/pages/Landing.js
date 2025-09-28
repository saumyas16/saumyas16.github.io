import React from 'react';
import profilePhoto from '../assets/blobdp.png';
import { Grid, Typography } from '@mui/material';
import './Landing.css';

function Landing() {
  return (
    <div className="landing" style={{marginTop:'80px',fontFamily:'Karla'}}>
      <Grid container justifyContent="center" alignItems="center" marginLeft="40px" marginRight="40px">
        <Grid item size={5}>
          <img src={profilePhoto} alt="Saumya Singh" className="profile-photo" />
        </Grid>
        <Grid item size={7}>
            <Typography textAlign="left" sx={{fontFamily:'Karla'}}>
              Hello! I am Saumya Singh, a passionate researcher and developer. This site showcases my journey, projects, and interests.
            </Typography>
            <Typography textAlign="left" sx={{fontFamily:'Karla'}}>
              Here, you will find information about my education, the projects I have worked on, and my hobbies. Feel free to explore and connect with me!
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
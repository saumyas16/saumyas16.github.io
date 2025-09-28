import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Education() {
  return (
    <div style={{ marginTop: '10px', fontFamily: 'Karla' }}>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent sx={{ my: '10px' }} align="right">
            <Typography sx={{ fontFamily: 'Karla', color: '#fff', fontWeight: 600, fontSize: '1.1rem', letterSpacing: 1 }}>
              2022-2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" sx={{ fontFamily: 'Karla', color: '#90caf9', fontWeight: 700, fontSize: '1.4rem' }}>
              MSc Data and Decision Analytics
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontFamily: 'Karla', fontWeight: 800, color: '#b39ddb', fontSize: '1.1rem', mt: 0.5 }}>
              University of Southampton, UK
            </Typography>
            <Typography sx={{ fontFamily: 'Karla', color: '#ffd54f', fontWeight: 600, fontSize: '1.05rem', mt: 0.5 }}>
              Grade: <span style={{ color: '#fffde7', fontWeight: 700 }}>Distinction (85%)</span>
            </Typography>
            <Typography sx={{ fontFamily: 'Karla', color: '#b0bec5', fontSize: '1rem', mt: 0.5 }}>
              <span style={{ fontWeight: 600, color: '#80cbc4' }}>Modules:</span> Machine Learning, Data Mining, Bayesian Inference and Likelihood, Forecasting
            </Typography>
            <Typography sx={{ fontFamily: 'Karla', color: '#b0bec5', fontSize: '1rem', mt: 0.5 }}>
              <span style={{ fontWeight: 600, color: '#80cbc4' }}>Dissertation:</span> <span style={{ fontStyle: 'italic', color: '#fff' }}>"Development and implementation of a calendar scheduling algorithm"</span>
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontFamily: 'Karla', color: '#ffb300', fontWeight: 700, fontSize: '1.08rem', mb: 0.5 }}>
                Awards:
              </Typography>
              <List dense sx={{ pl: 2 }}>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="British Council Scholarship for Women in STEM (fully funded)" />
                </ListItem>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="Runner-up for the May Hicks Award by the OR Society (UK)" />
                </ListItem>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="Dean's List Award for outstanding achievement" />
                </ListItem>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="CORMSIS Excellence and Impact Award for the dissertation" />
                </ListItem>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="MSc Data and Decision Analytics prize for achieving the highest grade" />
                </ListItem>
              </List>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ my: '10px' }} align="right">
            <Typography sx={{ fontFamily: 'Karla', color: '#fff', fontWeight: 600, fontSize: '1.1rem', letterSpacing: 1 }}>
              2018-2022
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" sx={{ fontFamily: 'Karla', color: '#90caf9', fontWeight: 700, fontSize: '1.4rem' }}>
              BTech Aerospace Engineering
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontFamily: 'Karla', fontWeight: 800, color: '#b39ddb', fontSize: '1.1rem', mt: 0.5 }}>
              Indian Institute of Technology, Kanpur, India
            </Typography>
            <Typography sx={{ fontFamily: 'Karla', color: '#ffd54f', fontWeight: 600, fontSize: '1.05rem', mt: 0.5 }}>
              Grade: <span style={{ color: '#fffde7', fontWeight: 700 }}>Distinction (8.8)</span>
            </Typography>
            <Typography sx={{ fontFamily: 'Karla', color: '#b0bec5', fontSize: '1rem', mt: 0.5 }}>
              <span style={{ fontWeight: 600, color: '#80cbc4' }}>Modules:</span> Data Structures and Algorithm, Machine Learning, Data Mining, Database Systems
            </Typography>
            <Typography sx={{ fontFamily: 'Karla', color: '#b0bec5', fontSize: '1rem', mt: 0.5 }}>
              <span style={{ fontWeight: 600, color: '#80cbc4' }}>Minors:</span> Machine Learning Applications (CSE); Applied Mathematics (MTH)
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontFamily: 'Karla', color: '#ffb300', fontWeight: 700, fontSize: '1.08rem', mb: 0.5 }}>
                Awards:
              </Typography>
              <List dense sx={{ pl: 2 }}>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="Dr Rukmini Saraswat Gold Medal for best female all-rounder" />
                </ListItem>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="Kunwar Devendra Pratap Singh and Kunwarani Krishna Kumari Memorial Award" />
                </ListItem>
                <ListItem sx={{ color: '#bfae6a', fontWeight: 600, fontSize: '1rem', py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32, color: '#bfae6a' }}>
                    <EmojiEventsIcon fontSize="3" />
                  </ListItemIcon>
                  <ListItemText primary="Proficiency Medal for UG project" />
                </ListItem>
              </List>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Education;
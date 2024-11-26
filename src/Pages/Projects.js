import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import mweb from '../Assets/mycubeweb.png';
import mapp from '../Assets/mycubeApp.png';
import nlfw from '../Assets/nlfweb.png';
import bobby from '../Assets/bobby.png';
import cdat from '../Assets/cdat.jpg';

// Dummy Data (You can replace this with actual data)
const projects = [
  {
    id: 1,
    name: 'MyCubeEvents_Web',
    role: 'Full Stack Developer',
    techStack: ['React', 'Node.js', 'Firebase'],
    description: 'A project that involves building a web app for Events Ticket Booking.',
    image: mweb, // Replace with actual image URL
    liveLink: 'https://your-live-project-link.com', // Replace with live project link
  },
  {
    id: 2,
    name: 'MyCubeEvents_App',
    role: 'Full Stack Developer',
    techStack: ['Flutter', 'Firebase'],
    description: 'A mobile application built for Events Ticket Booking.',
    image: mapp, // Replace with actual image URL
    liveLink: 'https://your-live-project-link.com', // Replace with live project link
  },
  {
    id: 3,
    name: 'Natural Life Foundation',
    role: 'Full Stack Developer',
    techStack: ['HTML','CSS','JS','MongoDB_Atlas','ExpressJS','NodeJS'],
    description: 'A WebSite built for Foundation with Paypal Donate Option.',
    image: nlfw, // Replace with actual image URL
    liveLink: 'https://your-live-project-link.com', // Replace with live project link
  },
  {
    id: 4,
    name: 'Bobby Butcher',
    role: 'Full Stack Developer',
    techStack:['Flutter', 'Firebase'],
    description: 'A mobile application built for Meat Purchasing App.',
    image: bobby, // Replace with actual image URL
    liveLink: 'https://your-live-project-link.com', // Replace with live project link
  },
  {
    id: 5,
    name: 'CD Automation',
    role: 'Full Stack Developer',
    techStack:['Flutter', 'Firebase'],
    description: 'A mobile application built for Meter Reading Note App.',
    image: cdat, // Replace with actual image URL
    liveLink: 'https://your-live-project-link.com', // Replace with live project link
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        backgroundColor: 'background.paper',
        minHeight: '100vh', // Ensures the content takes full height of the viewport
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>
        My Internship Projects
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id} display="flex" justifyContent="center">
            <Card sx={{ maxWidth: 345 }}>
              {/* Project Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Role:</strong> {project.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                  <strong>Description:</strong> {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                  <strong>Note:</strong> Not able to show the codes because of no permission to share the source code from my internship company side.
                </Typography>
              </CardContent>

              {/* Button to View Project */}
              {/* <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.liveLink}
                  target="_blank"
                  sx={{ textDecoration: 'none' }}
                >
                  View Live Project
                </Button>
              </Box> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

import React from 'react';
import { Typography, Box, Paper, useTheme } from '@mui/material';

const About = () => {
  // Access the current theme
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '80%',
        margin: '0 auto',
        padding: '40px 0',
        // Background color based on the theme
        backgroundColor: theme.palette.background.default,
        borderRadius: '8px',
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        About Me
      </Typography>
      
      <Paper
        sx={{
          padding: '20px',
          backgroundColor: theme.palette.background.paper, // Paper background color based on theme
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Who I Am
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          I am a Full Stack Web and Flutter Developer with a solid understanding of technologies such as HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js, Flutter, Firebase, and Git. Despite being a BE (EEE) graduate, I have always been passionate about developing applications and websites.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          My Journey
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          I completed a Full Stack Web Development course in 2022-2023, specializing in the MERN stack. During the course, I built several projects to enhance my skills and deepen my knowledge. These hands-on projects were an essential part of my learning journey.
          In 2024, I was fortunate to secure an internship at Cube AI Solutions, where I worked as a Full Stack Developer for both Android and Web Apps. The internship lasted for 6 months, and I gained invaluable experience by working on real-world projects and collaborating with experienced developers.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Always Evolving
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          I am always eager to learn new technologies and improve my skills to stay up-to-date with the latest trends in the development world.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;

import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import profile from '../Assets/bhuvneswar_profile-removebg-preview.png';

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        padding: 2,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on large screens
        }}
      >
        {/* Profile Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={profile} // Profile image URL passed as prop
            alt="Profile"
            sx={{
              width: { xs: '200px', sm: '250px', md: '60%' },
              height: 'auto',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto',
              backgroundColor: theme.palette.mode === 'light' ? 'lightblue' : 'white', // Background color based on theme
              padding: 1, // Optional padding for better spacing around the image
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size for the heading
            }}
          >
            Welcome to My Portfolio
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginBottom: 4,
              color: 'text.secondary',
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size for the subheading
            }}
          >
            Hi, I'm <strong>Bhuvneswar</strong>, a passionate backend, Flutter, and MERN developer.
            Explore my projects, skills, and certifications to learn more about me!
          </Typography>

          <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#projects"
                sx={{ paddingX: 3 }}
              >
                View Projects
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href="#contact"
                sx={{ paddingX: 3 }}
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, useTheme } from '@mui/material';
import intern from '../Assets/Screenshot_2024-11-25-14-35-59-46.jpg';
import course from '../Assets/Buvaneswaran S.jpg';

const certifications = [
  {
    id: 1,
    title: 'FullStack Web Development(MERN)',
    description: 'Certificate for completing Full Stack Web Development course in MASAI school at 2023.',
    imageUrl: course,
    navlink: 'https://drive.google.com/file/d/1tkHAuvbywFEhkLaAi42nDS73ShxOBgnX/view',
  },
  {
    id: 2,
    title: 'Web & Flutter Development Internship',
    description: 'Certificate for completing Web & App Development Internship at Cube AI Solutions.',
    imageUrl: intern,
    navlink: 'https://drive.google.com/file/d/1v--OqNuQKEzR4eyj-lwlTzCw7J07jkS2/view',
  },
];

const Certification = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '50px 0', backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Certifications
      </Typography>

      {/* Grid Layout for Certifications */}
      <Grid container spacing={4} justifyContent="center">
        {certifications.map((cert) => (
          <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 3,
                cursor: 'pointer',
                margin: '0 auto', // Center the card horizontally
              }}
              onClick={() => window.open(cert.navlink, '_blank')}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200, // Ensures consistent height
                  marginTop: '20px',
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.imageUrl}
                  alt={cert.title}
                  sx={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {cert.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cert.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certification;

import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import resume from '../Assets/resume.jpg';

const Resume = () => {
  const theme = useTheme();

  // Your resume Google Drive link
  const resumeLink = "https://drive.google.com/file/d/1vNZuWRo2AkRdzQs6CyIdxwR6GMXuatwO/view?usp=drivesdk";
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1vNZuWRo2AkRdzQs6CyIdxwR6GMXuatwO";

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        My Resume
      </Typography>
      {/* Resume Image */}
      <Box
        component="img"
        src={resume} // Use the same ID for image
        alt="Resume"
        sx={{
          width: '100%',
          height: 'auto',
          marginBottom: 3,
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          href={resumeLink}
          target="_blank"
          sx={{ paddingX: 4 }}
        >
          View
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href={resumeDownloadLink}
          sx={{ paddingX: 4 }}
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;

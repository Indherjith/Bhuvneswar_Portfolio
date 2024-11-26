import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, useTheme } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setSnackbarMessage('Please fill out all fields!');
      setSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // EmailJS configuration
    const serviceId = 'service_vef4pj3'; // Replace with your EmailJS service ID
    const templateId = 'template_titv63g'; // Replace with your EmailJS template ID
    const publicKey = 'gpGZ7N6yf0J9WpdoL'; // Replace with your EmailJS user ID (found in EmailJS dashboard)

    const templateParams = {
      from_name: name, // Sender's name
      from_email: email, // Sender's email
      message, // Message body
    };
    
    // Send the email
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
    
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom color={theme.palette.text.primary}>
        Contact Me
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          color="primary"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="primary"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          color="primary"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginTop: '16px' }}
        >
          Send Message
        </Button>
      </form>

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

import { Box, Typography, IconButton, Grid, Link, useTheme } from '@mui/material';
import { LinkedIn, GitHub, Email, Phone, Home } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme(); // Use theme hook to access current theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,  // Accessing primary color
        color: theme.palette.primary.contrastText, // Text color that contrasts with the primary background
        padding: '24px 16px',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h6" gutterBottom>
        Get in Touch
      </Typography>

      {/* Grid Layout for Details */}
      <Grid container spacing={2} justifyContent="center">
        {/* Address */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <Home sx={{ marginRight: 1 }} />
            <Typography>9, Vasu Nagar, Villupuram, India</Typography>
          </Box>
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <Email sx={{ marginRight: 1 }} />
            <Typography>buvanesifet26@gmail.com</Typography>
          </Box>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <Phone sx={{ marginRight: 1 }} />
            <Typography>+91 8072 454 199</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box mt={2} mb={2}>
        <Typography variant="subtitle1" gutterBottom>
          Connect with Me
        </Typography>
        <Box>
          <IconButton
            component={Link}
            href="https://linkedin.com/in/bhuvanesh26"
            target="_blank"
            rel="noopener"
            sx={{ color: 'inherit' }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component={Link}
            href="https://github.com/indherjith"
            target="_blank"
            rel="noopener"
            sx={{ color: 'inherit' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:your.buvanesifet26@gmail.com"
            sx={{ color: 'inherit' }}
          >
            <Email />
          </IconButton>
          <IconButton
            component={Link}
            href="tel:+918072454199"
            sx={{ color: 'inherit' }}
          >
            <Phone />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2">
        © {new Date().getFullYear()} Bhuvneswaran. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

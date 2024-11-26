import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from './Pages/Home.js';
import Contact from './Pages/Contact'; 
import About from './Pages/About';
import Certification from './Pages/Certification.js'
import Skill from './Pages/Skill.js';
import Footer from './Pages/Footer.js';
import Projects from './Pages/Projects.js';
import Resume from './Pages/Resume.js';  // Import the new Resume component
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
} from '@mui/material';
import { Brightness4, Brightness7, Menu, Home as HomeIcon, Info, Work, ContactMail, School, Verified, Description } from '@mui/icons-material';
import { Link } from 'react-scroll'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#9c27b0',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, target: 'home' },
    { text: 'About', icon: <Info />, target: 'about' },
    { text: 'Projects', icon: <Work />, target: 'projects' },
    { text: 'Skills', icon: <School />, target: 'skills' },
    { text: 'Certifications', icon: <Verified />, target: 'certifications' },
    { text: 'Resume', icon: <Description />, target: 'resume' },  // Added Resume section
    { text: 'Contact', icon: <ContactMail />, target: 'contact' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Navbar */}
        <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, zIndex: 1201 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => toggleDrawer(false)}
                >
                  <Button color="inherit">{item.text}</Button>
                </Link>
              ))}
            </Box>
            {/* Menu Icon for Small Screens */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              color="inherit"
              onClick={() => toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
            <Box display="flex" alignItems="center" ml={2}>
              <IconButton color="inherit" onClick={toggleTheme}>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <Switch checked={darkMode} onChange={toggleTheme} />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer for Small Screens */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List sx={{ paddingTop: '65px' }}>
              {navItems.map((item) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Link
                        to={item.target}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => toggleDrawer(false)}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text} />
                        </Box>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box sx={{ flex: 1, paddingTop: '64px' }}>
          {/* Sections with IDs */}
          <Box id="home" sx={{ backgroundColor: theme.palette.background.default, padding: '20px 0 0 0' }}>
            <Home />
          </Box>
          <Box id="about" sx={{ backgroundColor: theme.palette.background.paper, padding: '20px 0 0 0' }}>
            <About />
          </Box>
          <Box id="projects" sx={{ backgroundColor: theme.palette.background.default, padding: '20px 0 0 0' }}>
            <Projects />
          </Box>
          <Box id="skills" sx={{ backgroundColor: theme.palette.background.paper, padding: '20px 0 0 0' }}>
            <Skill />
          </Box>
          <Box id="certifications" sx={{ backgroundColor: theme.palette.background.default, padding: '20px 0 0 0' }}>
            <Certification />
          </Box>
          <Box id="resume" sx={{ backgroundColor: theme.palette.background.paper, padding: '20px 0 0 0' }}>
            <Resume /> {/* Add Resume section here */}
          </Box>
          <Box id="contact" sx={{ backgroundColor: theme.palette.background.paper, padding: '20px 0 0 0' }}>
            <Contact />
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;

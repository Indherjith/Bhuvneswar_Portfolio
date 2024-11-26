import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, useTheme } from '@mui/material';

const skills = [
  { name: 'ReactJS', image: 'https://reactjs.org/logo-og.png' },
  { name: 'NodeJS', image: 'https://www.liblogo.com/img-logo/no6273n057-node-js-logo-nodejs-transparent-logo-google-search.png' },
  { name: 'ExpressJS', image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
  { name: 'HTML', image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
  { name: 'CSS', image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
  { name: 'JavaScript', image: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
  { name: 'MongoDB', image: 'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg' },
  { name: 'Firebase', image: 'https://firebase.google.com/images/brand-guidelines/logo-logomark.png' },
  { name: 'Flutter', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
  { name: 'Git', image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
  { name: 'GitHub', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Material-UI', image: 'https://mui.com/static/logo.png' },
  { name: 'ChakraUI', image: 'https://image.pngaaa.com/704/7959704-middle.png' },
  { name: 'Razorpay', image: 'https://th.bing.com/th/id/OIP.1nEfALK6hoDBZmbwKOhe9gHaEc?rs=1&pid=ImgDetMain' },
  { name: 'PayPal', image: 'https://www.paypalobjects.com/webstatic/icon/pp258.png' },
];

const Skill = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '50px 0', backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 250, margin: '0 auto', textAlign: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="100"
                image={skill.image}
                alt={skill.name}
                sx={{
                  objectFit: 'contain',
                  marginTop: '10px',
                  maxHeight: '120px',
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;

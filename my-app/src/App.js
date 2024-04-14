import { makeStyles } from '@material-ui/core';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import "./App.css";
import cloudImage from './images/cloud.png';
import mountainImage from './images/mountain.png';
import smilingImage from './images/smiling-modified.png';

const useStyles = makeStyles((theme) => ({
  menuItems: {
    cursor: 'pointer', 
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%', 
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
          <AppBar position="static" style={{backgroundColor:'#66BFBF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className={classes.menuContainer}>
            <Typography variant="h6" style={{marginRight:'32px',}} className={classes.menuItems}>home</Typography>
            <Typography variant="h6" style={{marginRight:'32px'}}  className={classes.menuItems}>about</Typography>
            <Typography variant="h6" style={{marginRight:'32px'}}  className={classes.menuItems}>portfolio</Typography>
            <Typography variant="h6" style={{marginRight:'32px'}} className={classes.menuItems}>blog</Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
    <div class="top-container">
    <img class="top-cloud" src={cloudImage} alt="cloud"/>
      
    <h1>I'm Nobu</h1>
    <h2>a developer.</h2>
    <img class="bottom-cloud" src={cloudImage} alt="cloud-img"/>
      <img src={mountainImage} alt="mountain-img"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"/>
    </div>

    <div class="middle-container">
      <div class="profile">
        <img class="face" src={smilingImage}alt="Smiling picture of Nobubele Mpande"/>
        <h2>Hello.</h2>
        <p class="intro">I love mathematics and the use of code to express whatever one might think of, be it an idea for a blog post or a mathematical equation that improves a business' online system. That is why I chose to major in Computer Science and Computational Applied Mathematics as a final year student at the University of Witwatersrand.</p>
      </div>
      <hr/>
      <div class="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
          <img class="program" src="https://media4.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e4786hxn37blj0q61bsqa5fnvgadold5iv9s2bzxt4v&rid=giphy.gif&ct=s" alt=" HTML tag"/>
          <h3>Programming</h3>
          <p class="skill1"> I fell in love with programming from the day I did my first project using Scratch in 2016. Since then, I have become a multilingual young woman with experience in Web development using HTML5 and CSS3, App development with Java, PHP and MYSQL. I have also learnt how to use programming languages such as Python and Mathematica to solve data related problems with the help of mathematical modelling.</p>
        </div>
        <div class="skill-row">
          <img class="team" src="https://media2.giphy.com/media/Q2tN4Ewh5uUtlWDgoI/giphy.gif?cid=ecf05e47gjdjga4x9knigc0gm8ff2dgowtnlfbky9a2egh9v&rid=giphy.gif&ct=s" alt="Public speaking picture"/>
          <h3>Team Work</h3>
          <p class="skill2">Over the course of the years, I worked with people either in a school project or in a netball team. I had the priviledge of leading some of the teams I was put in and that allowed me to garner good leadership skills. However, the importance of listening to other people and allowing to be led without shrinking yourself or your ideas is one of the top skill I believe is important when working in a team.</p>
        </div>
      </div>
      <hr class="bottom"/>
      <div class="contact-me">
        <h2>Get In Touch</h2>
        <h3>I am available websites creation,social media marketing and data analysis</h3>
        <p class="contact-message">If you would like to know more about some of the cool projects I have done and/or hire me, please get in touch.</p>
        <a class="btn" href="mailto:nobumpande28@gmail.com">CONTACT ME</a>
      </div>
    </div>

    <div class="bottom-container">
      <a class="footer-link" href="http://www.linkedin.com/in/nobubele-mpande-240a66212">LinkedIn</a>
      <a class="footer-link" href="https://www.instagram.com/simply.bellexx/">Instagram</a>
      <a class="footer-link" href="https://nobubelempande.github.io/CV/">Website</a>
      <p class="copyright">© Nobubele Mpande.</p>
    </div>



    </div>
  );
}

export default App;

import { makeStyles } from '@material-ui/core';
import { AppBar, Container, Toolbar } from '@mui/material';
import { default as React, } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { default as About } from './pages/About';
import { default as Home } from './pages/Home';
import { default as Portfolio } from './pages/Portfolio';


const useStyles = makeStyles((theme) => ({
  menuItems: {
    cursor: 'pointer',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'right',
    width: '100%',
  },
}));


const App = () => {
  const classes = useStyles();
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className={classes.menuContainer}>
              <Link to="/" className={classes.menuItems}>home</Link>
              <a href="#about" className={classes.menuItems} onClick={scrollToAboutSection}>about</a>
              <a href="#portfolio" className={classes.menuItems} onClick={scrollToAboutSection}>portfolio</a>
              <Link to="/blog" className={classes.menuItems}>blog</Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>

    </Router>

  );
};

export default App;
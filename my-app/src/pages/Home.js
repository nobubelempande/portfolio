import { makeStyles } from '@material-ui/core';
import React from 'react';
import "../App.css";
import HeroSection from '../components/HeroSection';
import Footer from '../molecules/Footer';
import AboutPage from './About';
import PortfolioPage2 from './Portfolio copy';


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


function HomePage() {
  const classes = useStyles();
  return (

    <><HeroSection />
    <AboutPage/>
    <PortfolioPage2/>
    <Footer/></>
    

  );
}

export default HomePage;
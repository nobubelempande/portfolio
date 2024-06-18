import { makeStyles } from '@material-ui/core';
import "../App.css";
import Smiling from '../images/smiling.jpeg';

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


function AboutPage() {
  function aboutContent() {
    return (
      <div >
        <p>My love affair with technology began in grade 5, with an old computer in my parents' room. I spent countless hours after school creating animations in PowerPoint and designing documents with Word Art and watermarks. I am Nobubele, a Full Stack Software Engineer passionate about crafting robust, user-friendly applications.</p>
        <p>I also have a keen interest in Data Science, which I explore in my free time. My background in Computer Science and Applied Mathematics from the University of the Witwatersrand (WITS) has equipped me with the analytical and technical skills to tackle complex problems. With over a year and a half of experience in the industry, I thrive on turning ideas into seamless digital solutions</p>

  <p>In my current role, I work across the full stack, developing both client-side and server-side applications. I'm adept at using frameworks like .Net, React Typescript and enjoy working with databases and APIs to create dynamic, responsive applications. My recent foray into Data Science has been exhilarating, where I've been learning about data transformations.</p>

  <p>Beyond coding, I'm a mathematics enthusiast. I am committed to sharing my love for math with the younger generation and spend my spare time tutoring Mathematics and Physical Sciences. Seeing my students grasp complex concepts and succeed is incredibly rewarding and fuels my passion for education.</p>
      </div>
    )
  }

;
    return (
      <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box', 
        backgroundColor:'#E5E5E5'
      }}
    >
      <div 
        style={{
          background: '#8FC1C1',
          margin: '50px 0', 
          display: 'flex',
          width: '80%', 
          height: '80vh', 
          borderRadius: '2px'
        }}
      >
            <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%', 
          height: '80vh', 
          borderRadius: '2px',
          padding: '20px',
          boxSizing: 'border-box'
        }}
      >
        <h1 style={{color:'#FF6F61',fontFamily: 'Montserrat, sans-serif'}}>About Me</h1>
        {aboutContent()}
      </div>
        </div>
      <div 
        style={{
          background: '#FF6F61',
          display: 'block',
          width: '300px',
          height: '60%',
          marginRight: '20px', 
          borderRadius: '2px',
          position: 'absolute',
          top: '0',
          left: 'calc(90%)', 
          transform: 'translateX(-60%)',
        }}
      />
      <div 
        style={{
          background: 'white',
          display: 'block',
          width: '20%',
          height: '50%',
          borderRadius: '2px',
          position: 'absolute',
          top: '20%', 
          left: 'calc(95%)',
          transform: 'translateX(-100%)'
        }}
      >
       <img className='hero-picture' src={Smiling} alt="cloud-img" />
       </div>
    </div>
    );
}

export default AboutPage;
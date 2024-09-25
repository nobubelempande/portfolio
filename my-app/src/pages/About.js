import { Box } from '@material-ui/core';
import "../App.css";
import Smiling from '../images/smiling.jpeg';

function AboutPage() {

  function aboutContent() {
    return (
      <div  style={{width:'70%',marginLeft:'24px',textAlign:'left' }}>
        <p>My love affair with technology began in grade 5, with an old computer in my parents' room. I spent countless hours after school creating animations in PowerPoint and designing documents with Word Art and watermarks. I am Nobubele, a Full Stack Software Engineer passionate about crafting robust, user-friendly applications.</p>
        <p>I also have a keen interest in Data Science, which I explore in my free time. My background in Computer Science and Applied Mathematics from the University of the Witwatersrand (WITS) has equipped me with the analytical and technical skills to tackle complex problems. With over a year and a half of experience in the industry, I thrive on turning ideas into seamless digital solutions</p>

  <p>Beyond coding, I'm a mathematics enthusiast. I am committed to sharing my love for math with the younger generation and spend my spare time tutoring Mathematics and Physical Sciences. Seeing my students grasp complex concepts and succeed is incredibly rewarding and fuels my passion for education.</p>
      </div>
    )
  }
    return (
      <Box
        id='about'
  style={{
    minHeight: '100vh',
    backgroundColor: '#E5E5E5',
  }}
>
  <div
    style={{
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignContent: 'center',
      boxSizing: 'border-box',
      width: '90%',
      minHeight: '80vh',
    }}
  >
    <div
      
      style={{
        background: '#A9C6C6',
        display: 'flex',
        flexDirection: 'column', 
        width: '70%',
        borderRadius: '2px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: '50px',
        padding: '10px',
        boxSizing: 'border-box', 
      }}
    >
      <div style={{ width: '100%' }}>
        {aboutContent()}
      </div>
    </div>

    <div
      style={{
        background: '#FF6F61',
        display: 'block',
        width: '25%',
        height: '60%',
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
        left: 'calc(90%)',
        transform: 'translateX(-100%)',
      }}
    >
      <img className='hero-picture' src={Smiling} alt="cloud-img" />
    </div>
  </div>
</Box>
    );
}

export default AboutPage;
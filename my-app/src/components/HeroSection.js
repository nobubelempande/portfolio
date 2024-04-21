import { Button, Grid } from '@material-ui/core';
import { TypeAnimation } from 'react-type-animation';
import HeroPicture from '../images/hero-picture.jpg';
import smilingImage from '../images/smiling-modified.png';


function HeroSection() {

    const scrollToAboutSection = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (


        <div className="App">
            <div className="hero-section">
                <img className='hero-picture' src={HeroPicture} alt="cloud-img" />
                <div className="text-overlay" >
                    <div className="content" style={{ textAlign: 'center', color: 'white' }}>
                        <Grid container direction='column'>
                            <Grid item >
                                <h1 style={{ fontSize: '3em', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', marginBottom: '20px', color: '#F5F5F5' }}>Hi, I'm Nobu Mpande</h1>
                                <div style={{ fontSize: '1.5em', fontFamily: 'Merriweather, serif', marginBottom: '30px', color: 'white' }}>
                                    <TypeAnimation
                                        sequence={[
                                            "A developer, data scientist, and creative. I specialize in web and app development, social media marketing, and data analysis.",
                                            1000,
                                        ]}
                                        speed={50} />
                                </div>
                            </Grid>
                            <Grid item >
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <div style={{ marginRight: '10px' }}>
                                        <Button onClick={scrollToAboutSection} style={{ backgroundColor: '#83CDCD', color: 'black', padding: '10px 20px', borderRadius: '12px', fontSize: '1.2em' }}>Read more</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </div>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet" />
            </div>

            <div className="middle-container" id="about">
                <div className="profile">
                    <img className="face" src={smilingImage} alt="Smiling picture of Nobubele Mpande" />
                    <h2>Hello.</h2>
                    <p className="intro">I love mathematics and the use of code to express whatever one might think of, be it an idea for a blog post or a mathematical equation that improves a business' online system. That is why I chose to major in Computer Science and Computational Applied Mathematics as a final year student at the University of Witwatersrand.</p>
                </div>
                <hr />
                <div className="skills">
                    <h2>My Skills.</h2>
                    <div className="skill-row">
                        <img className="program" src="https://media4.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e4786hxn37blj0q61bsqa5fnvgadold5iv9s2bzxt4v&rid=giphy.gif&ct=s" alt=" HTML tag" />
                        <h3>Programming</h3>
                        <p className="skill1"> I fell in love with programming from the day I did my first project using Scratch in 2016. Since then, I have become a multilingual young woman with experience in Web development using HTML5 and CSS3, App development with Java, PHP and MYSQL. I have also learnt how to use programming languages such as Python and Mathematica to solve data related problems with the help of mathematical modelling.</p>
                    </div>
                    <div className="skill-row">
                        <img className="team" src="https://media2.giphy.com/media/Q2tN4Ewh5uUtlWDgoI/giphy.gif?cid=ecf05e47gjdjga4x9knigc0gm8ff2dgowtnlfbky9a2egh9v&rid=giphy.gif&ct=s" alt="Public speaking picture" />
                        <h3>Team Work</h3>
                        <p className="skill2">Over the course of the years, I worked with people either in a school project or in a netball team. I had the priviledge of leading some of the teams I was put in and that allowed me to garner good leadership skills. However, the importance of listening to other people and allowing to be led without shrinking yourself or your ideas is one of the top skill I believe is important when working in a team.</p>
                    </div>
                </div>
                <hr className="bottom" />
                <div className="contact-me">
                    <h2>Get In Touch</h2>
                    <h3>I am available websites creation,social media marketing and data analysis</h3>
                    <p className="contact-message">If you would like to know more about some of the cool projects I have done and/or hire me, please get in touch.</p>
                    <a className="btn" href="mailto:nobumpande28@gmail.com">CONTACT ME</a>
                </div>
            </div>

            <div className="bottom-container">
                <a className="footer-link" href="http://www.linkedin.com/in/nobubele-mpande-240a66212">LinkedIn</a>
                <a className="footer-link" href="https://www.instagram.com/simply.bellexx/">Instagram</a>
                <a className="footer-link" href="https://nobubelempande.github.io/CV/">Website</a>
                <p className="copyright">© Nobubele Mpande.</p>
            </div>
        </div>

    );
};

export default HeroSection;
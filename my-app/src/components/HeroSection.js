import { Button, Grid } from '@material-ui/core';
import { TypeAnimation } from 'react-type-animation';
import HeroPicture from '../images/hero-picture.jpg';


function HeroSection() {

    const scrollToAboutSection = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (


        <><div className="App">
            <div className="hero-section">
                <img className='hero-picture' src={HeroPicture} alt="cloud-img" />
                <div className="text-overlay">
                    <div className="content" style={{ textAlign: 'center', color: 'white' }}>
                        <Grid container direction='column'>
                            <Grid item>
                                <h1 style={{ fontSize: '3em', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', marginBottom: '20px', color: '#F5F5F5' }}>Hi, I'm Nobu Mpande</h1>
                                <div style={{ fontSize: '1.5em', fontFamily: 'Merriweather, serif', marginBottom: '30px', color: 'white' }}>
                                    <TypeAnimation
                                        sequence={[
                                            "A developer, data scientist, and creative. I specialize in web and app development, content creation, and anything data related.",
                                            1000,
                                        ]}
                                        speed={50} />
                                </div>
                            </Grid>
                            <Grid item>
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

        </div></>
     

    );
};

export default HeroSection;
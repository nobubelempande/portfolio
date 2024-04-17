import { TypeAnimation } from 'react-type-animation';
import candleVideo from '../images/hero-picture.jpg';

function HeroSection() {
    return (


        <div className="hero-section">
            <div className="video-container">
                <img className='hero-picture' src={candleVideo} alt="cloud-img" />
            </div>
            <div className="text-overlay">
                <div className="content">
                    <h1 style={{ fontFamily: 'Sacramento, cursive' }}>I'm Nobu</h1>
                    <div>
                        <TypeAnimation
                            sequence={[
                                "a creator",
                                1000,
                                "data scientist",
                                1000,
                                " a developer",
                                1000,


                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;
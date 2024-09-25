import { Box } from "@material-ui/core";
import React from "react";

function PortfolioPage2() {
    return(
      <Box
        id='portfolio'
  style={{
    minHeight: '100vh',
    backgroundColor: 'white',
  }}
>
<div className="skills-cloud">
      <span className="skill" style={{ fontSize: '2.5em', top: '10%', left: '15%' }}>WEB DEVELOPMENT</span>
      <span className="skill" style={{ fontSize: '2em', top: '20%', left: '65%' }}>MACHINE LEARNING</span>
      <span className="skill" style={{ fontSize: '1.8em', top: '40%', left: '25%' }}>VIDEOGRAPHY</span>
      <span className="skill" style={{ fontSize: '2.2em', top: '50%', left: '50%' }}>CODING</span>
      <span className="skill" style={{ fontSize: '1.5em', top: '70%', left: '30%' }}>APP DEVELOPMENT</span>
      <span className="skill" style={{ fontSize: '1.2em', top: '15%', left: '80%' }}>CSS</span>
      <span className="skill" style={{ fontSize: '1.2em', top: '55%', left: '75%' }}>HTML</span>
      <span className="skill" style={{ fontSize: '1.1em', top: '65%', left: '15%' }}>JavaScript</span>
      <span className="skill" style={{ fontSize: '1.1em', top: '45%', left: '10%' }}>SQL</span>
      <span className="skill" style={{ fontSize: '1.3em', top: '25%', left: '45%' }}>Python</span>
      <span className="skill" style={{ fontSize: '1.6em', top: '35%', left: '75%' }}>PLAYWRIGHT</span>
      <span className="skill" style={{ fontSize: '1.4em', top: '25%', left: '15%' }}>C#</span>
      <span className="skill" style={{ fontSize: '1.1em', top: '5%', left: '55%' }}>Typescript</span>
      <span className="skill" style={{ fontSize: '1.4em', top: '85%', left: '40%' }}>JAVA</span>
      <span className="skill" style={{ fontSize: '1.4em', top: '85%', left: '60%' }}>.Net</span>
      <span className="skill" style={{ fontSize: '1.4em', top: '70%', left: '80%' }}>Android</span>
      <span className="skill" style={{ fontSize: '1.4em', top: '85%', left: '75%' }}>React</span>
    </div>
</Box>
    )
}

export default PortfolioPage2;
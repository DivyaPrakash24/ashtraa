import React from "react";
import Four from '../assets1/5.jpg';
import '../styles/About.css';

const About = () => {
    return(
      <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Four})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          <b>Our Mission</b>
          <br></br>
            To be a pioneer in its sector by investing  in people and technology and by producing  quality products at affordable prices.
            To ensure the highest level of customer satisfaction.
            To be at peace with nature by creating and promoting environmental awareness.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <b>Our Vision</b>
          <br></br>
            To Create models in the sector with its superior qualified team,its modern infrastructure and advanced applications and to be one contemporary institution that are addressed as reference in this field.
            To be a wild brand which is respectful to the environment and human,compatible with the technology which is reaching power to set world standards in production and increasing the competitiveness of our country at the international level.
            Since the foundation of our company, to offer all our knowledge in time in better quality and with constantly updated technology, without compromising quality of service and to pass on to future generations by combining our knowledge and experience with our accumulation.
        </p>
      </div>
    </div>
    );
}

export default About;
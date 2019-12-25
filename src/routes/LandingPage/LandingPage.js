import React, { Component } from "react";
import "./LandingPage.scss";
export default class LandingPage extends Component {

  render() {
    const h2 = '{ Web Developer }'
    return (
      <div className="homepage-info">
        <div className="first-section">
          <h1> Joey Romo </h1>
          <img src="https://i.imgur.com/jEoyqgx.jpg" alt="joey romo" />
          <h2>{h2}</h2>
        </div>
        <div className="landing-page-bg"></div>
        <div className="second-section">
          <div className="h3-container">
          <h3>Skills</h3>
          </div>
          <ul className="skills-list">
            <li><span className="label">Languages:</span> JavaScript</li>
            <li>
            <span className="label">Front-end:</span> JavaScript, React, Redux, React Router, AJAX, Enzyme,
              jQuery, HTML5, CSS3
            </li>
            <li>
              <span className="label">Back-end:</span> Node.js, MongoDB, Mocha & Chai, Express, REST APIs
            </li>
            <li><span className="label">Other:</span> Git, Github, Heroku, Zeit</li>
          </ul>
        </div>
      </div>
    );
  }
}

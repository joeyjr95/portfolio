import React from "react";
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin,
  faGithubSquare,
 } from "@fortawesome/free-brands-svg-icons";
export default class Footer extends React.Component {
  render() {
    return (
        <>
      <footer className="footer">
        <div className="contact-info">
            <a href="mailto:joeyjr95@gmail.com" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
            <a href="tel:+17036080673" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faMobileAlt} className="icon" /> </a> 
            <a href="https://www.linkedin.com/in/joey-romo-85a00a53/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon"/> </a> 
            <a href="https://github.com/joeyjr95" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className="icon"/></a>
        </div>
             
      </footer>
      </>
    );
  }
}
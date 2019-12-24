import React from "react";
import { Link } from 'react-router-dom';
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
            <Link to="mailto:joeyjr95@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className="icon"/></Link>
            <Link to="tel:+17036080673"> <FontAwesomeIcon icon={faMobileAlt} className="icon" /> </Link> 
            <Link to="https://www.linkedin.com/in/joey-romo-85a00a53/"><FontAwesomeIcon icon={faLinkedin} className="icon"/> </Link> 
            <Link to="https://github.com/joeyjr95"><FontAwesomeIcon icon={faGithubSquare} className="icon"/></Link>
        </div>
             
      </footer>
      </>
    );
  }
}
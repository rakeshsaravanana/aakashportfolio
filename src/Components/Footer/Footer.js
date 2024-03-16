import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faGoogle} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-links'>
              <li><a href='#home' className='footlink'>Home</a></li>
              <li><a href='#about' className='footlink'>About</a></li>
              <li><a href='#work' className='footlink'>Work</a></li>
              <li><a href='#portfolio' className='footlink'>Portfolio</a></li>
              <li><a href='#contact' className='footlink'>Contact</a></li>
         </div>
        <div className='socialmedia'>
          <h2 className='queries'>Get in touch</h2>
          <a href='https://www.instagram.com/rakesh_sarav27/'><FontAwesomeIcon icon={faInstagram} className='media instagram' /> </a>
          <a href='#home'  className='emailid'><FontAwesomeIcon icon={faGoogle} className='media gmail'/>rakeshofficial2707@gmail.com</a>
        </div>

     </div>
        
        
  )
}

export default Footer;
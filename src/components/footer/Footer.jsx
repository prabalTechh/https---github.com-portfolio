import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="notsocool">
    <a href="#" className="footer_logo">SavitriSolutions</a>
    
    <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
    <a className="run" href="https://www.instagram.com/"><BsInstagram /></a>
        <a className="run" href="https://www.facebook.com/"><BsFacebook/></a>
        <a className="run" href="https://www.linkedin.com/"><BsLinkedin/></a>
        <a className="run" href="https://github.com/"><FaGithub /></a>
    </div>
    <div className="footer__copyright">
        <small>@pcContent. ALL RIGHTS RESERVED</small>
    </div>
    
    </footer>
  )
}

export default Footer

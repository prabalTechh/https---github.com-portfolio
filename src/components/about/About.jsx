import React from 'react'
import './about.css'
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


function About() {
  return (
    <section className="Home">
      <h1 className="heading"> About</h1>

      <div className="summary"><p className="summary_desc"> 
      Hello, I am from Katni madhya pradesh and i have Accomplished my Graduation Degree of Bachelor of Technology in Year 2023 with Computer Science Engineering  from Greater noida Institute of Technology Which is Affilated to Abdul Kalam Technical University.I do have a Strong foundation in Java and C++ , I am a versatile  Developer with expertise in both front-end and back-end technologies. I have a solid foundation in web development, allowing me to craft engaging user interfaces using HTML, CSS, and JavaScript. Strong knowledge of React concepts, such as components, state, and props., Do have a Foundation of Node.js and databases. I can develop and maintain entire web applications, guaranteeing smooth functionality and top-notch user experiences. I thrive on problem-solving and can easily adapt to evolving technologies. Collaboration with cross-functional teams is one of my strengths, and I'm passionate about bringing creative digital solutions to fruition.
      </p></div>

      <div className="links" >
        <a className="run" href="https://www.instagram.com/"><BsInstagram /></a>
        <a className="run" href="https://www.facebook.com/"><BsFacebook/></a>
        <a className="run" href="https://www.linkedin.com/"><BsLinkedin/></a>
        <a className="run" href="https://github.com/"><FaGithub /></a>
      </div>

    </section>
  )
}

export default About;

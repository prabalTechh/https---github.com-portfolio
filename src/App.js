import React from 'react'
import Header from './components/header/Header.jsx'
import './index.css'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Project from './components/projects/Project.jsx'
import Contact from "./components/contact/Contact.jsx"
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
function App() {
  return (
  <>
    <Navbar/>
     <Header />
     <About   />
     <Skills />
     <Project/>
     <Contact />
     <Footer />
     
  </>
  )
}

export default App



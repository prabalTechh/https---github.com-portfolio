import React from 'react'
import './navbar.css'
// import {AiOutlineHome} from 'react-icons/ai';
import {BiUserCheck} from 'react-icons/bi';
import {GrPersonalComputer} from 'react-icons/gr';
import {IoIosGitNetwork} from 'react-icons/io';
import {AiFillPhone} from 'react-icons/ai'


const Navbar = () => {
  return (
    <nav >
    

    {/* <a href="/" className="active" ><AiOutlineHome /></a> */}
    <a href="#about"><BiUserCheck/></a>
    <a href="#skills"><GrPersonalComputer/></a>
    <a href="projects"><IoIosGitNetwork/></a>
    <a href="contact"><AiFillPhone/></a>
      
    </nav>
  )
}

export default Navbar

import React from 'react'
import './header.css'

function Header() {
  return (
    <section className="main">
    <div className="triangle">
     <h4 className="greet">Hello  &nbsp; I'm</h4>
     <h2 className="myname">Prabal Chanpuria</h2>
     <h1 className="domain"> Developer</h1>
     </div>

     <div className="myimg">
      <img  src="/assets/ProfilePicturea.png" alt="img" className="img" />
     </div>

    </section>

  )
}

export default Header

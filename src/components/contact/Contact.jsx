import React from 'react'
import "./contact.css";

function Contact() {
  return (
    <div className="container">
    <h1>Contact </h1>
    <form className="contact-form" action="#" method="post">
        <div className="form-group">
            <label for="name" >Name</label>
            <input type="text" id="name" name="name" required placeholder="YourName" />
        </div>
        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required  placeholder="xyz@gmail.com"/>
        </div>
        <div className="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required placeholder="//Type here"></textarea>
        </div>
        <button type="submit" className="submit-btn">Send</button>
    </form>
</div>
  )
}

export default Contact

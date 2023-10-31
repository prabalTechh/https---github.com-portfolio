import React from 'react'
import './skills.css'

function Skills() {
  return (
    <section className="skill">
    <h2 className="skillss">Proficient In</h2>
      <div className="first">
            <img src="/assets/java.png" alt="java" />
           <div> <h2 className="lala">Java</h2>
            <p className="lalala">Java is a widely-used, platform-independent programming language known for its "write once, run anywhere" capability. It's versatile and used in web applications, software development, and Android app creation. Java prioritizes security and offers a rich ecosystem of libraries and frameworks, making it a reliable choice for diverse applications.</p>
            </div>
      </div>
      <div className="first">
            <img src="/assets/js.png" alt="javaScript" />
           <div> <h2 className="lala">JavaScript</h2>
            <p className="lalala">JavaScript is a versatile, high-level programming language used for web development. It enables interactive and dynamic website functionality, with a vast ecosystem of libraries and frameworks. JavaScript runs in web browsers, empowering developers to create engaging user interfaces and responsive web applications. It's a fundamental technology for modern web development.</p>
            </div>
      </div>
      <div className="first">
            <img src="/assets/node.png" alt="nodejs" />
           <div> <h2 className="lala">NodeJs</h2>
            <p className="lalala">Node.js is an open-source, server-side runtime environment that allows developers to run JavaScript outside the web browser. It is highly efficient for building scalable and networked applications. Node.js leverages the event-driven, non-blocking I/O model, making it suitable for real-time applications and APIs. With a rich package ecosystem through npm, it's a popular choice for creating server-side applications and microservices.</p>
            </div>
      </div>
      <div className="first">
            <img src="/assets/react.png" alt="reactjs" />
           <div> <h2 className="lala">ReactJs</h2>
            <p className="lalala">React.js is an open-source JavaScript library for building user interfaces. Developed by Facebook, it offers a component-based architecture, enabling developers to create reusable UI components. React simplifies the process of updating and rendering components, making it a popular choice for building interactive and dynamic web applications with a focus on a responsive user experience.</p>
            </div>
      </div>

      <div className="first">
            <img src="/assets/sql.png" alt="mysql" />
           <div> <h2 className="lala">MySql</h2>
            <p className="lalala">MySQL is an open-source relational database management system. It is widely used for data storage and retrieval in web applications. MySQL offers robust features, including SQL support, scalability, and high performance. It's a popular choice for businesses and developers seeking a reliable and efficient database solution for various applications.</p>
            </div>
      </div>

      <div className="first">
            <img src="/assets/block.png" alt="solidity" />
           <div> <h2 className="lala">BlockChain</h2>
            <p className="lalala">Blockchain is a decentralized, distributed ledger technology that securely records transactions across a network of computers. It uses cryptographic techniques to ensure data integrity and immutability. Blockchain's transparency and trustworthiness make it valuable for various applications, including cryptocurrency, supply chain management, and secure data sharing.</p>
            </div>
      </div>

    </section>
  )
}

export default Skills

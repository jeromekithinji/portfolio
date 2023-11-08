import React from 'react'
import "./about.scss"

const About = () => {
  return (
    <div className="about"> 
        <p className="page__header">
            About
        </p>
        <div className="about__texts">
            <p className="about__texts-text">
                My name is Jerome Kithinji. I’m a full-stack developer & freelance web developer. I create innovative solutions that bridge technology and user experience. I'm passionate about design, technology and basically everything that makes the internet tick.
            </p>
            <p className="about__texts-text">
                My work currently consists of a Software Development internship role at Telkom Kenya (working on their HRM & CRM systems). Alongside this, I actively participate in various freelance projects and side projects. I find this balancing act to be super resourceful in terms my learning as a developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.
            </p>
            <p className="about__texts-text">
                Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.
            </p>
        </div>
    </div>
  )
}

export default About
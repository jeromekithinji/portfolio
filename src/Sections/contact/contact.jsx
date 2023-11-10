import React from 'react'
import "./contact.scss"
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact">
        <p className="page__header">
            Contact
        </p>
        <p className="contact__text">
            Get In Touch
            I'd love to connect and explore exciting opportunities with you! Whether you have interesting projects, creative ideas, or just want to chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>
        <div className="contact__fields">
            <div className="contact__field">
                <div className="contact__field-icon__container">
                    <a
                        aria-label="Email Jerome"
                        href="mailto:kithinjijerome@gmail.com"
                        className="contact__field-icon__icon"
                    >
                        <FaEnvelope  />
                    </a>
                </div>
                <a
                    aria-label="Email Jerome"
                    href="mailto:kithinjijerome@gmail.com"
                    className="contact__field-text"
                >
                    kithinjijerome@gmail.com                        
                </a>
            </div>
            <div className="contact__field">
                <div className="contact__field-icon__container">
                    <a
                        aria-label="View Jerome on Github"
                        href="https://github.com/jeromekithinji"
                        className="contact__field-icon__icon"
                    >
                        <FaGithub />
                    </a>
                </div>
                <a
                    aria-label="View Jerome on Github"
                    href="https://github.com/jeromekithinji"
                    className="contact__field-text"
                >
                    github.com/jeromekithinji                       
                </a>
            </div>
            <div className="contact__field">
                <div className="contact__field-icon__container">
                    <a
                        aria-label="View Jerome on Github"
                        href="https://www.linkedin.com/in/jeromekithinji/"
                        className="contact__field-icon__icon"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <a
                    aria-label="View Jerome on Github"
                    href="https://www.linkedin.com/in/jeromekithinji/"
                    className="contact__field-text"
                >
                    linkedin.com/in/jeromekithinji/                      
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
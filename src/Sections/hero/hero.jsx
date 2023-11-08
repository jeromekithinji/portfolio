import React from 'react'
import './hero.scss'
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero__header">
            {/* <p className="hero__header-name">
                Hi, I'm Jerome.
            </p>
            <p className="hero__header-text">
                A full stack developer with a passion for creating beautiful and functional applications.
            </p> */}
            <Typewriter
                options={{
                    strings: [
                    "React Js Developer",
                    "UI Developer",
                    "Front End Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                }}
            />
        </div>
    </div>
  )
}

export default Hero
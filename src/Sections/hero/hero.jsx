import React from 'react'
import './hero.scss'
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero__header">
            <Typewriter
                options={{
                    strings: [
                    "Full Stack Web Developer",
                    "Software Engineer",
                    // "UI/UX Designer",
                    // "Bug killer",
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
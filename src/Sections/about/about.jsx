import React from 'react'
import "./about.scss"
import Marquee from "react-fast-marquee";
import { skillsData } from '../../assets/data/SkillsData';
import { skillsImage } from '../../utils/SkillsImage';

const About = () => {
  return (
    <div className="about"> 
        <p className="page__header">
            About
        </p>
        <div className="about__texts">
            <p className="about__texts-text">
                Hello! I'm Jerome Kithinji,  a Full Stack developer. I am passionate about all things technology and design, from software engineering to UI/UX. I enjoy building web applications and learning new technologies that bridge technology and user experience. I have over 3 years work experience as a developer in various projects in Europe and Africa; in the banking, telecommunications and service sectors.
            </p>
            <p className="about__texts-text">
                I am currently pursuing my Master's degree in Advanced Computer Science at Concordia University. Alongside, I actively participate in freelance projects, so if you need a website I'm your guy!
            </p>
            <p className="about__texts-text">
                When I’m not on the computer, I am at the gym, discovering places to eat, chilling at the park, or rewatching Marely & Me.
            </p>
        </div>
        <div className="about__content-marquee">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnClick={true}
                    pauseOnHover={true}
                    // autoFill={true}
                    delay={0}
                    play={true}
                    direction="right"
                >
                    {skillsData.map((skill, id) => (
                        <div className="skillBox" key={id} >
                            <img className='skillBox-image' src={skillsImage(skill)} alt={skill} />
                            <p className='skillBox-text'>{skill}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
    </div>
  )
}

export default About
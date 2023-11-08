import React from 'react'
import "./experience.scss"
import Marquee from "react-fast-marquee";
import { skillsData } from '../../assets/data/SkillsData';
import { skillsImage } from '../../utils/SkillsImage';

const Experience = () => {
  return (
    <div className="experience page-section">
        <p className="page__header">
            Experience
        </p>
        <div className="experience__content">
            <div className="experience__content-marquee">
                {/* <Marquee
                    gradient={false}
                    speed={100}
                    pauseOnClick={false}
                    // pauseOnHover={true}
                    autoFill={true}
                    delay={0}
                    play={true}
                    direction="right"
                >
                    {skillsData.map((skill, id) => (
                        <div className="skill--box" key={id} >
                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                            <p>{skill}</p>
                        </div>
                    ))}
                </Marquee> */}
            </div>
        </div>
    </div>
  )
}

export default Experience
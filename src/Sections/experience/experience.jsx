import React from 'react'
import "./experience.scss"
import Marquee from "react-fast-marquee";
import { skillsData } from '../../assets/data/SkillsData';
import { skillsImage } from '../../utils/SkillsImage';
import { experienceData } from "../../assets/data/experienceData"
import ExperienceList from '../../Components/experienceList/experienceList';

const Experience = () => {
  return (
    <div className="experience page-section">
        <p className="page__header">
            Experience
        </p>
        <div className="experience__content">
            <ExperienceList />
            {/* <div className="experience__content-marquee">
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
            </div> */}
        </div>
    </div>
  )
}

export default Experience
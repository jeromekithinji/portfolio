import React from 'react'
import "./experienceList.scss"
import { experienceData } from "../../assets/data/experienceData"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaPlay, FaCode } from 'react-icons/fa';
import { MdWork, MdSchool } from "react-icons/md";


const ExperienceList = () => {
  return (
    <div className='experienceList'>
        <VerticalTimeline
            lineColor={ 'rgb(0, 59, 92)' }
            animate={true}
        >
            {experienceData.map((item, index) =>
                <VerticalTimelineElement 
                    className='element-border' 
                    date={item.date}
                    icon={item.type === 'work' ? <MdWork /> : item.type === 'education' ? <MdSchool /> : <FaPlay />}
                    iconStyle={{ backgroundColor: 'white', color: 'rgb(0, 59, 92)', border: '3px solid rgb(0, 59, 92)', }}
                    contentStyle={{ color: 'rgb(0, 59, 92)', border: '2px solid rgb(0, 59, 92)'}}
                    contentArrowStyle={{ borderRight: '10px solid rgb(0, 59, 92)' }}
                >
                    <div className="vertical-timeline-element-heading">
                        <img className="timeLine-icon" src={item.image} />
                        <div className="vertical-timeline-element-heading-text">
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                        </div>
                    </div>
                    {item.details.map((point) =>
                        <span className="vertical-timeline-element-point">
                            <p>◉</p> 
                            <p>{point}</p>
                        </span>
                    )}
                </VerticalTimelineElement>
            )}
        </VerticalTimeline>
    </div>
  )
}

export default ExperienceList
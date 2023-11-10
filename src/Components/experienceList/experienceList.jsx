import React from 'react'
import "./experienceList.scss"
import { experienceData } from "../../assets/data/experienceData"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaPlay, FaCode } from 'react-icons/fa';



const ExperienceList = () => {
  return (
    <div>
        <VerticalTimeline
            lineColor={ 'rgb(0, 59, 92)' }
            animate={true}
        >
            {experienceData.map((item, index) =>
                <VerticalTimelineElement 
                    className='element-border' 
                    date={item.date}
                    // icon={<img className="timeLine-icon" src={item.image} />}
                    icon={<FaPlay />}
                    iconClassName= {{ borderColor: 'red' }}
                    iconStyle={{ backgroundColor: 'white', color: 'rgb(0, 59, 92)', border: '3px solid rgb(0, 59, 92)' }}
                    contentStyle={{ color: 'rgb(0, 59, 92)', border: '2px solid rgb(0, 59, 92)'}}
                    contentArrowStyle={{ borderRight: '10px solid rgb(0, 59, 92)' }}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
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
import React from 'react'
import "./singleProject.scss"
import { FaPlay, FaCode } from 'react-icons/fa';
import placeholder from "../../Assets/images/projects/Beer-Api.png"



const SingleProject = ({ id, name, desc, tags, code, demo, image, }) => {
  return (
            <div
                key={id}
                className='singleProject'
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        className='projectContent-name'
                    >
                        {name}
                    </h2>
                    <img src={image ? image : placeholder} alt={name} className='projectContent-image' />
                    <div className='project--showcaseBtn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className="project--showcaseBtn-iconBtn"
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className="project--showcaseBtn-icon"
                                aria-label='Demo'
                            />
                        </a>
                        {code && (
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                className="project--showcaseBtn-iconBtn"
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                            >
                                <FaCode
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                                    className="project--showcaseBtn-icon"
                                    aria-label='Code'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <p
                    className='project--desc'
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
  )
}

export default SingleProject
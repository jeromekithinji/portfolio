import React from 'react';
import "./projectList.scss";
import SingleProject from '../singleProject/singleProject';
import { projectsData } from '../../Assets/data/projectsData';

const ProjectList = () => {
  return (
    <div className='projectList'>
        {projectsData.length > 0 && (
            <div className="projects" id="projects">
                {/* <div className="projects__header">
                    <h1 className="projects__header-text" >Projects</h1>
                </div> */}
                <div className="projects__body">
                    <div className="projects__bodyContainer">
                        {projectsData.map(project => (
                            <SingleProject
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image}
                            />
                        ))}
                    </div> 
                </div>
            </div>
        )}
    </div>
  );
};

export default ProjectList;



{/* {projectsData.length > 3 && (
    <div className="projects--viewAll">
        <Link to="/projects">
            <button className="projects--viewAllBtn">
                View All
                <HiArrowRight className="projects--viewArr" />
            </button>
        </Link>
    </div>
)} */}
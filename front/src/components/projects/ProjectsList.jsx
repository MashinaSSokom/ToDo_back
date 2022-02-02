import React from 'react';
import ProjectsItem from "./ProjectsItem";



const ProjectsList = ({projects}) => {
    return (
        <div className={'project-list'}>
            {projects.map((project, idx) => <ProjectsItem project={project} number={idx} key={project.id}/>)}
        </div>
    )
}

export default ProjectsList;
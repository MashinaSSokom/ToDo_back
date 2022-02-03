import React from 'react';
import ProjectsItem from "./ProjectsItem";



const ProjectsList = ({projects, ...props}) => {

    return (
        <div className={'project-list'}>
            {projects.map((project, idx) => {
                if (project.isActive===true) {
                return <ProjectsItem project={project} deleteItem={props.deleteItem} number={idx} key={project.id}/>
            }})}
        </div>
    )
}

export default ProjectsList;
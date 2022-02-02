import React from 'react';
import {Link} from "react-router-dom";

const ProjectsItem = ({project, ...props}) => {
    return (
        <div className={'project-item '}>
            <span>#{props.number + 1} <Link to={`/projects/${project.id}`}> {project.name}</Link> </span>
            <p>{project.description}</p>
            <p>{project.isActive.toString()}</p>
        </div>
    )
}

export default ProjectsItem;
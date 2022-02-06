import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const ProjectsItem = ({project, ...props}) => {
    const navigate = useNavigate()
    const openProject = () => {
        navigate(`/projects/${project.id}`)
    }
    const deleteProject = async () => {
        props.deleteItem(project.id)
    }


    return (
        <div className={'project-item '}>
            <span>#{props.number + 1} <Link to={`/projects/${project.id}`}> {project.name}</Link> </span>
            <p>{project.description}</p>
            <p>{project.isActive.toString()}</p>
            <button onClick={openProject}>Открыть</button>
            <button onClick={deleteProject}>Удалить</button>
        </div>
    )
}

export default ProjectsItem;
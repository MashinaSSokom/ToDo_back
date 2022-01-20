import React from 'react';
import {Link} from "react-router-dom";

const ProjectsItem = ({project}) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td><Link to={`/projects/${project.id}`}> {project.name}</Link></td>
            <td>{project.description}</td>
            <td>{project.isActive.toString()}</td>
        </tr>
    )
}

const ProjectsList = ({projects}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>description</th>
                <th>is active</th>
            </tr>
            </thead>
            <tbody>
            {projects.map(project => <ProjectsItem project={project} key={project.id}/>)}
            </tbody>

        </table>
    )
}

export default ProjectsList;
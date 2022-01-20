import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import UsersList from "../components/UsersList";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
   const [projects, setProjects] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllProjects()
        console.log(response.data)
        setProjects([...projects, ...response.data.results])
    },[])

    return (
        <div className={'projects'}>
            <h1>Projects</h1>
            <ProjectsList projects={projects}/>
        </div>
    );
};

export default Projects;
import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import UsersList from "../components/UsersList";
import ProjectsList from "../components/ProjectsList";
import Title from "../components/UI/title/Title";

const Projects = () => {
   const [projects, setProjects] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllProjects()
        setProjects([...response.data.results])
    },[])

    return (
        <div className={'projects'}>
            <Title name={'Проекты'}/>
            <ProjectsList projects={projects}/>
        </div>
    );
};

export default Projects;
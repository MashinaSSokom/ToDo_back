import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import ProjectsList from "../components/projects/ProjectsList";
import Title from "../components/UI/title/Title";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllProjects()
        setProjects([...response.data.results])
    }, [])
    const deleteItem = async (id) => {
        const deleteResponse = await APIService.deleteProjectById(id)
        if (deleteResponse.status === 204) {
            const response = await APIService.getAllProjects()
            setProjects([...response.data.results])
        }
    }
    return (
        <div className={'projects'}>
            <Title name={'Проекты'}/>
            <ProjectsList projects={projects} deleteItem={deleteItem} setProjects={setProjects}/>
        </div>
    );
};

export default Projects;
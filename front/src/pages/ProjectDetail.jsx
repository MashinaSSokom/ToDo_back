import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import {useParams} from "react-router-dom";

const ProjectDetail = () => {
    const [project, setProject] = useState({})
    const params = useParams()
    useEffect(async () => {
        const response = await APIService.getProjectById({id: params.id})
        setProject(response.data)
    }, [])

    return (
        <div>
            <h1>Проект <u>{project.name}</u></h1>
            <p>Описание: {project.description}</p>
            <p>Ссылка: <a href={project.projectUrl}>{project.projectUrl}</a></p>
        </div>
    );
};

export default ProjectDetail;
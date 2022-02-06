import React, {Fragment, useEffect, useState} from 'react';
import APIService from "../API/APIService";
import {useParams} from "react-router-dom";
import Title from "../components/UI/title/Title";

const ProjectDetail = () => {
    const [project, setProject] = useState({})
    const params = useParams()
    useEffect(async () => {
        const response = await APIService.getProjectById({id: params.id})
        setProject(response.data)
    }, [])

    return (
        <div>
            <Title name={<>Проект <u>{project.name}</u></>}/>
            <p>Описание: {project.description}</p>
            <p>Ссылка: <a href={project.projectUrl}>{project.projectUrl}</a></p>
        </div>
    );
};

export default ProjectDetail;
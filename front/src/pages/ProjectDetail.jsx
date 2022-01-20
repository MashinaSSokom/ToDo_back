import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import {useParams} from "react-router-dom";

const ProjectDetail = () => {
    const [project, setProject] = useState({})
    const params = useParams()
    useEffect(async () => {
        console.log(params)
        const response = await APIService.getProjectById({id: params.id})
        console.log(response.data)
        setProject(response.data)
    }, [])

    return (
        <div>
            <h1>Проект {project.name}</h1>
        </div>
    );
};

export default ProjectDetail;
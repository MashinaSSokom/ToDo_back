import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import ProjectsList from "../components/ProjectsList";
import TodosList from "../components/TodosList";

const TODOs = () => {
    const [todos, setTODOs] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllTODOs()
        console.log(response.data)
        setTODOs([...todos, ...response.data.results])
    },[])

    return (
        <div className={'todos'}>
            <h1>TODOs</h1>
            <TodosList todos={todos}/>
        </div>
    );
};

export default TODOs;
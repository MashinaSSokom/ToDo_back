import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import ProjectsList from "../components/ProjectsList";
import TodosList from "../components/TodosList";
import Title from "../components/UI/title/Title";

const TODOs = () => {
    const [todos, setTODOs] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllTODOs()
        console.log(response.data)
        setTODOs([...response.data.results])
    },[])

    return (
        <div className={'todos'}>
            <Title name={'TODOs'}/>
            <TodosList todos={todos}/>
        </div>
    );
};

export default TODOs;
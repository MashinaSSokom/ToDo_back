import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import ProjectsList from "../components/projects/ProjectsList";
import TodosList from "../components/todos/TodosList";
import Title from "../components/UI/title/Title";

const TODOs = () => {
    const [todos, setTODOs] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllTODOs()
        setTODOs([...response.data.results])
    },[])

    const deleteItem = async (id) => {
        const deleteResponse = await APIService.deleteTODOById(id)
        if (deleteResponse.status === 204) {
            const response = await APIService.getAllTODOs()
            setTODOs([...response.data.results])
        }
    }

    return (
        <div className={'todos'}>
            <Title name={'TODOs'}/>
            <TodosList todos={todos} deleteItem={deleteItem}/>
        </div>
    );
};

export default TODOs;
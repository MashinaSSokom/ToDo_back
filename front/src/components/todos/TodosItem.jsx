import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const TodosItem = ({todo, ...props}) => {

    const navigate = useNavigate()

    const deleteProject = async () => {
        props.deleteItem(todo.id)
    }


    return (
        <div className={'todo-item '}>
            <span>#{props.number + 1}{todo.name}</span>
            <p>{todo.text}}</p>
            <p><Link to={`/projects/${todo.project.id}`}>Проект: {todo.project.name}</Link></p>
            <p>Активность: {todo.isActive.toString()}</p>
            <p>Создатель: {todo.creator.username}</p>
            <button onClick={deleteProject}>Удалить</button>
        </div>
    );
};

export default TodosItem;
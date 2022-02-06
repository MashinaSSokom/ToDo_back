import React from 'react';
import TodosItem from "./TodosItem";
import ProjectsItem from "../projects/ProjectsItem";


const TodosList = ({todos, ...props}) => {
    return (
        <div className={'todo-list'}>
            {todos.map((todo, idx) => {
                return <TodosItem todo={todo} key={todo.id} deleteItem={props.deleteItem} number={idx}/>
            })}
        </div>

    )
}

export default TodosList;
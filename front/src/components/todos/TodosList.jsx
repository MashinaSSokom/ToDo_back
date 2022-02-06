import React from 'react';
import TodosItem from "./TodosItem";
import ProjectsItem from "../projects/ProjectsItem";

// const TodosItem = ({todo}) => {
//     return (
//         <tr>
//             <td>{todo.id}</td>
//             <td>{todo.name}</td>
//             <td>{todo.text}</td>
//             <td>{todo.isActive.toString()}</td>
//             <td>{todo.creator.username}</td>
//             <td>{todo.project.name}</td>
//         </tr>
//     )
// }

const TodosList = ({todos, ...props}) => {
    return (
        <div className={'todo-list'}>
            {todos.filter(todo => todo.isActive === true).map((todo, idx) => {
                return <TodosItem todo={todo} key={todo.id} deleteItem={props.deleteItem} number={idx}/>
            })}
        </div>

    )
}

export default TodosList;
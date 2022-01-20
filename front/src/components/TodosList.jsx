import React from 'react';

const TodosItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>{todo.text}</td>
            <td>{todo.isActive.toString()}</td>
            <td>{todo.creator.username}</td>
            <td>{todo.project.name}</td>
        </tr>
    )
}

const TodosList = ({todos}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>text</th>
                    <th>is active</th>
                    <th>creator</th>
                    <th>project</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => <TodosItem todo={todo} key={todo.id}/>)}
            </tbody>

        </table>
    )
}

export default TodosList;
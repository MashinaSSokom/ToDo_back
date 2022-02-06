import React, {useState} from 'react';
import APIService from "../../API/APIService";

const CreateTodo = ({todos, setTODOs, currProjects, setCurrProjects, ...props}) => {

    const [todoProject, setTodoProject] = useState('')
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        let todo = {
            "name": name,
            "text": text,
            "project": parseInt(todoProject),
            "isActive": true,
            "creator": 1
        }
        const response = await APIService.createTODO({todo})
        if (response.status === 201) {
            setTODOs([...todos, todo])
        }
    }
    return (
        currProjects ?
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name={'name'} placeholder={'Название'} value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="text" name={'text'} placeholder={'Описание'} value={text}
                           onChange={(event) => setText(event.target.value)}/>
                    <select required={true} name={'projects'}
                            // defaultValue={currProjects.length ? currProjects[0].id : null}
                            onChange={(event) => setTodoProject(event.target.value)}>
                        {currProjects.map((currProject, idx) => <option value={currProject.id}
                                                                        key={currProject.id}>{currProject.name}</option>)}
                    </select>
                    <button type={"submit"}>Создать задачу</button>
                </form>
            </div>
            :
            <div></div>
    );
};

export default CreateTodo;
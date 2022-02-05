import React, {useContext, useEffect, useState} from 'react';
import {UsersContext} from "../../context";
import APIService from "../../API/APIService";

const CreateProject = () => {
    const {users, setUsers} = useContext(UsersContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [members, setMembers] = useState([])

    useEffect(async () => {
        if (users.length === 0) {
            const response = await APIService.getAllUsers()
            if (response.status === 200) {
                setUsers(response.data)
            }
        }

    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(members.map())

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name={'name'} value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="text" name={'description'} value={description}
                   onChange={(event) => setDescription(event.target.value)}/>
            <input type="text" name={'url'} value={url} onChange={(event) => setUrl(event.target.value)}/>
            <select multiple required={true} name={'members'}
                    onChange={(event) => setMembers([...event.target.selectedOptions])}>
                {users.map((user) => <option value={user.id} key={user.id}>{user.username}</option>)}
            </select>
            <button type={"submit"}>Создать проект</button>
        </form>
    );
};

export default CreateProject;
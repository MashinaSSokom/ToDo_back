import React, {useEffect, useState} from 'react';
import axios from "axios";
import APIService from "../API/APIService";
import UsersList from "../components/UsersList";
import Title from "../components/UI/title/Title";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllUsers()
        console.log(response.data)
        setUsers([ ...response.data])
    },[])

    return (
        <div className={'users'}>
            <Title name={'Пользователи'}/>
            <UsersList users={users}/>
        </div>
    );
};

export default Users;
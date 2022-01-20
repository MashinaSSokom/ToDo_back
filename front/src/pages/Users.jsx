import React, {useEffect, useState} from 'react';
import axios from "axios";
import APIService from "../API/APIService";
import UsersList from "../components/UsersList";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllUsers()
        console.log(response.data)
        setUsers([...users, ...response.data])
    },[])

    return (
        <div className={'users'}>
            <h1>Users</h1>
            <UsersList users={users}/>
        </div>
    );
};

export default Users;
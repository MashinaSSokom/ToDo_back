import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import APIService from "../API/APIService";
import UsersList from "../components/UsersList";
import Title from "../components/UI/title/Title";
import {UsersContext} from "../context";

const Users = () => {
    const {users, setUsers} = useContext(UsersContext)

    useEffect(async () => {
        const response = await APIService.getAllUsers()
        if (response.status === 200) {
            setUsers(response.data)
        }

    }, [])

    return (
        <div className={'users'}>
            <Title name={'Пользователи'}/>
            <UsersList users={users}/>
        </div>
    );
};

export default Users;
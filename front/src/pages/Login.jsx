import React, {useContext, useState} from 'react';
import APIService from "../API/APIService";
import {AuthContext} from "../context";
import axios from "axios";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const startLogin = async event => {
        event.preventDefault()
        const response = await APIService.login({login, password})
        const token = response.data.access
        const refresh = response.data.refresh
        if (!!token && !!refresh) {
            localStorage.setItem('token', 'Bearer ' + token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={event => startLogin(event)}>
                <input type="text" onChange={event => setLogin(event.target.value)} value={login}
                       placeholder="Введите логин"/>
                <input type="password" onChange={event => setPassword(event.target.value)} value={password}
                       placeholder="Введите пароль"/>
                <button type={"submit"}>Войти</button>
            </form>
        </div>
    );
};

export default Login;
import React, {useState} from 'react';
import APIService from "../API/APIService";

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

     const startLogin = async event => {
        event.preventDefault()
        await APIService.login({login, password})
    }

    return (
         <div>
            <h1>Страница для логина</h1>
            <form onSubmit={event => startLogin(event)}>
                <input type="text" onChange={event => setLogin(event.target.value)} value={login}  placeholder="Введите логин"/>
                <input type="password" onChange={event => setPassword(event.target.value)} value={password} placeholder="Введите пароль"/>
                <button type={"submit"}>Войти</button>
            </form> 
        </div>
    );
};

export default Login;
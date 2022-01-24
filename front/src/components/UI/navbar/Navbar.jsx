import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import axios from "axios";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = ''
        setIsAuth(false)
    }

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/users">Пользователи</Link>
                <Link to="/projects">Проекты</Link>
                <Link to="/todos">TODOs</Link>
                {isAuth?<a href={'#'} onClick={logout}>Выйти</a>:<Link to="/login">Войти</Link>}
            </div>
        </div>
    );
};

export default Navbar;
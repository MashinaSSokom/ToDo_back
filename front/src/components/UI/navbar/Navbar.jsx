import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/login">Войти</Link>
                <Link to="/users">Пользователи</Link>
                <Link to="/projects">Проекты</Link>
                <Link to="/todos">TODOs</Link>
            </div>
        </div>
    );
};

export default Navbar;
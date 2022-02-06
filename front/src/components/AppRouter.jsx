import React, {useContext, useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router"
import {AuthContext} from "../context";
import axios from "axios";


const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigation = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            axios.defaults.headers.common['Authorization'] = token
            setIsAuth(true)
            // navigation('/projects')
        }
    }, [])
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                {/*<Route path="*" to={'/projects'} element={<Navigate to={'/projects'}/>}/>*/}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                {/*<Route path="*" to={'/login'} element={<Navigate to={'/login'}/>}/>*/}
            </Routes>
    );
};

export default AppRouter;
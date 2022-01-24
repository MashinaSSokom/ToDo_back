import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router"
import {AuthContext} from "../context";


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)

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
                <Route path="*" to={'/projects'} element={<Navigate to={'/projects'}/>}/>
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
                <Route path="*" to={'/login'} element={<Navigate to={'/login'}/>}/>
            </Routes>
    );
};

export default AppRouter;
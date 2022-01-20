import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../router"
import Projects from "../pages/Projects";


const AppRouter = () => {
    return (
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component()}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="*" to={'/projects'} element={<Navigate to={'/projects'}/>}/>
            </Routes>
    );
};

export default AppRouter;
import logo from './logo.svg';
import './App.css';
import React from 'react'

import Footer from "./components/UI/footer/Footer";
import {BrowserRouter, useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {AuthContext, UsersContext} from "./context";
import Projects from "./pages/Projects";
import axios from "axios";

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            'users': [],
            'isAuth': false,
        }
        this.setIsAuth = this.setIsAuth.bind(this)
        this.setUsers = this.setUsers.bind(this)

    }

    setIsAuth(value) {
        this.setState({
            'isAuth': value
        })
    }

    setUsers(value) {
        this.setState({
            'users': [...value]
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{
                setIsAuth: this.setIsAuth,
                isAuth: this.state.isAuth
            }}>
                <UsersContext.Provider value={{
                    users: this.state.users,
                    setUsers: this.setUsers
                }}>
                    <div className={'App '}>
                        <div className={'Content'}>
                            <BrowserRouter>
                                <Navbar/>
                                <AppRouter/>
                            </BrowserRouter>
                        </div>
                        <Footer/>
                    </div>
                </UsersContext.Provider>
            </AuthContext.Provider>)
    }
}

export default App;

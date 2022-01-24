import logo from './logo.svg';
import './App.css';
import React from 'react'

import Footer from "./components/UI/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {AuthContext} from "./context";

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            'users': [],
            'isAuth': false,
        }
        this.setIsAuth = this.setIsAuth.bind(this)
    }

    setIsAuth(value) {
        this.setState({
            'isAuth': value
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{
                setIsAuth: this.setIsAuth,
                isAuth: this.state.isAuth
            }}>
                <div className={'App'}>

                    <BrowserRouter>
                        <Navbar/>
                        <AppRouter/>
                        <Footer/>
                    </BrowserRouter>

                </div>
            </AuthContext.Provider>
        )
    }
}

export default App;

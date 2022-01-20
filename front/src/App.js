import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from "axios";

import UsersList from "./components/UsersList";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar";

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            'users': []
        }
    }

    render() {
        return (
            <div className={'App'}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;

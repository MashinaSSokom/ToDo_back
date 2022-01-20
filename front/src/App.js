import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from "axios";

import UsersList from "./components/UsersList";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                let users = response.data
                this.setState({
                    'users': users
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className={'App'}>
                <BrowserRouter>
                    <Menu/>
                    {/*<UsersList users={this.state.users}/>*/}
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;

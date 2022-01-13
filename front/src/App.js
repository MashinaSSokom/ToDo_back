import logo from './logo.svg';
import './App.css';
import React from 'react'

import UsersList from "./components/UsersList";

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        const users = [
            {
                "id": 1,
                "password": "pbkdf2_sha256$320000$d2AdQVAXuWOXP4bX2h2MjZ$7J41nP79MbqiKRoKLlcPZ+T+gvB9HJPhq2IGUyodkho=",
                "last_login": "2022-01-13T06:46:15.797349Z",
                "is_superuser": true,
                "username": "admin",
                "first_name": "admin",
                "last_name": "admin",
                "is_staff": true,
                "is_active": true,
                "date_joined": "2022-01-13T06:45:39.098578Z",
                "role": "U",
                "email": "admmin@admin.admin",
                "user_permissions": []
            }
        ]
        this.setState(
            {
                'users': users
            }
        )
    }

    render() {
        return (
            <div className={'App'}>
                <UsersList users={this.state.users}/>
            </div>
        )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import {createContext} from "react";

export const AuthContext = createContext({'isAuth': false})
export const UsersContext = createContext({'users': []})
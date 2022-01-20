import axios from "axios";

export default class APIService {
    static async getAllUsers() {
        const response = await axios.get('http://127.0.0.1:8000/api/users/')
        return response
    }

    static async getAllProjects() {
        const response = await axios.get('http://127.0.0.1:8000/api/projects/')
        return response
    }

    static async getAllTODOs() {
        const response = await axios.get('http://127.0.0.1:8000/api/todos/')
        return response
    }
}
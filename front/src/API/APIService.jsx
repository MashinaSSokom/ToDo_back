import axios from "axios";

export default class APIService {
    static async getAllUsers() {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/`)
        return response
    }

    static async getAllProjects() {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/`)
        return response
    }

    static async getProjectById({id}) {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}/`)
        return response
    }

    static async deleteProjectById(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/projects/${id}/`)
        return response
    }

    static async getAllTODOs() {
        const response = await axios.get(`http://127.0.0.1:8000/api/todos/`)
        return response
    }

    static async login({login, password}) {
        const response = await axios.post('http://127.0.0.1:8000/api/token/',
            {"username": login, "password": password})
        return response
    }

    static async refreshToken({refreshToken}) {
        const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/',
            {"refreshToken": refreshToken})
        return response
    }

    static async createProject({project}) {
        const response = await axios.post('http://127.0.0.1:8000/api/projects/',
            project)
        return response
    }
}
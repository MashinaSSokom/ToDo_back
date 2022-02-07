import axios from "axios";

const API = 'http://127.0.0.1:8000/api/'

export default class APIService {
    static async getAllUsers() {
        const response = await axios.get(`${API}users/`)
        return response
    }

    static async getAllProjects() {
        const response = await axios.get(`${API}projects/`)
        return response
    }

    static async getProjectById({id}) {
        const response = await axios.get(`${API}projects/${id}/`)
        return response
    }

    static async deleteProjectById(id) {
        const response = await axios.delete(`${API}projects/${id}/`)
        return response
    }

    static async getAllTODOs() {
        const response = await axios.get(`${API}todos/`)
        return response
    }

    static async getTODOById({id}) {
        const response = await axios.get(`${API}todos/${id}/`)
        return response
    }

    static async deleteTODOById(id) {
        const response = await axios.delete(`${API}todos/${id}/`)
        return response
    }

    static async login({login, password}) {
        const response = await axios.post(`${API}token/`,
            {"username": login, "password": password})
        return response
    }

    static async refreshToken({refreshToken}) {
        const response = await axios.post(`${API}token/refresh/`,
            {"refreshToken": refreshToken})
        return response
    }

    static async createProject({project}) {
        const response = await axios.post(`${API}projects/`,
            project)
        return response
    }
     static async createTODO({todo}) {
        const response = await axios.post(`${API}todos/`,
            todo)
        return response
    }
}
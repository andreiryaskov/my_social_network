import axios from "axios";
import {UsersType} from "../redux/reducers/users-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '32ee0297-c510-4078-a2e1-5bee7eb21911'
    }
})

export const usersAPI = {
    getUsers() {
        return instance.get('users')
            .then(res => {
                return res.data
            })
    }
}
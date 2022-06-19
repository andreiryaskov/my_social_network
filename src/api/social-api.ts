import axios from "axios";
import {UsersType} from "../redux/reducers/users-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '32ee0297-c510-4078-a2e1-5bee7eb21911'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    getProfileUser(userId: string) {
        return instance.get
        (`profile/${userId}`)
            .then(res => {
                return res.data
            })
    },
    authMe() {
        return instance.get('/auth/me')
            .then(res => {
                return res.data
            })
    }
}
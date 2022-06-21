import axios from "axios";


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
    getProfileUser(userId: number) {
        return instance.get
        (`profile/${userId}`)
            .then(res => {
                return res.data
            })
    },
    authMe() {
        return instance.get(`/auth/me`)
            .then(res => {
                return res.data
            })
    },
    authLogin() {
        return instance.delete(`/auth/login`)
        .then(res => {
            return res.data
        })
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`)
            .then(res => {
                return res.data
            })
    },
    unFollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
            .then(res => {
                return res.data
            })
    },

}
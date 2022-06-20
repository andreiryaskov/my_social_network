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
    getProfileUser(userId: string) {
        return instance.get
        (`profile/${userId}`)
            .then(res => {
                return res.data
            })
    },
    authMe(endPoint: string) {
        return instance.get(`/auth/${endPoint}`)
            .then(res => {
                return res.data
            })
    },
    // authLogin(endPoint) {
    //     return instance.delete(`/auth/${endPoint}`)
    //     .then(res => {
    //         return res.data
    //     })
    // }
}
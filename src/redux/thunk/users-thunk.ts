import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {followingProgressAC, followUsersAC, getProfileUserAC, loaderAC, setUsersAC} from "../reducers/users-reducer";

export const usersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsersAC(data.items, data.totalCount))
            dispatch(loaderAC(false))
        })

}

export const getProfileUserTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.getProfileUser(userId)
        .then(data => {
            dispatch(getProfileUserAC(data))
            dispatch(loaderAC(false))
        })
}

export const followUserTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(followingProgressAC(userId, true))
    dispatch(loaderAC(true))
    usersAPI.follow(userId)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(followUsersAC(userId))
                dispatch(loaderAC(false))
                dispatch(followingProgressAC(userId, false))
            }
        })
}

export const unFollowUserTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(followingProgressAC(userId, true))
    dispatch(loaderAC(true))
    usersAPI.unFollow(userId)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(followUsersAC(userId))
                dispatch(loaderAC(false))
                dispatch(followingProgressAC(userId, false))
            }
        })
}
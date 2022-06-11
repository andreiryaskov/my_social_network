import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {getProfileUserAC, loaderAC, setUsersAC} from "../reducers/users-reducer";

export const usersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsersAC(data.items, data.totalCount))
            dispatch(loaderAC(false))
        })

}

export const getProfileUserTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.getProfileUser(userId)
        .then(data => {
            dispatch(getProfileUserAC(data))
            dispatch(loaderAC(false))
        })
}
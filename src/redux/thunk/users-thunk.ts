import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {setUsersAC} from "../reducers/users-reducer";

export const usersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsersAC(data.items, data.totalCount))
        })
}
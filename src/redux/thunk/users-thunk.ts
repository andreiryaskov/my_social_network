import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {setUsersAC} from "../reducers/users-reducer";

export const usersTC = () => (dispatch: Dispatch) => {
    usersAPI.getUsers()
        .then(data => {
            dispatch(setUsersAC(data.items))
        })
}
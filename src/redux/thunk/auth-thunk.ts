import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {authLoginAC, authMeAC} from "../reducers/auth-reducer";
import {loaderAC} from "../reducers/users-reducer";

export const authMeTC = () => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                let {id, email, login} = res.data
                dispatch(authMeAC(id, email, login))
                dispatch(loaderAC(false))
            }
        })
}

export const authLoginTC = () => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.authLogin()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(authLoginAC())
                dispatch(loaderAC(false))
            }
        })
}


import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {authLogoutAC, authMeAC} from "../reducers/auth-reducer";
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

export const authLogoutTC = () => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.authLogout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(authLogoutAC())
                dispatch(loaderAC(false))
            }
        })
}

export const authLoginTC = (values: any) => (dispatch: Dispatch) => {
    dispatch(loaderAC(true))
    usersAPI.authLogin(values)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(loaderAC(false))
            }
        })
}


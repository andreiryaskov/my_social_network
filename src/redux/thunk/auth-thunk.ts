import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {authLoginAC, authMeAC} from "../reducers/auth-reducer";

export const authMeTC = () => (dispatch: Dispatch) => {
    usersAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                let {id, email, login} = res.data
                dispatch(authMeAC(id, email, login))
            }
        })
}

export const authLoginTC = () => (dispatch: Dispatch) => {
    usersAPI.authLogin()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(authLoginAC())
            }
        })
}

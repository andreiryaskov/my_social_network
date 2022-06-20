import {Dispatch} from "redux";
import {usersAPI} from "../../api/social-api";
import {authLoginAC, authMeAC} from "../reducers/auth-reducer";

export const authMeTC = (endPoint:string) => (dispatch: Dispatch) => {
    usersAPI.authMe(endPoint)
        .then(res => {
            if (res.resultCode === 0) {
                let {id, email, login} = res.data
                let resultCode = res.resultCode
                dispatch(authMeAC(id, email, login, resultCode))
            } else {
                dispatch(authLoginAC())
            }

        })
}

// export const authLoginTC = () => (dispatch: Dispatch) => {
//     usersAPI.authLogin()
//         .then(res => {
//             if (res.data.resultCode === 1) {
//                 dispatch(authLoginAC())
//             }
//         })
// }


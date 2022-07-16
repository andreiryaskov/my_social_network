export const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export type AuthInitialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case 'AUTH/AUTH-ME':
            return {
                ...state,
                isAuth: true,
                ...action.payload
            }
        case "AUTH/AUTH-LOGOUT":
            return {
                ...state,
                isAuth: false
            }

        default: {
            return state
        }
    }
}


export const authMeAC = (id: number, email: string, login: string) => {
    return {
        type: 'AUTH/AUTH-ME',
        payload: {
            id,
            email,
            login
        }
    } as const
}

export const authLogoutAC = () => {
    return {
        type: 'AUTH/AUTH-LOGOUT'
    } as const
}

export type AuthMeActionType = ReturnType<typeof authMeAC>
export type AuthLogoutActionType = ReturnType<typeof authLogoutAC>

export type ActionsType = AuthMeActionType
    | AuthLogoutActionType

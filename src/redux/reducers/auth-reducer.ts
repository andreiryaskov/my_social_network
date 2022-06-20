export const initialState = {
    id: null,
    email: null,
    login: null,
    isLoader: false
}

export type AuthInitialStateType = {
    id: number
    email: string
    login: string
    isLoader: boolean
}


export const authReducer = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'AUTH/AUTH-ME':
            return {
                ...state,
                ...action.payload
            }
        case "AUTH/AUTH-LOGIN":
            return {
                ...state,
                state: {}
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

export const authLoginAC = () => {
    return {
        type: 'AUTH/AUTH-LOGIN'
    } as const
}

export type AuthMeActionType = ReturnType<typeof authMeAC>
export type AuthLoginActionType = ReturnType<typeof authLoginAC>

export type ActionsType = AuthMeActionType
    | AuthLoginActionType
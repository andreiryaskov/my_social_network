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



export const authReducer = (state: any, action: ActionsType):any => {
    switch(action.type) {
        case 'AUTH/SET-USER-DATA':
            return {
                ...state
            }
        default: {
            return state
        }
    }
}


export const setUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'AUTH/SET-USER-DATA',
        payload: {
            id,
            email,
            login
        }
    } as const
}

export type setUserDataActionType = ReturnType<typeof setUserDataAC>

export type ActionsType = setUserDataActionType
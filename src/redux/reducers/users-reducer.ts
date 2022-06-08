export const initialState:UsersInitialStateType = {
    name: '',
    id: ''
}

export type UsersInitialStateType = {
    name: string
    id: string
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType):UsersInitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW-USERS': {
            return {...state}
        }
        case "USERS/UN-FOLLOW-USERS": {
            return {...state}
        }
        default: {
            return state
        }
    }
}

export const followUsersAC = (userID: string) => {
    return {
        type: 'USERS/FOLLOW-USERS',
        payload: {
            userID
        }

    } as const
}

export const unFollowUsersAC = (userID:string) => {
    return {
        type: 'USERS/UN-FOLLOW-USERS',
        payload: {
            userID
        }

    } as const
}

export const setUsersAC = (users:any) => {
    return {
        type: 'USERS/UN-FOLLOW-USERS',
        payload: {
            users
        }

    } as const
}

export type FollowUsersActionType = ReturnType<typeof followUsersAC>
export type UnFollowUsersActionType = ReturnType<typeof unFollowUsersAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>


export type UsersActionType = FollowUsersActionType
    | UnFollowUsersActionType
    | SetUsersActionType
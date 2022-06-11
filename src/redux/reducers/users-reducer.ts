export const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

export type UsersInitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number

}

export type UsersType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: UsersPhotosType
    followed: boolean
    status: string
}

export type UsersPhotosType = {
    small: string | null
    large: string | null
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW-USERS': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userID) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        }
        case "USERS/SET-USERS": {
            return {
                ...state,
                users: action.payload.users,
                totalUsersCount: action.payload.totalUsersCount
            }
        }
        case 'USERS/CURRENT_PAGE': {
            return {...state, currentPage: action.payload.page}
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

export const setUsersAC = (users: UsersType[], totalUsersCount: number) => {
    return {
        type: 'USERS/SET-USERS',
        payload: {
            users,
            totalUsersCount
        }

    } as const
}

export const currentPageAC = (page: number) => {
    return {
        type: 'USERS/CURRENT_PAGE',
        payload: {
            page
        }

    } as const
}

export type FollowUsersActionType = ReturnType<typeof followUsersAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type CurrentPageActionType = ReturnType<typeof currentPageAC>


export type UsersActionType = FollowUsersActionType
    | SetUsersActionType
    | CurrentPageActionType
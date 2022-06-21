export const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoader: false,
    profileUser: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        aboutMe: '',
        contacts: {
            github: '',
            vk: '',
            website: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        }
    }
}

export type UsersInitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isLoader: boolean
    profileUser: ProfileUserType

}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: UsersPhotosType
    followed: boolean
    status: string
}

export type UsersPhotosType = {
    small: string | null
    large: string | null
}

export type ProfileUserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string,
    contacts: UserContactsType
    photos: UsersPhotosType
}

export type UserContactsType = {
    github: string
    vk: string
    website: string
    mainLink: string
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW-USERS': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        }
        // case "USERS/UN-FOLLOW-USERS": {
        //     return {
        //         ...state,
        //         users: state.users.map(u => {
        //             if (u.id === action.payload.userId) {
        //                 return {...u, followed: false}
        //             }
        //             return u
        //         })
        //     }
        // }

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
        case "USERS/SET-LOADER": {
            return {
                ...state,
                isLoader: action.payload.isLoader
            }
        }
        case "USERS/GET-PROFILE-USER": {
            return {
                ...state,
                profileUser: action.payload.profileUser
            }
        }
        default: {
            return state
        }
    }
}

export const followUsersAC = (userId: number) => {
    return {
        type: 'USERS/FOLLOW-USERS',
        payload: {
            userId
        }

    } as const
}

// export const unFollowUserAC = (userId: number) => {
//     return {
//         type: 'USERS/UN-FOLLOW-USERS',
//         payload: {
//             userId
//         }
//     } as const
// }

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

export const loaderAC = (isLoader: boolean) => {
    return {
        type: 'USERS/SET-LOADER',
        payload: {
            isLoader
        }
    } as const
}

export const getProfileUserAC = (profileUser: ProfileUserType) => {
    return {
        type: 'USERS/GET-PROFILE-USER',
        payload: {
            profileUser
        }
    } as const
}


export type FollowUsersActionType = ReturnType<typeof followUsersAC>
// export type UnFollowUsersActionType = ReturnType<typeof unFollowUserAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type CurrentPageActionType = ReturnType<typeof currentPageAC>
export type LoaderActionType = ReturnType<typeof loaderAC>
export type GetProfileUserType = ReturnType<typeof getProfileUserAC>


export type UsersActionType = FollowUsersActionType
    | SetUsersActionType
    | CurrentPageActionType
    | LoaderActionType
    | GetProfileUserType
    // | UnFollowUsersActionType
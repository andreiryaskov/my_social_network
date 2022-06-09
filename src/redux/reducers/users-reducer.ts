import {v1} from "uuid";

export const initialState:UsersInitialStateType = {
    users: [
        {
            name: 'andrei',
            id: v1(),
            photoUrl: 'https://icdn.lenta.ru/images/2018/05/30/22/20180530221332205/wide_7fe601a38687939f2f7f9dc906b53d99.jpg',
            followed: true,
            status: 'i am a frontend developer, bich',
            location: { city: 'Delaver', country: 'USA'}
        },
        {
            name: 'vadim kozyulin',
            id: v1(),
            photoUrl: 'https://sgia.mgimo.ru/upload/images/article_img/6036a194ca099.jpg',
            followed: true,
            status: 'i am a frontend developer, bich',
            location: { city: 'Moscow', country: 'Russia'}
        },
        {
            name: 'nika',
            id: v1(),
            photoUrl: 'https://images.theconversation.com/files/22197/original/vbmrmrkq-1365429883.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
            followed: true,
            status: 'what is "Tatcherism"?',
            location: { city: 'London', country: 'GB'}
        },
        {
            name: 'john',
            id: v1(),
            photoUrl: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
            followed: false,
            status: 'the story behind the image',
            location: { city: 'silicon valley', country: 'USA'}
        }
    ]
}

export type UsersInitialStateType = {
    [key:string]: UsersType[]
}

export type UsersType = {
    name: string
    id: string
    photoUrl: string
    followed: boolean
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
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
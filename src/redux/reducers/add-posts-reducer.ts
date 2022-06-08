// import {AddPostsActionType, AddPostsStateType} from "../../types";


import {v1} from "uuid";

export const initialState: AddPostStateType = {
    messages:
        []
}

export type PostsType = {
    id: string
    message: string
}

type AddPostStateType = {
    [key:string]:PostsType[]
}

export const addPostsReducer = (state: AddPostStateType = initialState, action: AddPostsActionType): AddPostStateType => {


    switch (action.type) {
        case "ADD_POSTS": {

            return  {...state, messages:[...state.messages, {id:v1(), message:action.payload.message}]}

        }
        default: {
            return state
        }
    }
}

export const addPostsAC = (message:string) => {
    return {
        type: 'ADD_POSTS',
        payload: {
            message
        }
    } as const
}
export type AddPostsActionType = ReturnType<typeof addPostsAC>






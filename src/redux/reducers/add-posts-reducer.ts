// import {AddPostsActionType, AddPostsStateType} from "../../types";


import {v1} from "uuid";

export const initialState: any = {
    messages: [
        {id: 'bldwet', message: 'bldwet'}
    ]
}
export const addPostsReducer = (state: any = initialState, action: any): any => {


    switch (action.type) {
        case "ADD_POSTS": {
            return  {...state, messages:[...state.messages, {id:v1(), message:action.payload.message}]}

        }
        default: {
            return state
        }
    }
}

export const addPostsAC = (message:any) => {
    return {
        type: 'ADD_POSTS',
        payload: {
            message
        }
    } as const
}
export type AddPostsActionType = ReturnType<typeof addPostsAC>

export type AddPostsStateType = {
    message: string
}





import {addPostsAC} from "./redux/actions/add-posts-action";

export type AddPostsStateType = {
    [key: string]: PostType[]
}

type PostType = {
    message: string
}

export type AddPostsActionType = ReturnType<typeof addPostsAC>
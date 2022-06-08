export const addPostsAC = (message: string) => {
    return {
        type: 'ADD_POSTS',
        payload: {
            message
        }
    } as const
}


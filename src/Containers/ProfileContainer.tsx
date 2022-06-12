import React, {useEffect} from 'react';
import Profile from "../components/profile/Profile";
import {useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../redux/store";
import {ProfileUserType} from "../redux/reducers/users-reducer";
import {PostsType} from "../redux/reducers/add-posts-reducer";
import {useParams} from "react-router-dom";
import {getProfileUserTC} from "../redux/thunk/users-thunk";

const ProfileContainer = React.memo(() => {

    const dispatch = useTypedDispatch()

    const profileUser = useSelector<AppRootStateType, ProfileUserType>(state => state.usersPage.profileUser)
    const newPost = useSelector<AppRootStateType, PostsType[]>(state => state.addPosts.messages)

    const params = useParams<'*'>()
    const userId = params['*']

    useEffect(() => {
        if (userId && userId !== '') {
            dispatch(getProfileUserTC(userId))
        }
    }, [dispatch, userId])


    // useEffect(() => {
    //     {userId && dispatch(getProfileUserTC(userId))}
    // }, [dispatch, userId])

    return (
        <div>
            <Profile profileUser={profileUser}
                     newPost={newPost}/>
        </div>
    );
})

export default ProfileContainer;
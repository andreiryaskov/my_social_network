import React, {useEffect} from 'react';
import Profile from "../components/profile/Profile";
import {useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../redux/store";
import {ProfileUserType} from "../redux/reducers/users-reducer";
import {PostsType} from "../redux/reducers/add-posts-reducer";
import {useParams} from "react-router-dom";
import {getProfileUserTC} from "../redux/thunk/users-thunk";

const ProfileContainer = () => {

    const dispatch = useTypedDispatch()

    const profileUser = useSelector<AppRootStateType, ProfileUserType>(state => state.usersPage.profileUser)
    const newPost = useSelector<AppRootStateType, PostsType[]>(state => state.addPosts.messages)

    const params = useParams<'*'>()
    const userIdFromParams = Number(params['*'])

    useEffect(() => {
        if (userIdFromParams && userIdFromParams !== 0) {
            dispatch(getProfileUserTC(userIdFromParams))
        }
    }, [dispatch, userIdFromParams])

    return (
        <div>
            <Profile profileUser={profileUser}
                     newPost={newPost}/>
        </div>
    );
}

export default ProfileContainer;
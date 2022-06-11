import React from 'react';
import Profile from "./Profile";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ProfileUserType} from "../../redux/reducers/users-reducer";
import {PostsType} from "../../redux/reducers/add-posts-reducer";

const ProfileContainer = React.memo(() => {

    const profileUser = useSelector<AppRootStateType, ProfileUserType>(state => state.usersPage.profileUser)
    const newPost = useSelector<AppRootStateType, PostsType[]>(state => state.addPosts.messages)


    return (
        <div>
            <Profile profileUser={profileUser}
                     newPost={newPost}/>
        </div>
    );
})

export default ProfileContainer;
import React from 'react'
import {Navigate, Route, Routes, useParams} from "react-router-dom";

import Profile from "./components/profile/Profile";
import Friends from "./components/profile/Friends/Friends";
import MyPhotos from "./components/profile/MyPhotos/MyPhotos";
import Music from "./components/profile/Music/Music";
import Following from "./components/profile/Following/Following";
import UsersContainer from "./Containers/UsersContainer";
import Error404 from "./components/page404/page404";
import ProfileContainer from "./Containers/ProfileContainer";
// import {Login} from "@mui/icons-material";
import Me from "./components/me/Me";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {AuthInitialStateType} from "./redux/reducers/auth-reducer";
import Login from "./components/Login";
import LoginContainer from "./Containers/LoginContainer";

export const PATH = {
    PROFILE: '/profile/',
    USERS: '/users',
    ERROR404: '/404',
    LOGIN: '/',
    PROFILE_ME: '/profile/me'
    // NEWS: '/news',
    // REGISTRATION: '/registration',
    // PASSWORD_RECOVERY: '/password-recovery',
    // NEW_PASSWORD: '/new-password',
    // MESSENGER: '/messenger',
    // FRIEND: '/friend',
    // COMMUNITIES: '/communities',
    // PHOTOS: '/photos',
    // MUSIC: '/music',

}

export const AppRoutes = () => {

    // const authMeLogin = useSelector<AppRootStateType, AuthInitialStateType>(state => state.auth)


    return (
        <Routes>
            <Route path={PATH.ERROR404} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
            <Route path={PATH.USERS} element={<UsersContainer/>}/>
            <Route path={`${PATH.PROFILE}*`} element={<ProfileContainer/>}/>
            <Route path={PATH.PROFILE_ME} element={<Me/>}/>
            <Route path={PATH.LOGIN} element={<LoginContainer/>}/>

            {/*<Route path={PATH.NEWS} element={<News/>}/>*/}
            {/*<Route path={PATH.REGISTRATION} element={<Registration/>}/>*/}
            {/*<Route path={PATH.PASSWORD_RECOVERY} element={<RecoveryPassword/>}/>*/}
            {/*<Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>*/}
            {/*<Route path={PATH.MESSENGER} element={<Messenger/>}/>*/}
            {/*<Route path={PATH.PHOTOS} element={<MyPhotos/>}/>*/}
            {/*<Route path={PATH.MUSIC} element={<Music/>}/>*/}
            {/*<Route path={PATH.FRIEND} element={<Friends/>}/>*/}
            {/*<Route path={PATH.COMMUNITIES} element={<Following/>}/>*/}


        </Routes>
    )
}

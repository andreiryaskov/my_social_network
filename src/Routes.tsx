import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

import Profile from "./components/profile/Profile";
import Friends from "./components/profile/Friends/Friends";
import MyPhotos from "./components/profile/MyPhotos/MyPhotos";
import Music from "./components/profile/Music/Music";
import Following from "./components/profile/Following/Following";
import UsersContainer from "./components/profile/Users/UsersContainer";
import Error404 from "./components/page404/page404";

export const PATH = {
    PROFILE:'/profile',
    LOGIN:'/login/*',
    ERROR404: '/404',
    NEWS: '/news',
    REGISTRATION: '/registration',
    PASSWORD_RECOVERY: '/password-recovery',
    NEW_PASSWORD: '/new-password',
    MESSENGER: '/messenger',
    FRIEND: '/friend',
    COMMUNITIES: '/communities',
    PHOTOS: '/photos',
    MUSIC: '/music',
    MENU: '/profile',
    USERS: '/users'
}

export const AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                {/*<Route path={PATH.LOGIN} element={<Login/>}/>*/}
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
                {/*<Route path={PATH.NEWS} element={<News/>}/>*/}
                {/*<Route path={PATH.REGISTRATION} element={<Registration/>}/>*/}
                {/*<Route path={PATH.PASSWORD_RECOVERY} element={<RecoveryPassword/>}/>*/}
                {/*<Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>*/}

                {/*<Route path={PATH.MESSENGER} element={<Messenger/>}/>*/}
                <Route path={PATH.FRIEND} element={<Friends/>}/>
                <Route path={PATH.COMMUNITIES} element={<Following/>}/>
                <Route path={PATH.PHOTOS} element={<MyPhotos/>}/>
                <Route path={PATH.MUSIC} element={<Music/>}/>
                <Route path='/' element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.USERS} element={<UsersContainer/>}/>

            </Routes>
    )
}
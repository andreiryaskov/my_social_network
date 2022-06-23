import React, {useEffect} from 'react';
import {currentPageAC, followUsersAC, UsersType} from "../redux/reducers/users-reducer";
import Users from "../components/profile/Users/Users";
import {useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../redux/store";
import {followUserTC, unFollowUserTC, usersTC} from "../redux/thunk/users-thunk";
import PaginationControlled from "../components/pagination/Pagination";

const UsersContainer = () => {

    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.users)
    const currentPage = useSelector<AppRootStateType, number>(state => state.usersPage.currentPage)
    const pageSize = useSelector<AppRootStateType, number>(state => state.usersPage.pageSize)
    const pagesCount = useSelector<AppRootStateType, number>(state => state.usersPage.totalUsersCount)
    const followingInProgress = useSelector<AppRootStateType, number[]>(state => state.usersPage.followingInProgress)

    const dispatch = useTypedDispatch()

    const changeUsersFollow = (id: number) => {
        dispatch(followUserTC(id))
    }

    const changeUsersUnFollow = (id: number) => {
        dispatch(unFollowUserTC(id))
    }


    useEffect(() => {
        dispatch(usersTC(currentPage, pageSize))
    }, [])

    const getPaginationCallback = (page: number) => {
        dispatch(currentPageAC(page))
        dispatch(usersTC(page, pageSize))
    }

    return (
        <div>
            <PaginationControlled
                getPaginationCallback={getPaginationCallback}
                pagesCount={pagesCount}
                pageSize={pageSize}/>
            <Users changeUsersFollow={changeUsersFollow}
                   users={users}
                   changeUsersUnFollow={changeUsersUnFollow}
                   followingInProgress={followingInProgress}
            />
        </div>
    );
};

export default UsersContainer;
import React, {useEffect} from 'react';
import {currentPageAC, followUsersAC, UsersType} from "../redux/reducers/users-reducer";
import Users from "../components/profile/Users/Users";
import {useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../redux/store";
import {usersTC} from "../redux/thunk/users-thunk";
import PaginationControlled from "../components/pagination/Pagination";

const UsersContainer = () => {

    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.users)
    const currentPage = useSelector<AppRootStateType, number>(state => state.usersPage.currentPage)
    const pageSize = useSelector<AppRootStateType, number>(state => state.usersPage.pageSize)
    const pagesCount = useSelector<AppRootStateType, number>(state => state.usersPage.totalUsersCount)

    const dispatch = useTypedDispatch()

    const changeUsersFollowCallback = (id: string) => {
        dispatch(followUsersAC(id))
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
            <Users changeUsersFollowCallback={changeUsersFollowCallback}
                   users={users}
            />
        </div>
    );
};

export default UsersContainer;
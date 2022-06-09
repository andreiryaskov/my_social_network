import React, {useEffect} from 'react';
import {followUsersAC, UsersType} from "../../../redux/reducers/users-reducer";
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../../../redux/store";
import {usersTC} from "../../../redux/thunk/users-thunk";
import Button from "@mui/material/Button";

const UsersContainer = () => {

    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.users)

    const dispatch = useTypedDispatch()

    const changeUsersFollowCallback = (id: string) => {
        dispatch(followUsersAC(id))
    }

    const getUsersCallback = () => {
        dispatch(usersTC())
    }

    return (
        <div>
            <Users changeUsersFollowCallback={changeUsersFollowCallback}
            users={users}/>
            <Button onClick={getUsersCallback}>
                Showe More
            </Button>
        </div>
    );
};

export default UsersContainer;
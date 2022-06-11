import React from 'react';
import s from './Users.module.scss';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {UsersType} from "../../../redux/reducers/users-reducer";
import userImg from '../../../assets/image/users.png'
import {NavLink} from "react-router-dom";
import {getProfileUserTC} from "../../../redux/thunk/users-thunk";
import {useTypedDispatch} from "../../../redux/store";

type UsersContainerType = {
    changeUsersFollowCallback: (id: string) => void
    // getUsersCallback: () => void
    users: UsersType[]
    // getProfileUserCallback: (id:string) => void
}

const Users = ({
                   users,
                   changeUsersFollowCallback,
                   // getUsersCallback
               }: UsersContainerType) => {

    const dispatch = useTypedDispatch()

    const changeUsersFollow = (id: string) => {
        changeUsersFollowCallback(id)
    }

    // const getUsers = () => {
    //     getUsersCallback()
    // }

    const getProfileUser = (id: string) => {
        dispatch(getProfileUserTC(id))
    }

    return (

        <Grid container direction={"column"} spacing={2}>
            <Paper className={s.users_wrapper}>
                {
                    users.map(u => {
                        return (

                            <Paper className={s.user_container} key={u.id}>
                                <Grid container spacing={2} padding={"20px"}>
                                    <Grid item xs={4}>
                                        <div className={s.user_avatar} onClick={() => getProfileUser(u.id)}>
                                            <NavLink to={`/profile/${u.id}`}>
                                                <img src={u.photos.small || userImg}/>
                                            </NavLink>

                                        </div>
                                        <Button onClick={() => changeUsersFollow(u.id)}>
                                            {u.followed
                                                ? 'Unfollow'
                                                : 'Follow'}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid container spacing={2}
                                              justifyContent={"space-between"}>
                                            <Grid item xs={6}
                                                  justifyContent={"space-between"}>
                                                <div>
                                                    {u.name}
                                                </div>
                                                <div>
                                                    {u.status}
                                                </div>
                                            </Grid>
                                            <Grid item xs={6} textAlign={"right"}>
                                                <div>
                                                    {/*{u.location.city}*/}
                                                    city
                                                </div>
                                                <div>
                                                    {/*{u.location.country}*/}
                                                    country
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        )
                    })
                }

            </Paper>
            {/*<Button onClick={getUsers}>*/}
            {/*    Showe More*/}
            {/*</Button>*/}
        </Grid>
    );
};

export default Users;
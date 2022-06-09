import React from 'react';
import s from './Users.module.scss';
import Paper from "@mui/material/Paper";
import {AppRoutes} from "../../../Routes";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {UsersInitialStateType, UsersType} from "../../../redux/reducers/users-reducer";

const Users = () => {

    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)

    return (

        <Grid direction={"column"}>
            <Paper className={s.users_wrapper}>
            {
                users.map(u => {
                    return (

                            <Paper className={s.user_container}>
                                <Grid container spacing={2} padding={"20px"}>
                                    <Grid item xs={4}>
                                        <div className={s.user_avatar}>
                                            <img src={u.photoUrl} alt="avatar"/>
                                        </div>
                                        <Button>
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
                                                    {u.location.city}
                                                </div>
                                                <div>
                                                    {u.location.country}
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
        </Grid>
    );
};

export default Users;
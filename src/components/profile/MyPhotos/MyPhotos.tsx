import React from 'react';
import Paper from "@mui/material/Paper";
import s from './MyPhotos.module.scss';
import {ProfileUserType} from "../../../redux/reducers/users-reducer";
import avatar from '../../../assets/image/users.png';
export type PropsType = {
    profileUser: ProfileUserType
}

const MyPhotos = ({profileUser}:PropsType) => {
    return (
        <Paper elevation={5} className={s.myPhotos}>
            <img src={profileUser.photos.small || avatar} alt="avatar"/>
        </Paper>
    );
};

export default MyPhotos;
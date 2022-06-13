import React from 'react';
import s from './ProfilePhoto.module.scss';
import Paper from "@mui/material/Paper";
import {ProfileUserType} from "../../../redux/reducers/users-reducer";
import avatar from '../../../../src/assets/image/users.png'

export type PropsType = {
    profileUser: ProfileUserType
}

export default function ProfilePhoto({profileUser}: PropsType) {

    return (
        <Paper elevation={5} className={s.photo}>
            <img src={profileUser.photos.large || avatar}
                 alt="photo"/>

        </Paper>
    );
}

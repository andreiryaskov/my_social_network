import React from 'react';
import s from './ProfileInfo.module.scss';
import Paper from "@mui/material/Paper";
import {ProfileUserType} from "../../../redux/reducers/users-reducer";

export type PropsType = {
    profileUser: ProfileUserType
}

const ProfileInfo = ({profileUser}: PropsType) => {
    return (
        <Paper elevation={5} className={s.profileinfo}>
            <div>{profileUser.fullName}</div>

            <div>{profileUser.aboutMe}</div>

            <div>
                <div>{profileUser.contacts.vk}</div>
                <div>{profileUser.contacts.github}</div>
                <div>{profileUser.contacts.mainLink}</div>
                <div>{profileUser.contacts.website}</div>
            </div>

            <div>
                <div>{profileUser.lookingForAJob}</div>
                <div>{profileUser.lookingForAJobDescription}</div>
            </div>
        </Paper>
    );
};

export default ProfileInfo;
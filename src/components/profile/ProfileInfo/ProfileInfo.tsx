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
            <div>{profileUser.fullName || 'Name Name'}</div>

            <div>{profileUser.aboutMe || ''}</div>

            <div>
                <div>{profileUser.contacts.vk || 'No information'}</div>
                <div>{profileUser.contacts.github || 'No information'}</div>
                <div>{profileUser.contacts.mainLink || 'No information'}</div>
                <div>{profileUser.contacts.website || 'No information'}</div>
            </div>

            <div>
                <div>{profileUser.lookingForAJob || 'No information'}</div>
                <div>{profileUser.lookingForAJobDescription
                || 'No information'}</div>
            </div>
        </Paper>
    );
};

export default ProfileInfo;
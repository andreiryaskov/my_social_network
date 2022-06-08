import React from 'react';
import s from './ProfilePhoto.module.scss';
import Paper from "@mui/material/Paper";


export default function ProfilePhoto() {
    return (
        <Paper elevation={5} className={s.photo}>
                <img src="https://icdn.lenta.ru/images/2018/05/30/22/20180530221332205/wide_7fe601a38687939f2f7f9dc906b53d99.jpg"
                     alt="photo"/>

        </Paper>
    );
}

import React from 'react';
import Paper from "@mui/material/Paper";
import s from './Posts.module.scss';

const Posts = ({id, message}:any) => {

    return (
        <Paper elevation={5} className={s.posts} id={id}>
            {message}
        </Paper>
    );
};

export default Posts;
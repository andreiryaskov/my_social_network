import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import s from './AddPostArea.module.scss';
import Button from "@mui/material/Button";
import {addPostsAC} from "../../../redux/actions/add-posts-action";
import {useDispatch} from "react-redux";

const AddPostArea = () => {

    const [value, setValue] = useState('')


    const dispatch = useDispatch()

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }

    const addPost = () => {
        // e.preventDefault()
        console.log(typeof value)
        dispatch(addPostsAC(value))
        setValue('')
    }

    return (
        <Paper elevation={5} className={s.addPostArea}>
            Whats now?
            <TextField
                id="outlined-basic"
                value={value}
                onChange={onChangeValue}
                type="text"
            />
            <Button variant="outlined" onClick={addPost}>Add post</Button>
        </Paper>
    );
};

export default AddPostArea;
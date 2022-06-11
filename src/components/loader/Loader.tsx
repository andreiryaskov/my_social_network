import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

export default function LinearIndeterminate() {

    const isLoader = useSelector<AppRootStateType, boolean>(state => state.usersPage.isLoader)

    return (
        <Box sx={{width: '100%'}}>
            {isLoader && <LinearProgress/>}
        </Box>
    );
}

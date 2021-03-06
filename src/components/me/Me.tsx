import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {useNavigate} from "react-router-dom";

const Me = () => {

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth) {
            return navigate('/')
        }
    }, [auth])

    return (
        <div>
            It`s Me
        </div>
    );
};

export default Me;

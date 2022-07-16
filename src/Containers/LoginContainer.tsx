import React, {useEffect} from 'react';
import Login from "../components/Login";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {useNavigate} from "react-router-dom";



const LoginContainer = () => {

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (auth) {
            return navigate('/profile/me')
        }
    }, [auth])

    return (
        <div>
            <Login/>
        </div>
    );
};

export default LoginContainer;

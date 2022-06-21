import React from 'react';
import ResponsiveAppBar from "../components/header/Header";
import {authMeTC} from "../redux/thunk/auth-thunk";
import {useTypedDispatch} from "../redux/store";

const HeaderContainer = () => {

    const dispatch = useTypedDispatch()

    const changeLogin = () => {
        dispatch(authMeTC())
    }

    return (
        <div>
            <ResponsiveAppBar changeLogin={changeLogin}/>
        </div>
    );
};

export default HeaderContainer;
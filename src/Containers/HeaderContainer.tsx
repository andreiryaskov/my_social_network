import React from 'react';
import ResponsiveAppBar from "../components/header/Header";
import {authLoginTC, authMeTC} from "../redux/thunk/auth-thunk";
import {useTypedDispatch} from "../redux/store";

const HeaderContainer = () => {

    const dispatch = useTypedDispatch()

    const changeLogin = () => {
        dispatch(authMeTC())
    }

    const deleteSetUserData = () => {
        dispatch(authLoginTC())
    }

    return (
        <div>
            <ResponsiveAppBar changeLogin={changeLogin}
                              deleteSetUserData={deleteSetUserData}/>
        </div>
    );
};

export default HeaderContainer;
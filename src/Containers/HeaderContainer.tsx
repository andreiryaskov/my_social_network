import React from 'react';
import ResponsiveAppBar from "../components/header/Header";
import {authLogoutTC} from "../redux/thunk/auth-thunk";
import {useTypedDispatch} from "../redux/store";

const HeaderContainer = () => {

    const dispatch = useTypedDispatch()

    // const changeLogin = () => {
    //     dispatch(authMeTC())
    // }

    const deleteSetUserData = () => {
        dispatch(authLogoutTC())
    }



    return (
        <div>
            <ResponsiveAppBar deleteSetUserData={deleteSetUserData}/>
        </div>
    );
};

export default HeaderContainer;

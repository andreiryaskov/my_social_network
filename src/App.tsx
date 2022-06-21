import React from 'react';
import {Container} from "@mui/material";
import './App.css';
import PrimarySearchAppBar from "./components/header/Header";
import Menu from "./components/sidebar/Menu";
import Profile from "./components/profile/Profile";
import Grid from "@mui/material/Grid";
import {AppRoutes} from "./Routes";
import LinearIndeterminate from "./components/loader/Loader";
import ResponsiveAppBar from "./components/header/Header";
import HeaderContainer from "./Containers/HeaderContainer";

function App() {

    return (
        <Container className={'container'}>
            <HeaderContainer/>
            <LinearIndeterminate/>
            <div className={'app_wrapper'}>


                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Menu/>
                    </Grid>
                    <Grid item xs={10}>
                        <AppRoutes/>
                    </Grid>
                </Grid>

            </div>

        </Container>
    );
}

export default App;

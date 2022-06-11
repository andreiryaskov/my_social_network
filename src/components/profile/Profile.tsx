import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPhotos from "./MyPhotos/MyPhotos";
import Grid from "@mui/material/Grid";
import Friends from "./Friends/Friends";
import Following from "./Following/Following";
import Music from "./Music/Music";
import AddPostArea from "./AddPostArea/AddPostArea";
import Posts from "./Posts/Posts";
import {PostsType} from "../../redux/reducers/add-posts-reducer";
import {ProfileUserType} from "../../redux/reducers/users-reducer";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export type PropsType = {
    profileUser: ProfileUserType
    newPost: PostsType[]
}

export const Profile = ({profileUser, newPost}: PropsType) => {

    return (
        <Grid container spacing={2}>
            <Grid item
                  xs={4}
                  container
                  direction="column">
                <ProfilePhoto profileUser={profileUser}/>
                <Friends/>
                <Following/>
                <Music/>
            </Grid>
            <Grid item
                  xs={8}
                  container
                  direction="column"
            >
                <ProfileInfo profileUser={profileUser}/>
                <MyPhotos profileUser={profileUser}/>
                <AddPostArea/>
                {newPost.map((i) => {
                    return <Posts key={i.id} id={i.id} message={i.message}/>
                })}

            </Grid>
        </Grid>
    );
}

export default Profile
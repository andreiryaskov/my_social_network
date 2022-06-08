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
import {useSelector} from "react-redux";
import {AddPostsStateType} from "../../types";
import {AppRootStateType} from "../../redux/store";
import {PostsType} from "../../redux/reducers/add-posts-reducer";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Profile =  () => {
// debugger
        const newPost = useSelector<AppRootStateType, PostsType[]>(state => state.addPosts.messages)
        console.log(newPost)

        return (
            <Grid container spacing={2}>
                <Grid item
                      xs={4}
                      container
                      direction="column">
                    <ProfilePhoto/>
                    <Friends/>
                    <Following/>
                    <Music/>
                </Grid>
                <Grid item
                      xs={8}
                      container
                      direction="column"
                >
                    <ProfileInfo/>
                    <MyPhotos/>
                    <AddPostArea/>
                    {newPost.map((i) => {
                        return <Posts key={i.id} id={i.id} message={i.message}/>
                    })}

                </Grid>
            </Grid>
        );
    }

export default Profile
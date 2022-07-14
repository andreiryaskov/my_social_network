import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {AuthInitialStateType} from "../../redux/reducers/auth-reducer";

export default function Menu() {

    const authMeLogin = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    // const [open, setOpen] = React.useState(false);
    // const anchorRef = React.useRef<HTMLButtonElement>(null);
    //
    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // };
    //
    // const handleClose = (event: Event | React.SyntheticEvent) => {
    //     if (
    //         anchorRef.current &&
    //         anchorRef.current.contains(event.target as HTMLElement)
    //     ) {
    //         return;
    //     }
    //
    //     setOpen(false);
    // };

    // function handleListKeyDown(event: React.KeyboardEvent) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpen(false);
    //     } else if (event.key === 'Escape') {
    //         setOpen(false);
    //     }
    // }

    // // return focus to the button when we transitioned from !open -> open
    // const prevOpen = React.useRef(open);
    // React.useEffect(() => {
    //     if (prevOpen.current === true && open === false) {
    //         anchorRef.current!.focus();
    //     }
    //
    //     prevOpen.current = open;
    // }, [open]);

    const redirectToProfile = authMeLogin ? '/profile' : '/'

    return (
        <Stack direction="row" spacing={2}>
            <Paper elevation={5}>
                <MenuList>
                    <MenuItem><NavLink to={redirectToProfile}>My Profile</NavLink></MenuItem>
                    {/*<MenuItem> <NavLink to='/news'>News</NavLink></MenuItem>*/}
                    {/*<MenuItem><NavLink to='/messeger'>Messeger</NavLink></MenuItem>*/}
                    {/*<MenuItem> <NavLink to='/friend'>Friends</NavLink></MenuItem>*/}
                    <MenuItem> <NavLink to='/users'>Users</NavLink></MenuItem>
                    {/*<MenuItem> <NavLink to='/communities'>Communities</NavLink></MenuItem>*/}
                    <MenuItem> <NavLink to='/photos'>Photos</NavLink></MenuItem>
                    {/*<MenuItem><NavLink to='/music'>Music</NavLink></MenuItem>*/}
                    <MenuItem><NavLink to='/logout'>Logout</NavLink></MenuItem>

                </MenuList>
            </Paper>
            {/*    <Popper*/}
            {/*        open={open}*/}
            {/*        anchorEl={anchorRef.current}*/}
            {/*        role={undefined}*/}
            {/*        placement="bottom-start"*/}
            {/*        transition*/}
            {/*        disablePortal*/}
            {/*    >*/}
            {/*        {({ TransitionProps, placement }) => (*/}
            {/*            <Grow*/}
            {/*                {...TransitionProps}*/}
            {/*                style={{*/}
            {/*                    transformOrigin:*/}
            {/*                        placement === 'bottom-start' ? 'left top' : 'left bottom',*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                <Paper>*/}
            {/*                    <ClickAwayListener onClickAway={handleClose}>*/}
            {/*                        <MenuList*/}
            {/*                            autoFocusItem={open}*/}
            {/*                            id="composition-menu"*/}
            {/*                            aria-labelledby="composition-button"*/}
            {/*                            onKeyDown={handleListKeyDown}*/}
            {/*                        >*/}
            {/*                            <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
            {/*                            <MenuItem onClick={handleClose}>My account</MenuItem>*/}
            {/*                            <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
            {/*                        </MenuList>*/}
            {/*                    </ClickAwayListener>*/}
            {/*                </Paper>*/}
            {/*            </Grow>*/}
            {/*        )}*/}
            {/*    </Popper>*/}
            {/*</div>*/}
        </Stack>
    );
}

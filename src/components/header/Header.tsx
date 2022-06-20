// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import {authThunk} from "../../redux/thunk/auth-thunk";
// import {useTypedDispatch} from "../../redux/store";
// import {useSelector} from "react-redux";
// import {NavLink} from "react-router-dom";
// import avatar from '../../assets/image/users.png'
//
// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));
//
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));
//
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));
//
// export default function PrimarySearchAppBar() {
//     const auth = useSelector<any, any>(state => state.auth)
//     const dispatch = useTypedDispatch()
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//         React.useState<null | HTMLElement>(null);
//
//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//
//     const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };
//
//     const handleMenuClose = () => {
//         dispatch(authThunk())
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };
//
//     const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };
//
//     const menuId = 'primary-search-account-menu';
//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             {/*<MenuItem onClick={handleMenuClose}>My account</MenuItem>*/}
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//         </Menu>
//     );
//
//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem>
//                 <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                     <Badge badgeContent={4} color="error">
//                         <MailIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Messages</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton
//                     size="large"
//                     aria-label="show 17 new notifications"
//                     color="inherit"
//                 >
//                     <Badge badgeContent={17} color="error">
//                         <NotificationsIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>Profile</p>
//             </MenuItem>
//         </Menu>
//     );
//
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ display: { xs: 'none', sm: 'block' } }}
//                     >
//                         MUI
//                     </Typography>
//                     <Search>
//                         <SearchIconWrapper>
//                             <SearchIcon />
//                         </SearchIconWrapper>
//                         <StyledInputBase
//                             placeholder="Search…"
//                             inputProps={{ 'aria-label': 'search' }}
//                         />
//                     </Search>
//                     <Box sx={{ flexGrow: 1 }} />
//                     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                             <Badge badgeContent={4} color="error">
//                                 <MailIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             aria-label="show 17 new notifications"
//                             color="inherit"
//                         >
//                             <Badge badgeContent={17} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                     </Box>
//                     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             {/*<MoreIcon />*/}
//
//                         </IconButton>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             {renderMenu}
//         </Box>
//     );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {authMeTC} from "../../redux/thunk/auth-thunk";
import {useTypedDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import avatar from '../../assets/image/users.png';
import {NavLink} from "react-router-dom";

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {
    let auth = useSelector<any, any>(state => state.auth)

    const dispatch = useTypedDispatch()
    const [login, setLogin] = React.useState<boolean>(false)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const changeLogin = () => {
        if (login === false) {
            dispatch(authMeTC('me'))
            setLogin(true)
        } else {
            dispatch(authMeTC('login'))
            setLogin(false)
        }

    }

    let goTo
    if (login) {
        goTo = 'profile'
    } else {
        goTo = '404'
    }


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {/*{pages.map((page) => (*/}
                            {/*    <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                            {/*        <Typography textAlign="center">{page}</Typography>*/}
                            {/*    </MenuItem>*/}
                            {/*))}*/}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {/*{pages.map((page) => (*/}
                        {/*    <Button*/}
                        {/*        key={page}*/}
                        {/*        onClick={handleCloseNavMenu}*/}
                        {/*        sx={{ my: 2, color: 'white', display: 'block' }}*/}
                        {/*    >*/}
                        {/*        {page}*/}
                        {/*    </Button>*/}
                        {/*))}*/}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src={
                                    login
                                        ? avatar
                                        : "/static/images/avatar/2.jpg"
                                }/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/*{settings.map((setting) => (*/}
                            {/*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                            {/*        <Typography textAlign="center">{setting}</Typography>*/}
                            {/*    </MenuItem>*/}
                            {/*))}*/}
                            <MenuItem
                                // onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">
                                    <NavLink to={`/${goTo}`}>Profile</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={changeLogin}>
                                    {
                                        login
                                            ? 'Logout'
                                            : 'Login'
                                    }
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;

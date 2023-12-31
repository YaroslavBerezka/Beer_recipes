import {Outlet} from 'react-router-dom';
import React, {useCallback} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import {AppBar, Box, Container, IconButton, Menu, Toolbar, Typography} from '@mui/material';

const Navigation = (props) => {

    const { children } = props;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const colorHeader =  '#525252';
    const hoverHeader =  'gold';

    const handleOpenNavMenu = useCallback((event) => {
        setAnchorElNav(event.currentTarget);
    }, []);

    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, []);

    return (
        <>
            <AppBar position='sticky' sx={{ backgroundColor: `${colorHeader}`, color: '#ffff', height: '12vh'}}>
                <Container maxWidth='xl' >
                    <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                fontSize: '7vh',
                                letterSpacing: '.3rem',
                                color: 'white',
                                '&:hover': { color: `${hoverHeader}` },
                                textDecoration: 'none',
                            }}
                        >
                        <SportsBarIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/> Beer Recipes </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            ><MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            > Here you can find all the recipes </Menu>
                        </Box>
                        <SportsBarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Ubuntu',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#ffff',
                                textDecoration: 'none',
                            }}> Beer Recipes </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            {children || <Outlet />}
        </>
    );
}

export default Navigation;
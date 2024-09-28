import { FormControlLabel, Stack, styled, Switch } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeModeToggle from './ThemeModeToggle';
import { Link, Outlet } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import * as React from 'react';
import map from 'lodash/map';

const drawerWidth = 240;

export default function Base() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = [
        ['Home', '/'],
        ['Choocie languiage', '/languages'],
    ];

    return (
        <Stack className="h-screen">
            <AppBar position="static">
                <Toolbar className="flex items-center justify-between">
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className="mr-2"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={1}
                    >
                        <ThemeModeToggle />
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box
                        onClick={handleDrawerToggle}
                        className="text-center"
                    >
                        <Typography
                            variant="h6"
                            className="my-2"
                        >
                            MUI
                        </Typography>
                        <Divider />
                        <List>
                            {map(navItems, ([item, href]) => (
                                <ListItem
                                    key={item}
                                    disablePadding
                                >
                                    <ListItemButton className="text-center">
                                        <Link
                                            to={href}
                                            className="w-full"
                                        >
                                            <ListItemText primary={item} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
            <Box
                component="main"
                className="flex-1 overflow-y-auto p-3"
                sx={{ backgroundColor: 'background.default' }}
            >
                <Outlet />
            </Box>
        </Stack>
    );
}

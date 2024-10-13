/* eslint-disable lodash/prefer-lodash-method */
import AccountCircle from '@mui/icons-material/AccountCircle';
import useDatabaseContext from '@/hooks/useDatabaseContext';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeModeToggle from './ThemeModeToggle';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';

const drawerWidth = 240;

export default function Base() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { t } = useTranslation();
    const db = useDatabaseContext();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const clearDatabase = async () => {
        try {
            await db.remove();
            location.reload();
            console.log('Baza danych została pomyślnie usunięta.');
        } catch (error) {
            console.error('Wystąpił błąd podczas usuwania bazy danych:', error);
        }
    };

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
                            Master of Lang
                        </Typography>
                        <Divider />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton className="text-center">
                                    <Link
                                        to="/categories"
                                        className="w-full"
                                    >
                                        <ListItemText primary={t('Start')} />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton className="text-center">
                                    <Link
                                        to="/languages"
                                        className="w-full"
                                    >
                                        <ListItemText
                                            primary={t('Wybierz język')}
                                        />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton className="text-center">
                                    <Link
                                        to="/levels"
                                        className="w-full"
                                    >
                                        <ListItemText
                                            primary={t('Wybierz poziom')}
                                        />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    className="text-center"
                                    onClick={clearDatabase}
                                >
                                    <ListItemText
                                        primary={t('Resetuj postępy')}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </nav>
            <Box
                component="main"
                className="flex-1 overflow-y-auto px-1 pt-3 md:px-3"
                sx={{ backgroundColor: 'background.default' }}
            >
                <Outlet />
            </Box>
        </Stack>
    );
}

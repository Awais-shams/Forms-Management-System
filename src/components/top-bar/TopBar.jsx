import React, { useState } from 'react'

// AppBar Mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// Mui Icons
import ArticleIcon from '@mui/icons-material/Article';


import SideBar from '../side-bar/SideBar';

const TopBar = () => {

    const settings = ['Profile', 'Account', 'Logout'];

    const [anchorElUser, setAnchorElUser] =useState(null);
  

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar >
            <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FORMIAL
            </Typography>
  
             
            <ArticleIcon  sx={{ display: { xs: 'flex', md: 'none' } }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow:50 ,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FORMIAL
            </Typography>

           

  
            <Box sx={{marginLeft:'auto'}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                  <Avatar alt="Avatar" src="#" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SideBar/>
    </>
    );
}

export default TopBar
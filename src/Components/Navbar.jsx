import { styled, alpha } from '@mui/material/styles';
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { InputBase } from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
   display : "none", gap : "20px", alignItems : 'center',
   [theme.breakpoints.up("sm")]:{
      display : "flex"
   },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display : "flex", gap : "20px", alignItems : 'center',
  [theme.breakpoints.up("sm")]:{
    display : "none"
 },
}))

const Navbar = () => {

  const [open, setOpen] = useState(false);


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>GIRI DEV</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar 
            sx = {{width : 30, height : 30}} 
            src="https://tinyurl.com/4r3awwjr" 
            onClick = {e => setOpen(true)}
          />
        </Icons>

        {/* for mobile version */}
        <UserBox  onClick = {e => setOpen(true)}>
          <Avatar sx = {{width : 30, height : 30}} src="https://tinyurl.com/4r3awwjr" />
          <Typography variant='span'>Girish Pawar</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open = {open}
        onClose = {e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
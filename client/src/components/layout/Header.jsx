import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { Suspense, lazy, useState } from 'react'
import { Add as AddIcon, Notifications as NotificationsIcon, Logout as LogoutIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Notifications } from '@mui/icons-material'
import {useNavigate} from "react-router-dom"
import Search from '../specific/Search'
import logo from "../../../public/logo.png"

const SearchDialog = lazy(() => import("../specific/Search"))

const Header = () => {

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  }

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev)
  }

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev)
  }

  const openNotification = () => {
    setIsNotification((prev) => !prev)
  }

  const navigateToGroup = () => {
    navigate("/groups");
  }

  const logoutHandler = () => {
    console.log("Logout")
  }

  return (
    <>
      <Box sx={{flexGrow: 1}} height={"4rem"}>
        <AppBar 
          position='static' 
          sx={{
            bgcolor: blue
          }}
        >
          <Toolbar>

            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                marginRight: 0, 
                width: "4rem", 
                height: "4rem", 
              }}
            />

            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              ChatMingle
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            
            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <Box>
              <Tooltip title="Search">
                <IconButton color='inherit' size='large' onClick={openSearchDialog}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
                <IconButton color='inherit' size='large' onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <IconBtn 
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn 
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn 
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>  
        </AppBar>
      </Box>

      {
        isSearch && (
          <Suspense fallback={ <div>Loading...</div> }>
            <Search />
          </Suspense>
        )
      }
    </>
  )
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header
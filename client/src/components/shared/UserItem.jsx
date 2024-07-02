import { Avatar, IconButton, ListItem, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { memo } from 'react'
import {Add as AddIcon, Remove as RemoveIcon} from "@mui/icons-material";

const UserItem = ({user, handler, handlerIsLoading}) => {

    const {name, _id, avatar, isAdded} = user

  return (
    <ListItem>
        <Stack 
            direction={"row"} 
            alignItems={"center"}
            spacing={"1rem"}
            width={"100%"}
        >
            <Avatar />

            <Typography
                variant='body1'
                sx={{
                    flexGrow: 1,
                    display: "-webkit-flex",
                    WebkitLineClamp: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%"
                }}
            >
                {name}
            </Typography>

            <IconButton 
                onClick={() => handler(_id)} 
                disabled={handlerIsLoading}
                size='small'
                sx={{
                    bgcolor: isAdded ? "error.main" : "primary.main",
                    color: "white",
                    "&:hover": {
                        bgcolor: isAdded ? "error.dark" : "primary.dark",
                    }
                }}
            >
                {
                    isAdded ? <RemoveIcon /> : <AddIcon />
                }
                
            </IconButton>
        </Stack>
    </ListItem>
  )
}

export default memo(UserItem)
import React, { memo } from 'react'
import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { Stack } from '@mui/system';
import { sampleNotifications } from '../../constants/SampleData';

const Notifications = () => {

  const friendRequestHandler = ({_id, accept}) => {
    // Accept friend request
  }

  return (
    <Dialog open>
      <Stack 
        p={{xs: "1rem", sm: "2rem"}}
        maxWidth={"25rem"}
      >
        <DialogTitle>Notifications</DialogTitle>

        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map((i) => <NotificationItem sender={i.sender} _id={i._id} handler={friendRequestHandler} key={i._id}/>)
          ) : (
            <Typography textAlign={"center"}>0 Notifications</Typography>
          )
        }
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({sender, _id, handler}) => {

  const {name, avatar} = sender;

  return (
    <ListItem>
        <Stack 
            direction={"row"} 
            alignItems={"center"}
            spacing={"1rem"}
            width={"100%"}
        >
            <Avatar src={avatar} />

            <Typography
                variant='body1'
                sx={{
                    flexGrow: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%"
                }}
            >
                {`${name} sent you a friend request`}
            </Typography>
            <Stack
              direction={{
                xs: "column",
                sm: "row"
              }}
            >
              <Button onClick={() => handler({_id, accept: true})}>Accept</Button>
              <Button color='error' onClick={() => handler({_id, accept: false})}>Decline</Button>
            </Stack>
        </Stack>
    </ListItem>
  )
}); // memo is used to prevent unnecessary re-renders

export default Notifications
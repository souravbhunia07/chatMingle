import { Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import {Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalenderIcon} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar 
            sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
                marginBottom: "1rem",
                border: "5px solid white", 
            }}
        />
        <ProfileCard heading={"Bio"} text={"sadhsf fsdkfhdfd"} />
        <ProfileCard heading={"UserName"} text={"Hacker"} Icon={<UserNameIcon />}/>
        <ProfileCard heading={"Name"} text={"Hacker123"} Icon={<FaceIcon />}/>
        <ProfileCard heading={"Joined"} text={moment('2024-03-01T00:00:00.000Z').fromNow()} Icon={<CalenderIcon />}/>
    </Stack>
  )
};

const ProfileCard = ({text, Icon, heading}) => (
    <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"black"}
        textAlign={"center"}
    >
        {Icon && Icon}

        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color={"#074173"} variant='caption'>{heading}</Typography>
        </Stack>
    </Stack>
)

export default Profile
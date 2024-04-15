import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'

const ChatItem = ({
    avatar={},
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessagesAlert,
    index = 0,
    handleDeleteChatOpen,
}) => {
  return (
    <Link 
      to={("/chat/${_id}")} 
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
    >
      <div 
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "black" : "unset",
          borderBottom: "1px solid #f0f0f0",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Avatar Card */}
        <Stack>
          <Typography>
            {name}
          </Typography>
          {
            newMessagesAlert && (
              <Typography>{newMessagesAlert.count} New Message</Typography>
            )
          }
        </Stack>

        {
          isOnline && <Box 

          />
        }
      </div>
    </Link>
  )
}

export default memo(ChatItem); // Will not render if the props not change
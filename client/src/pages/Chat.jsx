import { Stack } from "@mui/system";
import AppLayout from "../components/layout/AppLayout"
import { blue, grey, lightBlue } from "../constants/Color";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import { AttachFile as AttachFileIcon, Send as SendIcon } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";

const Chat = () => {

  const containerRef = useRef(null); // Create a reference to the container

  return (
    <>
      <Stack 
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grey}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >
        {/* Messages Render */}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack 
          direction={"row"} 
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Messsage Here..." />

          <IconButton 
            type="submit" 
            sx={{
              bgcolor: lightBlue,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "lightgreen",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  )
}

export default AppLayout()(Chat);
import { useParams } from "react-router-dom"
import { sampleChats } from "../../constants/SampleData"
import Title from "../shared/Title"
import Chatlist from "../specific/Chatlist"
import Header from "./Header"
import { Grid } from "@mui/material"
import Profile from "../specific/Profile"

const AppLayout = () => WrappedComponent => {
  return (props) => {
    
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    }

    return (
        <>
          <Title />
          <Header />

          <Grid container height={"calc(100vh - 4rem)"}>
            <Grid 
              item 
              sm={4}
              md={3}
              sx={{
                display: { xs: "none", sm: "block" }
              }}
              height={"100%"}
            >
              <Chatlist 
                chats={sampleChats} 
                chatId={chatId}
                handleDeleteChat={handleDeleteChat}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
              <WrappedComponent {...props} />
            </Grid>
            <Grid 
              item md={4} 
              lg={3} 
              sx={{
                display: { xs: "none", md: "block" },
                padding: "2rem",
                bgcolor: "#97E7E1"
              }}
              height={"100%"}
            >
              <Profile />
            </Grid>
          </Grid>
          {/* <div>Footer</div> */}
        </>
    )
  }
}

export default AppLayout
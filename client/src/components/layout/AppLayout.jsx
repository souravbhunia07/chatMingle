import { sampleChats } from "../../constants/SampleData"
import Title from "../shared/Title"
import Chatlist from "../specific/Chatlist"
import Header from "./Header"
import { Grid } from "@mui/material"

const AppLayout = () => WrappedComponent => {
  return (props) => {
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
              <Chatlist chats={sampleChats} />
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
                bgcolor: "#41C9E2"
              }}
              height={"100%"}
              >
              Third
            </Grid>
          </Grid>
          <div>Footer</div>
        </>
    )
  }
}

export default AppLayout
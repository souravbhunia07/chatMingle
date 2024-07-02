import { Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout"
import { Box } from "@mui/system";


const Home = () => {
  return (
    <Box bgcolor={"rgba(0, 0, 0, 0.1)"} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>Select a friend to chat</Typography>
    </Box>
  )
}

export default AppLayout()(Home); // Wrap the component with the AppLayout HOC
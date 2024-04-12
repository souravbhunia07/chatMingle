import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/Validators';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => {
        setIsLogin((prev) => !prev)
    }

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword();

    const avatar = useFileHandler("single", 3);

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleRegister = (e) => {
        e.preventDefault();
    }

  return (
    <div
        style={{
            backgroundImage: "linear-gradient(to right, #4E65FF, #92EFFD)"
        }}
    >
        <Container 
            component={"main"} 
            maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {
                    isLogin ? <>
                        <Typography variant="h5">Login</Typography>
                        <form 
                            style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}
                            onSubmit={handleLogin}
                        >
                            <TextField 
                                required
                                fullWidth
                                label="Username"
                                margin='normal'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Password"
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />

                            <Button 
                                sx={{marginTop: "1rem"}} 
                                variant='contained' 
                                color='primary' 
                                type='submit' 
                                endIcon={<LoginIcon />}
                                fullWidth
                                >
                                Login
                            </Button>

                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                            <Button 
                                // sx={{marginTop: "1rem"}} 
                                variant='contained' 
                                color='primary' 
                                type='submit' 
                                endIcon={<HowToRegIcon />}
                                onClick={toggleLogin}
                                fullWidth
                            >
                                Register
                            </Button>
                        </form>
                    </> : <>
                        <Typography variant='h5'>Register</Typography>
                        <form 
                            style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}
                            onSubmit={handleRegister}
                        >

                            <Stack 
                            position={"relative"} 
                            width={"10rem"} 
                            margin={"auto"}
                            >
                                <Avatar 
                                    sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain",
                                    }}    
                                    src={avatar.preview}
                                />

                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0, 0, 0, 0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0, 0, 0, 0,7)",
                                            color: "black",
                                        }
                                    }}
                                    component="label"
                                >
                                    <>
                                        <CameraAltIcon />
                                        <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                                    </>
                                </IconButton>
                            </Stack>

                            {avatar.error && (
                                <Typography 
                                    m={"1rem"} 
                                    color="error" 
                                    variant="caption"
                                    width={"fit-content"}
                                    display={"block"}
                                >
                                    {avatar.error}
                                </Typography>
                            )}

                            <TextField 
                                required
                                fullWidth
                                label="Name"
                                margin='normal'
                                variant='outlined'
                                value={name.value}
                                onChange={name.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Username"
                                margin='normal'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />

                            {/* Check error in username */}
                            {username.error && (
                                <Typography color="error" variant="caption">
                                    {username.error}
                                </Typography>
                            )}

                            <TextField 
                                required
                                fullWidth
                                label="Bio"
                                margin='normal'
                                variant='outlined'
                                value={bio.value}
                                onChange={bio.changeHandler}
                            />

                            <TextField 
                                required
                                fullWidth
                                label="Password"
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />

                            {/* Check error for password */}
                            {password.error && (
                                <Typography color="error" variant="caption">
                                    {password.error}
                                </Typography>
                            )}

                            <Button 
                                sx={{marginTop: "1rem"}} 
                                variant='contained' 
                                color='primary' 
                                type='submit' 
                                endIcon={<LoginIcon />}
                                fullWidth
                                >
                                Register
                            </Button>

                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

                            <Button 
                                // sx={{marginTop: "1rem"}} 
                                variant='contained' 
                                color='primary' 
                                type='submit' 
                                endIcon={<HowToRegIcon />}
                                onClick={toggleLogin}
                                fullWidth
                            >
                                Login
                            </Button>
                        </form>
                    </>
                }
            </Paper>
        </Container>
    </div>
  )
}

export default Login
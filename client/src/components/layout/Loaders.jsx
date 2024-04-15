import { Grid, Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export const LayoutLoader = () => {
    return (
        <Grid container height={"calc(100vh - 4rem)"}>
            {/* Sidebar */}
            <Grid 
                item 
                sm={4}
                md={3}
                sx={{
                    display: { xs: "none", sm: "block" }
                }}
                height={"100%"}
            >
                <Stack spacing={2} padding={2}>
                    <Skeleton variant='text' width={120} height={40}/>
                    <Skeleton variant='text' width={80} height={30}/>
                    <Skeleton variant='text' width={100} height={30}/>
                    {/* Add more Skeleton components or actual content here */}
                </Stack>
            </Grid>
            {/* Main Content */}
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                <Stack spacing={2} padding={2}>
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <Skeleton key={index} variant='text' width={'100%'} height={80}/>
                        ))
                    }
                </Stack>
            </Grid>
            {/* Right Sidebar */}
            <Grid 
                item 
                md={4} 
                lg={3} 
                sx={{
                    display: { xs: "none", md: "block" },
                }}
                height={"100%"}
            >
                <Stack spacing={2} padding={2}>
                    <Skeleton variant='text' width={100} height={40}/>
                    <Skeleton variant='text' width={80} height={30}/>
                    <Skeleton variant='text' width={120} height={30}/>
                    {/* Add more Skeleton components or actual content here */}
                </Stack>
            </Grid>
        </Grid>
    )
}

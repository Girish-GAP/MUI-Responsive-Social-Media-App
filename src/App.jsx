import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Box, Container, Grid, Stack } from '@mui/material'


const App = () => {

    return (
        <Grid >
            <Navbar/>
            <Stack direction={'row'} spacing = {2} justifyContent = "space-between">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>
             
        </Grid>
    )
}

export default App
import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Grid, Stack } from '@mui/material'
import Add from './Components/Add'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const App = () => {

    const [mode, setMode] = useState("dark")

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>

            <Grid bgcolor={"background.default"} color={"text.primary"} // for dark the white theme 
            >
                <Navbar />
                <Stack direction={'row'} spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Grid>
        </ThemeProvider>
    )
}

export default App
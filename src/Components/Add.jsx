import React, { useState } from 'react'
import { Avatar, Tooltip, Fab, Typography, Button, ButtonGroup, Modal, styled, Stack, Box, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }



    return (
        <>
            <Tooltip
                onClick={handleOpen}
                title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Button onClick={handleOpen}>Open modal</Button>
            <StyledModal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5}
                     bgcolor={"background.default"} color = {"text.primary"}    // for dark the white theme
                >
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>


                    <UserBox>
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />

                        <Typography fontWeight={500} variant='span'>Jhon Doe</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />

                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <VideoCameraBackIcon color="secondary" />
                        <PersonAddIcon color='success' />
                        <ImageIcon color="error" />
                    </Stack>

                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx = {{width : "100px"}}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>

                </Box>

            </StyledModal>
        </>
    )
}

export default Add
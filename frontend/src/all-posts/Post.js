import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Box, TextField, Button, Stack, Card, Typography, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Gear from './gear.png';
import DeleteIcon from '@mui/icons-material/Delete';




function Post(props) {
    const [editing, setEditing] = useState(false);
    const userRef = useRef();
    const messageRef = useRef();

    return (
        <>
            <Card>
                <Box>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='leftStart'
                    >
                        <Typography variant='h4'>{props.data.user}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h5'>{props.data.message}</Typography>

                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='rightStart'
                >
                    <IconButton
                        onClick={() => setEditing(!editing)}>
                        <img src={Gear} width={25} height={25} />
                    </IconButton>
                </Box>

                {editing && <TextField size="small" label={"User"} defaultValue={props.data.user} inputRef={userRef}></TextField>}
                {editing && <TextField multiline label={"Message"} size="small" defaultValue={props.data.message} inputRef={messageRef}></TextField>}
                {editing && <IconButton aria-label="delete" onClick={() => props.deleter(props.id)}>
                    <DeleteIcon />
                </IconButton>}
                {editing && <Box>
                    <Button variant="contained" onClick={() => props.updater(userRef.current.value, messageRef.current.value, props.id)}>Save Changes</Button>
                </Box>}
            </Card>

        </>
    );
}
export default Post;
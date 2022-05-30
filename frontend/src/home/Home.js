import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Box, TextField, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';





function Home(props) {
    const message = useRef();
    const user = useRef();

    const post = () => {
        axios.post("http://localhost:9000/demo/post", {
            name: user.current.value,
            post: message.current.value
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        props.setShowHomePage(false)
        props.bigFunction()

    }
    return (
        <>
            {props.showHomePage &&
                < Box justifyContent="center" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField inputRef={user} id="input-with-sx" label="UserName" variant="standard" />
                </Box>
            }
            {props.showHomePage &&
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '75ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >


                    <TextField
                        inputRef={message}
                        width='50ch'
                        label="Message"
                    />
                </Box>
            }
            {props.showHomePage &&

                <Link to="/all-posts" className='nav-link'>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={() => post()} >Post</Button>

                </Link>
            }


            {props.showHomePage &&
                <Link to="/all-posts" className='nav-link'>
                    <Button variant="outlined" onClick={() => props.setShowHomePage(false)}>View All Posts</Button>
                </Link>
            }
            {!props.showHomePage && <Outlet></Outlet>}


        </>);
}

export default Home;
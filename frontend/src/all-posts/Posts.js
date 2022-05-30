import { useState, useEffect } from "react"
import axios from "axios"
import { Box, TextField, Button, Stack } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Post from './Post.js'

function Posts(props) {
    const deleter = (id) => {
        axios.delete("http://localhost:9000/demo/delete?id=" + id)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        props.bigFunction()
    }
    const updater = (user, message, id) => {
        axios.put("http://localhost:9000/demo/put", {
            user: user,
            post: message,
            id: id
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        props.bigFunction()
    }


    const [timeFrame, setTimeFrame] = useState("");
    return (<>
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='leftStart'>
            <Link to="/" className='nav-link'>
                <Button variant="outlined" onClick={() => props.setShowHomePage(true)}>New Post</Button>
            </Link>
        </Box>

        <Outlet></Outlet>
        <h4>{"All Posts from the Past" + timeFrame}</h4>
        <Stack
            spacing={2}>
            {Object.entries(props.info).map(([key, value]) => (
                <Post
                    key={key}
                    id={key}
                    data={value}
                    deleter={deleter}
                    updater={updater}
                ></Post>

            ))}
            <p></p>
        </Stack>

    </>);


}

export default Posts;
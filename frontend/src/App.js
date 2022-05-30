import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import { Box, TextField, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';


function App() {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/demo/info?myParam=10")
      .then((res) => res.text())
      .then((text) => setInfo(text))
      .catch((err) => console.log(err))
  }, [])

  const post = () => {
    axios.post("http://localhost:9000/demo/post", {
      field1: "test"
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Box justifyContent="center" sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="UserName" variant="standard" />
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' },
        }}
        noValidate
        autoComplete="off"
      >


        <TextField
          width='50ch'
          label="Message"
        />
      </Box>

      <p>{info}</p>
      <Button variant="contained" endIcon={<SendIcon />} onClick={() => post()} >Post</Button>
      <p></p>
      <Button variant="outlined" >View All Posts</Button>
    </div >
  );
}

export default App;

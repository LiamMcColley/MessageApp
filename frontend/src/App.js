import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import { Box, TextField, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from "./all-posts/Posts"
import Home from './home/Home.js'

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [info, setInfo] = useState();
  const bigFunction = () => {
    fetch("http://localhost:9000/demo/info")
      .then((res) => res.json())
      .then((text) => setInfo(text.result))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    bigFunction()
  }, [])

  return (
    <div className="App">

      <BrowserRouter
        className='App'
      >
        <Routes>
          <Route
            path='/'
            element={<Home setShowHomePage={setShowHomePage} showHomePage={showHomePage} bigFunction={bigFunction} />}
          >
            <Route
              path='/all-posts'
              element={<Posts setShowHomePage={setShowHomePage} info={info} bigFunction={bigFunction} />}
            />

          </Route>
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;

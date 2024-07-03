import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Videos from './Pages/Videos/Videos'
import { API_KEY } from './Data'
const App = () => {

  const [prevsidebar, setsidebar] = useState(true)
  const [darkmode, setdarkmode] = useState('light')
  const [category, setcategory] = useState(0)
  const [connectionstatus, setconnectionstatus] = useState()
  
  const fetchyoutubeapi = async () => {
    const youtubeapi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(youtubeapi).then(response => response.json).then(data => setconnectionstatus(data.items))
  }

  useEffect(() => {
    fetchyoutubeapi();
  })

  if (!connectionstatus) {
    return (
      <div>
        <Navbar setsidebar={setsidebar} setdarkmode={setdarkmode} darkmode={darkmode} />
        <Routes>
          <Route path="/" element={<Home prevsidebar={prevsidebar} darkmode={darkmode} category={category} setcategory={setcategory} />} />
          <Route path="/video/:categoryid/:videoid" element={<Videos darkmode={darkmode} category={category} />} />
        </Routes>
      </div>
    )
  }
  else {
    return (
      <div className='error_status'>
        <div className="status">
          <h1>Connect to the internet</h1>
          <p>Your offline.Check your connection</p>
          <Link to="/" className='button'>
            Retry
          </Link>
        </div>
      </div>
    )
  }
}

export default App
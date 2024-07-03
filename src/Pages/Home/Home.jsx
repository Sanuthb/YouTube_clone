import React, { useState } from 'react'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { Feeds } from '../../Components/Feeds/Feeds'
import './Home.css'
import Topbar from '../../Components/Topbar/Topbar'
const Home = ({ prevsidebar, darkmode, category, setcategory }) => {

  return (
    <>
      <Sidebar prevsidebar={prevsidebar} category={category} setcategory={setcategory} darkmode={darkmode} />
      <div className={`container ${prevsidebar ? "" : 'large-container'} ${darkmode === 'light' ? 'lightmode' : 'darkmode'}`}>
        <Topbar category={category} setcategory={setcategory} darkmode={darkmode} prevsidebar={prevsidebar}/>
        <Feeds category={category} darkmode={darkmode} />
      </div>
    </>
  )
}

export default Home
import React from 'react'
import './Videos.css'
import {Play_video} from '../../Components/Play_video/Play_video'
import { useParams } from 'react-router-dom'
import Recommend from '../../Components/Recommend/Recommend'
const Videos = ({darkmode,category}) => {

  const {videoid,categoryid} =useParams()

  return (
    <div className={`video-container ${darkmode==='light'?'lightmode':'darkmode'}`}>
      <Play_video videoid={videoid}/>
      <Recommend categoryid={categoryid} category={videoid} darkmode={darkmode}/>
    </div>
  )
}

export default Videos 
import React, { useEffect, useState } from 'react'
import './Play_video.css'
import { API_KEY } from '../../Data'
export const Play_video = ({videoid}) => {

  const [videoapidata,setvideoapidata]=useState()

  const fetchvideo = async ()=>{
      const videodetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&regionCode=IN&key=${API_KEY}`
      await fetch(videodetails_url).then(response=>response.json).then(videodetails=>setvideoapidata(videodetails.items))
    }

   useEffect(()=>{
      fetchvideo();
   },[]) 

   console.log(videoapidata)
  return (
    <div className='play-video'>
        <iframe width="900" height="500" src={`https://www.youtube.com/embed/${videoid}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import './Feeds.css'
import { API_KEY, value_converter } from '../../Data'
import { Link } from 'react-router-dom'
import moment from 'moment'
export const Feeds = ({ category,darkmode}) => {
    const [data, setData] = useState([])
    const Fetchdata = async () => {
        const VideoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(VideoList_Url).then(response => response.json()).then(data => setData(data.items))
    }
    useEffect(() => {
        Fetchdata();
    }, [category])
    return (
        <div className={`Feed ${darkmode==='light'?'lightmode':'darkmode'}`}>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.channelId}/${item.id}`} className={`card ${darkmode==='light'?'lightmode':'darkmode'}`}>
                        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                        <h2>{item.snippet.title}</h2>
                        <h4>{item.snippet.channelTitle}</h4>
                        <p>{value_converter(item.statistics.viewCount)}&bull;{moment(item.snippet.publishedAt).fromNow()}</p>

                    </Link>
                )
            })}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './Recommend.css'
import { API_KEY, value_converter} from '../../Data'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Recommend = ({ categoryid, category ,darkmode}) => {

    const [videoapidate, setvideoapidata] = useState([])
    const [randomcategoryid,setcategroryid]=useState(0)

    const random_category_id=()=>{
        var arr=[1,2,10]
        var random=arr[Math.floor(Math.random()*arr.length)]
        console.log(random)
        setcategroryid(random)
        console.log(randomcategoryid)
    }
    const fetchdata = async () => {
        const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=IN&videoCategoryId=${randomcategoryid}&key=${API_KEY}`
        await fetch(relatedvideo_url).then(res => res.json()).then(data => setvideoapidata(data.items))

    }
    useEffect(() => {
        fetchdata();
    },[])

    useEffect(()=>{
        random_category_id()
    })
    return (
        <div className={`recommend ${darkmode==='light'?'lightmode':'darkmode'}`}>
            {videoapidate.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.channelId}/${item.id}`} key={index} className={`side-video-list ${darkmode==='light'?'lightmode':'darkmode'}`}>
                       <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <h4>{item.snippet.channelTitle}</h4>
                            <p>{value_converter(item.statistics.viewCount)}&bull;{moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommend
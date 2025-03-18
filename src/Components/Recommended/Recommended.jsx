import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail from '../../assets/thumbnail1.png'
import thumbnai2 from '../../assets/thumbnail2.png'
import thumbnai3 from '../../assets/thumbnail3.png'
import thumbnai4 from '../../assets/thumbnail4.png'
import thumbnai5 from '../../assets/thumbnail5.png'
import thumbnai6 from '../../assets/thumbnail6.png'
import thumbnai7 from '../../assets/thumbnail7.png'
import thumbnai8 from '../../assets/thumbnail8.png'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([])

    const fetchData = async () =>{
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return(
             <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
               <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} views</p>
              </div>
             </Link>
            )
        })}                         
    </div>
  )
}

export default Recommended



// kunalkk@github1205


// Netflix-Clone | LINK                                                                                              January 2025
// Built responsive Netflix clone, using React
// Youtube-Clone | LINK                                                                                             March 2025
// Building responsive Youtube clone, utilizing React 


import React, { useEffect, useState } from 'react'
import "./Player.css";
import {useParams ,useNavigate} from "react-router-dom";
import back_arrow  from "../../assets/back_arrow_icon.png"

const Player = () => {
  const navigate = useNavigate();
 const {id} = useParams() 
  const[apidata,setApidata] = useState({
    name :"",
    key:"",
    published_at:"",
    type:""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjdjZTA1MjI2ODYxNTBhYTRjNDU3OGUwYTA4MjE0NCIsIm5iZiI6MTcyMjU4MTQ0Ni42Mywic3ViIjoiNjZhYzgxYzY2MzAxODUwMjJiYzAyYzA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0qZDD_ZKNkAWHr_lrLn7DxckroSSFrY6c7XQVFGyzrM'
    }
  };


  useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApidata(res.results[0]))
      .catch(err => console.error(err));

  },[])
  return (
    <div className='player'>
      <img src={back_arrow} alt="image" onClick={()=>navigate("/")} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div> 
  )
}

export default Player
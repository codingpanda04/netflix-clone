import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const[vidUrl, setVidUrl] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWNkMTZkODY3ZjA1Njg5MzJkN2UyMTFiOTUxNTllMyIsIm5iZiI6MTczNjgzNDEyNy43NDQsInN1YiI6IjY3ODVmYzRmZmUyOTRhMGI0NzRlNjMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4p334LKLVdSLw8z-tl5U3HbOwCauDUjLMVOZ_ArFxk'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setVidUrl(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${vidUrl.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{vidUrl.published_at.slice(0,10)}</p>
        <p>{vidUrl.name}</p>
        <p>{vidUrl.type}</p>
      </div>
    </div>
  )
}

export default Player
import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWNkMTZkODY3ZjA1Njg5MzJkN2UyMTFiOTUxNTllMyIsIm5iZiI6MTczNjgzNDEyNy43NDQsInN1YiI6IjY3ODVmYzRmZmUyOTRhMGI0NzRlNjMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4p334LKLVdSLw8z-tl5U3HbOwCauDUjLMVOZ_ArFxk'
    }
  };
  

  const handleWheel = (event)=>{
    //event.preventDefault();
    //event.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    //cardsRef.current.addEventListener('wheel', handleWheel);

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
        return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
        </Link>
      })}
      </div>
    </div>
  )
}

export default TitleCards
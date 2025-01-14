import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to an ancient secret order, a young man living in modern Instabul embarks
            on a quest to save the city from an immortal enemy
          </p>
          <div className="hero-btns">
            <button><img src={play_icon} alt="" />Play</button>
            <button className='dark'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"upcoming"}/>
      <TitleCards title={"Only on Netflix"} category={"top_rated"}/>
      <TitleCards title={"Upcoming"} category={"popular"}/>
      <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
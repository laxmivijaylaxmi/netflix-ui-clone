import React from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import hero from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../component/TitleCards/TitleCards";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero} alt="image" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="image" className="caption-img" />
          <p>
            A young man uncovers a hidden legacy, pulling him into a
            centuries-old battle between good and evil in the heart of modern
            Istanbul.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="More Info" /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards  title={"Only on Netflix"} category={"popular"} />
        <TitleCards  title={"Upcoming"} category={"upcoming"} />
        <TitleCards  title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

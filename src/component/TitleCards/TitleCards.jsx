import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import {Link} from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apidata, setApidata] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjdjZTA1MjI2ODYxNTBhYTRjNDU3OGUwYTA4MjE0NCIsIm5iZiI6MTcyMjU4MTQ0Ni42Mywic3ViIjoiNjZhYzgxYzY2MzAxODUwMjJiYzAyYzA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0qZDD_ZKNkAWHr_lrLn7DxckroSSFrY6c7XQVFGyzrM",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY * 2;
    }
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category :'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApidata(res.results));
    const cardsContainer = cardsRef.current;
    if (cardsContainer) {
      cardsContainer.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"} </h2>
      <div className="cards_data" ref={cardsRef}>
        {apidata.map((item, index) => {
          return (
            <Link to={`/player/${item.id}`} className="cards" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="image" />
              <p>{item.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

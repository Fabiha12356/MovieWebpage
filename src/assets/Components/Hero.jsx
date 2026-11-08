import React from 'react'

import { useState } from 'react'
import "./Hero.css"


export const Hero = ({setMovies}) => {

let [search,setSearch] = useState("")

let getMovie = async()=>{

let url = `https://api.themoviedb.org/3/search/movie?query=${search}`;

  console.log(url);

  let searchMovie = await fetch(url,
    {
        headers:{
            Authorization :`Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            accept: 'application/json'
        }
    }
  )
  let Get =  await searchMovie.json()
  console.log(Get);
  console.log(Get.results);
  setMovies(Get.results);
}

  return (
     <section className="movie-hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7 hero-content">
            <span className="hero-tag">🎬 YOUR CINEMA DESTINATION</span>

            <h1>
              Discover Your Next
              <span> Favourite Movie.</span>
            </h1>

            <p>
              Explore amazing movies, discover new stories
              and find your next cinematic experience.
            </p>

            <div className="hero-search">
              <input
                type="text"
                placeholder="Search your favourite movie..."
                value={search}
                onChange={(e)=>{
console.log(e.target.value)
setSearch(e.target.value)
                }}
              />
              <button type="button" onClick={getMovie}>Search</button>
            </div>

            <div className="hero-stats">
              <div>
                <h4>10K+</h4>
                <span>Movies</span>
              </div>

              <div>
                <h4>5K+</h4>
                <span>Reviews</span>
              </div>

              <div>
                <h4>100%</h4>
                <span>Entertainment</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 hero-image">
            <div className="hero-image-box">
              <div className="cinema-icon">🎥</div>
              <div className="popcorn-icon">🍿</div>
              <div className="film-icon">🎞️</div>
              <h3>Lights. Camera. Action!</h3>
              <p>Your next movie adventure starts here.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Hero
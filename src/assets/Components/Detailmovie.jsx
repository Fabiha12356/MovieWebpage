import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

import "./Detailmovie.css"
export const Detailmovie = () => {
    let [movieDetails, setMovieDetails] = useState({});

let { id } = useParams();
console.log(id)


useEffect(()=>{

async function getDetailMovie(params) {
    let response = await fetch(
       `https://api.themoviedb.org/3/movie/${id}`,
         {
            headers :{
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          accept: 'application/json'
            }
         }
    )
    let get = await response.json()
    console.log(get)
    setMovieDetails(get)
}
getDetailMovie()

},[id])

  return (
  <div className="details-page">

   
 {/* Movie Backdrop */}
    <div
      className="details-backdrop"
      style={{
        backgroundImage: movieDetails.backdrop_path
          ? `linear-gradient(to right, #100c18 15%, rgba(16,12,24,0.8), rgba(16,12,24,0.4)),
           url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
          : "none"
      }}
    >

      <div className="details-content">

        {/* Movie Poster */}
        <div className="details-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>

        {/* Movie Information */}
        <div className="details-info">

          <span className="details-tag">MOVIE DETAILS</span>

          <h1>{movieDetails.title}</h1>

          <p className="details-date">
            Release Date: {movieDetails.release_date}
          </p>

          <div className="details-meta">
            <span>⭐ {movieDetails.vote_average?.toFixed(1)} / 10</span>
            <span>⏱ {movieDetails.runtime} min</span>
            <span>🌐 {movieDetails.original_language?.toUpperCase()}</span>
          </div>

          <h3>Overview</h3>
          <p className="details-overview">
            {movieDetails.overview}
          </p>

          <h3>Genres</h3>
          <div className="details-genres">
            {movieDetails.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <div className="details-extra">
            <p>
              <strong>Status:</strong> {movieDetails.status}
            </p>
            <p>
              <strong>Budget:</strong> ${movieDetails.budget?.toLocaleString()}
            </p>
            <p>
              <strong>Revenue:</strong> ${movieDetails.revenue?.toLocaleString()}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
);
}
export default Detailmovie
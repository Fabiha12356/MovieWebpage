import React from 'react'

import "./Fav.css"

export const Fav = ({favorites}) => {
  return (
    <div className="fav-container">

      <div className="fav-heading">
        <h2>My Favorites ❤️</h2>
        <p>Your favourite movies in one place</p>
      </div>

      <div className="fav-list">

        {
        favorites.length === 0 ? (
          <h4 className="no-fav">No Favorites Yet!</h4>
        ) : (

          favorites.map((movie) => (
            <div className="fav-item" key={movie.id}>

              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />

              <h5>{movie.title}</h5>

            </div>
          ))

        )}

      </div>

    </div>
  );

}
export default Fav
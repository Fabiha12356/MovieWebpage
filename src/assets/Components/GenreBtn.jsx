import React from 'react'


import "./GenreBtn.css"
export const GenreBtn = () => {
  return (
   <div className="genre-buttons">
  <button className="genre-btn active">All</button>
  <button className="genre-btn">Action</button>
  <button className="genre-btn">Comedy</button>
  <button className="genre-btn">Horror</button>
  <button className="genre-btn">Romance</button>
  <button className="genre-btn">Thriller</button>
  <button className="genre-btn">Sci-Fi</button>
  <button className="genre-btn">Animation</button>
</div>
  )
}

export default GenreBtn
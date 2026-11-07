import React from 'react'
import { useEffect,useState } from 'react'
import "./MovieSection.css"
export const Moviesection = () => {

let [movies,setMovies] = useState([])

useEffect(()=>{
    async function getMovies() {
        let Movies = await fetch(
             'https://api.themoviedb.org/3/movie/popular',
            {
                headers:{
                     Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                }
            }   
        )
        let Get = await Movies.json()
        console.log(Get);
        setMovies(Get)
        console.log(movies);
    }
    getMovies();
},[])
  return (
   <section className="popular-movies">
      <div className="container">

        <div className="popular-heading">
          <div>
            <span className="popular-tag">EXPLORE COLLECTION</span>
            <h2>Popular <span>Movies</span></h2>
            <p>Discover movies everyone is watching.</p>
          </div>

          <button className="view-all-btn">View All →</button>
        </div>

        <div className="row g-4">

          {[1, 2, 3, 4].map((item) => (
            <div className="col-lg-3 col-md-6" key={item}>
              <div className="movie-card">

                <div className="movie-poster">
                  <span className="poster-icon">🎬</span>
                  <span className="movie-rating">★ 8.5</span>
                </div>

                <div className="movie-info">
                  <h5>Movie Title</h5>
                  <p>2026 • Action / Adventure</p>
                  <button className="details-btn">
                    View Details →
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
export default Moviesection
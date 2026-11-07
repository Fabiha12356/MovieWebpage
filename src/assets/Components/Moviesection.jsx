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
        setMovies(Get.results)
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

         {
            movies.map((item)=>{
                console.log(item);
         return   <div className="col-lg-3 col-md-6" key={item.id}>
              <div className="movie-card">

                <div className="movie-poster">
                 <img
  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
  alt={item.title}
  width={300}
/>
                  <span className="movie-rating">★{item.vote_average}</span>
                </div>

                <div className="movie-info">
                  <h5>{item.title}</h5>
                  <p>{item.release_date}</p>
                  <button className="details-btn">
                    View Details →
                  </button>
                </div>

              </div>
            </div>
            })
         }
        </div>
      </div>
    </section>
  )
}
export default Moviesection
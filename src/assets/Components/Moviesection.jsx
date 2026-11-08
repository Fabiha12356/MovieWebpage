import React from 'react'
import { useEffect,useState } from 'react'
import "./MovieSection.css"
import "./GenreBtn.css"
export const Moviesection = ({getmovies,condition}) => {

let [movies,setMovies] = useState([])

let [setgenre,setSelectGenre] = useState(null)

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

const handleGenreClick = async (genreId) => {

  setSelectGenre(genreId);

  let url = genreId === null
    ? 'https://api.themoviedb.org/3/movie/popular'
    : `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;

  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      accept: 'application/json'
    }
  });

  let data = await response.json();

  setMovies(data.results);
};




  return (
   

        (condition == true) ? <> 

<div className="genre-buttons">

  <button
    className="genre-btn"
    onClick={() => handleGenreClick(null)}
  >
    All
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(28)}>
    Action
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(35)}>
    Comedy
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(27)}>
    Horror
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(10749)}>
    Romance
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(53)}>
    Thriller
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(878)}>
    Sci-Fi
  </button>

  <button className="genre-btn" onClick={() => handleGenreClick(16)}>
    Animation
  </button>

</div>

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
    </>:
    <>
     <section className="popular-movies">
      <div className="container">


        <div className="row g-4">

         {
            getmovies.map((item)=>{
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
    </>
    
  

  )
}
export default Moviesection
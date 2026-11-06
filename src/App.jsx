import { useState,useEffect } from 'react'


import React from 'react'

export const App = () => {
    let token = import.meta.env.VITE_TMDB_TOKEN;
    console.log(token);

 useEffect(()=>{

  async function getMovies(params) {
     let response = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            }
          }
        );
        let dta= await response.json()
        console.log(dta.results[0]);
  }
  getMovies()

 },[])

  return (
    <div>App</div>
  )
}


export default App

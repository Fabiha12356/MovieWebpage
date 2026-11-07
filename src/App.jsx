import { useState,useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbaar from './assets/Components/Navbaar'

import React from 'react'

// export const App = () => {
//     let token = import.meta.env.VITE_TMDB_TOKEN;
//     console.log(token);

//  useEffect(()=>{

//   async function getMovies(params) {
//      let response = await fetch(
//           'https://api.themoviedb.org/3/movie/popular',
//           {
//             headers: {
//               Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
//             }
//           }
//         );
//         let dta= await response.json()
//         console.log(dta.results[0]);
//   }
//   getMovies()

//  },[])

//   return (
//     <div>App</div>
//   )
// }


export const App = () => {
  return (
    <BrowserRouter>
    <Navbaar/>
    </BrowserRouter>
  )
}


export default App

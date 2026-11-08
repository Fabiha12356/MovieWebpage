import { useState,useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbaar from './assets/Components/Navbaar'

import React from 'react'
import Moviesection from './assets/Components/Moviesection'
import Hero from './assets/Components/Hero'



export const App = () => {
  let [getmovies, setMovies] = useState([]);
  return (
   <>
   <Hero setMovies={setMovies}/>
   <Moviesection getmovies={getmovies} condition={false}/>
   </>
  )
}


export default App

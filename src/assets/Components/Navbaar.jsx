import React from 'react'
import { Link,Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';


import "./Navbaar.css"
import Moviesection from './Moviesection';
import Fav from './Fav';
import Home from './Home';
import Detailmovie from './Detailmovie';

export const Navbaar = () => {
     let [ favorites,setFavorites] = useState([])
  return (
    <>
       <nav className="navbar">

      <h2 className="logo">
        🎬 Movie <span>Explorer</span>
      </h2>

        <div className="nav-links">
      <Link to='/'>Home</Link>
      <Link to='/movie'>Movie</Link>
      <Link to='/fav'>Favourite</Link>
      </div>

      <button className="theme-btn">☀️</button>
    </nav>


<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movie' element={<Moviesection condition={true}
     favorites={favorites} setFavorites={setFavorites}/>}/>
    <Route path='/fav' element={<Fav  favorites={favorites}/>}/>
    <Route path='/movie/:id' element={<Detailmovie/>}/>
    
</Routes>
    </>
  )
}
export default Navbaar
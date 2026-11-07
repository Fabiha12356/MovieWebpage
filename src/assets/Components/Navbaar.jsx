import React from 'react'
import { Link,Route,Routes } from 'react-router-dom';


import "./Navbaar.css"
import Moviesection from './Moviesection';
import Fav from './Fav';
import Home from './Home';

export const Navbaar = () => {
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
    <Route path='/moviesection' element={<Moviesection/>}/>
    <Route path='/fav' element={<Fav/>}/>
</Routes>
    </>
  )
}
export default Navbaar
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import Watchlist from "./Components/Watchlist"
import Navbar from './Components/Navbar';

function App() {
 
    return(
      <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/watchlist" element = {<Watchlist></Watchlist>}></Route>
        <Route path = "/watchlist/movie" element = {<Watchlist></Watchlist>}></Route>

      </Routes>
      </>
    )

    
}

export default App;

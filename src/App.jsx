import React from 'react'
import Home from './components/Home'
import { Link } from 'react-router-dom'
import "./App.css"
export default function App() {
  return (
   <>
   <header>
    <Link to={"/"}>
      <img src={require('./images/netflix-logo.png')} alt={"logo"} width="150px" />
    </Link>
    <Link className="Nav-Link" to={"/trending"}>Trending</Link>
   </header>
   <Home/>
   <footer><p>Made by Helmi Qatqat</p></footer>
   </>
  )
}
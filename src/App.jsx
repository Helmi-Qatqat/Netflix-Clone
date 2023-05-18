import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
   <>
   <header>
    <Link to={"/"}>
      <img src={require('./images/netflix-logo.png')} alt={"logo"} width="150px" />
    </Link>
    <Navbar/>
   </header>
   <Home/>
   <footer><p>Made by Helmi Qatqat</p></footer>
   </>
  )
}
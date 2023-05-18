import React from "react"
import MovieList from "./MovieList"
import Favlist from "./Favlist"
import { Routes, Route } from "react-router-dom"
export default function Home() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/favorite" element={<Favlist/>}/>
    </Routes>
    </>
  )
}




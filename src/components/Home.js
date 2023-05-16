import React from "react"
import MovieList from "./MovieList"
import { Routes, Route } from "react-router-dom"
export default function Home() {
  return (
    <>
    <Routes>
      <Route path="/trending" element={<MovieList />}/>
      <Route path="/" element={<div>Welcome To the Home Page</div>}/>
    </Routes>
    </>
  )
}




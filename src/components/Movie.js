import React from "react";
import "./Movie.css"

export default function Movie(props) {
  
  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.data.poster_path})`,
  }
  function triggerer() {
    props.setMovieDetails((prevMovieData) => props.data)
    props.handleShow()
  }
  return (
    <>
      <div className="movie-card" key={props.data.id} >
        <div className="movie-card-background-image" style={divStyle}></div>
        <img src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} width={"50px"} alt={`${props.data.title}`}></img>
        <h3>{props.data.title}</h3>
        <button onClick={triggerer}>Add to favorites</button>
      </div>
    </>
  )
}

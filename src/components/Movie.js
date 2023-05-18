import React from "react";
import Button from "react-bootstrap/Button"
import axios from "axios";
import "./Movie.css"

export default function Movie(props) {
  const [movieData, setMovieData] = React.useState(props.data)

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.data.poster_path})`,
  }
  function addFavoriteHandler() {
    props.setMovieDetails((prevMovieData) => movieData)
    props.handleShow()
  }

  function updateFavoriteHandler() {
    props.handleShow()
    props.setClickedMovie((prevData) => movieData)
  }
  
  function deleteFavoriteHandler(event) {
    const cardID = movieData.id
    axios.delete(`https://movies-library-tyy6.onrender.com/movie/${cardID}`)
  }

  return (
    <>
      <div className="movie-card" key={movieData.id} id={movieData.id} >
        <div className="movie-card-background-image" style={divStyle}></div>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={`${movieData.title}`}></img>
        <h3>{movieData.title}</h3>
        <div className="comment-container">
          <p>Comment:</p>
          <p>{movieData.comment}</p>
        </div>
        <div className="buttons-container">
          {!props.showFavButton && <Button onClick={addFavoriteHandler} variant="primary">Add to favorites</Button>}
          {props.showFavButton && <Button variant="success" onClick={updateFavoriteHandler}>Update</Button>}
          {props.showFavButton && <Button variant="danger" onClick={deleteFavoriteHandler}>Delete</Button>}
        </div>
      </div>
    </>
  )
}

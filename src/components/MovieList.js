import Movie from "./Movie"
import React from 'react'
import "./MovieList.css"
import ModalMovie from "./ModalMovie"
export default function MovieList(props) {
  const [movieDetails, setMovieDetails] = React.useState({})
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [trendingMovies, setTrendingMovies] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("https://movies-library-tyy6.onrender.com/trending")
    .then((data)=> data.json())
    .then((data) => {
      setTrendingMovies(data)
      setIsLoading(false)
    })
  },[])

  return (
  <>
    <div className="movies-main-container">
      <div className="movies-secondary-container">
        {isLoading && <div>Loading . . .</div>}
        {!isLoading && trendingMovies.map((e) => (
          <Movie key={e.id} data={e} handleShow={handleShow} setMovieDetails={setMovieDetails}/>
        ))}
      </div>
    </div>
    <ModalMovie handleClose={handleClose} show={show} movieDetails={movieDetails}/>
    </>
  )
}
import React from "react"
import axios from "axios"
import Movie from "./Movie"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalMovie.css';

export default function Favlist() {
  const [favMovies, setFavMovies] = React.useState({})
  const [showFavButton, setShowFavButton] = React.useState(true)
  const [isFetched, setIsFetched] = React.useState(false)
  const [showUpdate, setShowUpdate] = React.useState(false)
  const [clickedMovie, setClickedMovie] = React.useState({})

  const handleClose = () => setShowUpdate(false);
  const handleShow = () => setShowUpdate(true);

  function updateHandler(event) {
    event.preventDefault()
    const comment = event.target.parentElement.children[0].value
    const data = {
      comment: [comment]
    }
    handleClose()
    axios.put(`https://movies-library-tyy6.onrender.com/movie/${clickedMovie.id}`, data)
    axios.get("https://movies-library-tyy6.onrender.com/getmovies")
    .then((result) => {
      setFavMovies((prevData) => result.data)
    })
  }

  React.useEffect(() => {
    axios.get("https://movies-library-tyy6.onrender.com/getmovies")
    .then((result) => {
      setFavMovies((prevData) => result.data)
      setIsFetched(true)
    })
  }, [favMovies])

  return (
  <>
  <div className="movies-main-container">
  <Modal
        show={showUpdate}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        key={clickedMovie.id}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{clickedMovie.title}</h3>
          <img className='modal-img'src={`https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`} alt={`${clickedMovie.title}`}></img>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <form onSubmit={updateHandler}>
            <input type='text'placeholder="Put your comment"/>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="success" onClick={updateHandler}>Update</Button>
          </form>
        </Modal.Footer>
      </Modal>
    <div className="movies-secondary-container">
      {!isFetched && <div>Loading . . .</div>}
      {isFetched && favMovies.map((e) => (
        <Movie data={e} setClickedMovie={setClickedMovie} showFavButton={showFavButton} key={e.id} handleShow={handleShow} handleClose={handleClose}/>
      ))}
    </div>
  </div>
  </>
  )
}
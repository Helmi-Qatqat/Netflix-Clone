import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './ModalMovie.css';

export default function ModalMovie(props) {
  const details = props.movieDetails
  function addHandler() {
    axios.post('https://movies-library-tyy6.onrender.com/add', details)
    props.handleClose()
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        key={details.id}
      >
        <Modal.Header closeButton>
          <Modal.Title>{details.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='modal-img'src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`${details.title}`}></img>
          <p>{details.release_date}</p>
          <p>{details.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandler}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
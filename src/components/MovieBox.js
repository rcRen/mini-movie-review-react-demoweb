import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500";
const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className='card text-center bg-secondary mb-3'>
            <div className='card-body' style={{padding:"10px"}}>
                <img className='card-img' style={{height:'230px', width:'170px'}} src={API_IMG + poster_path} alt="img"></img>
                <div className='card-body'>
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View Movie</button>
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title><h3>{title}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className='rounded mx-auto d-block' style={{height:'400px', width:'350px'}} src={API_IMG + poster_path} alt="img"></img>
                            <br></br>
                            <h5><b>IMDb RATING: {vote_average}</b></h5>                    
                            <h5><i>Release Date: {release_date}</i></h5>
                            <hr></hr>
                            <h6><b>Overview</b></h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;
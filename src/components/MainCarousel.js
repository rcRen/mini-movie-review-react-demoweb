import Carousel from 'react-bootstrap/Carousel';
import './MainCarousel.css';

function MainCarousel() {
    return (
        <div className="box">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w500/c1bz69r0v065TGFA5nqBiKzPDys.jpg"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize:"1.5rem"}}>Lyle, Lyle, Crocodile</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize:"1.5rem"}}>Black Panther: Wakanda Forever</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w500/sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize:"1.5rem"}}>The Minute You Wake Up Dead</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainCarousel;
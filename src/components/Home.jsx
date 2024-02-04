import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="container-home">
            <div id="carouselExampleIndicators" className="carousel slide w-100 ">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://front.dev.malditohard.com.ar/img/prod/abd871d8-2ee2-43e0-aa3a-9fd8c3910250a-ver.webp" className="d-block w-100 " height="600" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://front.dev.malditohard.com.ar/img/prod/44927281-9501-492f-905f-42a2a5c3e943amd-1.webp" className="d-block w-100 " height="600" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://front.dev.malditohard.com.ar/img/prod/7948c940-23a9-41a1-b278-ce53a1a0243f2-razer.webp" className="d-block w-100 " height="600"alt="..."/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default Home
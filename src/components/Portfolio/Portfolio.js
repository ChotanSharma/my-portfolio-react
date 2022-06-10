import React from 'react';
import "./portfolio.css";
import Carousel from 'react-bootstrap/Carousel';
function Portfolio ()  {
    return (
        <div className='portfolio' id='portfolio'>
            <div class="port-container">
					<header>
						<h1>Portfolio</h1>
						<p>I really enjoyed working in these projects. They had been amazing opportunities to hone my skills as a full stack developer.</p>
					</header>
					<div class="row">
                        <h2>Here're some of my projects:</h2>
						<Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/the-guest-list-project.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/random-travel-generator.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/run-buddy-site.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>				
        </div>
    </div>                   
 </div>
 )
    
}

export default Portfolio;


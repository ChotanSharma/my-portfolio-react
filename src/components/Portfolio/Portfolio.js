import React from 'react';
import "./portfolio.css";
import {Carousel} from "react-bootstrap";

function Portfolio ()  {
    return (

        <div class="container">
					<header>
						<h1>Portfolio</h1>
						<p>I really enjoyed working in these projects. They had been amazing opportunities to hone my skills as a full stack developer.</p>
					</header>
					<div class="row">
                        <h2>Here're some of my projects:</h2>
						<Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-80"
                                src="assets/random-travel-generator.png"
                                alt="First Project Slide"
                                />
                                <Carousel.Caption>
                                <h5>Random Travel Generator App</h5>
                                <h3><a href="https://8bitgaming.github.io/random-travel-generator/">Random Travel Generator</a></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-80"
                                src="assets/random-travel-generator.png"
                                alt="First Project Slide"
                                />
                                <Carousel.Caption>
                                <h5>Random Travel Generator App</h5>
                                <h3><a href="https://8bitgaming.github.io/random-travel-generator/">Random Travel Generator</a></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-80"
                                src="assets/random-travel-generator.png"
                                alt="First Project Slide"
                                />
                                <Carousel.Caption>
                                <h5>Random Travel Generator App</h5>
                                <h3><a href="https://8bitgaming.github.io/random-travel-generator/">Random Travel Generator</a></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-80"
                                src="assets/random-travel-generator.png"
                                alt="First Project Slide"
                                />
                                <Carousel.Caption>
                                <h5>Random Travel Generator App</h5>
                                <h3><a href="https://8bitgaming.github.io/random-travel-generator/">Random Travel Generator</a></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
						
                </div>
            </div>            

        
    )
    
}

export default Portfolio;


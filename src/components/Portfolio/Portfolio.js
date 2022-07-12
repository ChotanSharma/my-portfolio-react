import React from 'react';
import "./portfolio.css";
import Carousel from 'react-bootstrap/Carousel';
function Portfolio ()  {
    return (
        <div className='portfolio' id='portfolio'>
            <div class="port-container">
					<header>
						<h2 className='port-text'>Here're some of my projects:</h2>
						<h3 className='port-text-p'>They had been amazing opportunities to hone my skills as a full stack developer.</h3>
					</header>
			<Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/the-guest-list-project.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3><a href="https://hidden-spire-39352.herokuapp.com/" target="_blank">The Guest List</a></h3>
                    <p>The Guest List is a full stack application that allows a user to signup, login, and add guests to their wedding guest list.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/random-travel-generator.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3><a href="https://8bitgaming.github.io/random-travel-generator/" target="_blank">Random Travel Generator</a></h3>
                    <p className='p-projectTwo'>This application is very useful for travel enthusiasts. By clicking the button, the users can explore various cities of the world with all the necessary information like weather data, city details, time zone, population etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/run-buddy-site.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3><a href="https://chotansharma.github.io/run-buddy/" target="_blank">Run Buddy</a></h3>
                    <p>This one designed as a health fitness application for signing up members.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>				
    </div>                   
 </div>
 )
    
}

export default Portfolio;


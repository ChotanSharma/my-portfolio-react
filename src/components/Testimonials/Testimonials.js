import React from 'react';
import "./testimonials.css";


function Testimonials ()  {
    return (
        <div className="testimonials" id='testimonials'>
            <div className='t-wrapper'>
                <div className='t-left'>
                    <h1 className='t-title'>A Short Bio:</h1>
                    <div className='t-info'>
                        <div className='container-text'>
                            <p className='t-para'>Hello!<br></br>I'm a full stack web developer<br></br>
                            recently graduated from MSU Web Development Bootcamp.<br></br>
                            I'm now looking for a meaningful career
                            in tech to grow myself as a skilled software engineer.<br></br>
                            I'm dedicated, hard-working and passionate about learning new stuffs in different fields of computer science.</p>
                        </div>
                    </div>
                </div>
                <div className='t-right'>
                    <p className='t-descript'>
                        <span className='t-span'>What's your story?</span><br></br>Get in touch. I'm always open to accept a challenge if the right one comes along me.
                    </p>
                </div>
            </div>
        </div>
    )
    
}

export default Testimonials;
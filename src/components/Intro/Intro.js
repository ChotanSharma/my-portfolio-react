import React from 'react';
import "./intro.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Intro ()  {
    return (
        <div className="intro" id='intro'>
            <div className='intro-left'>
                <div className='imageContainer'>
                    <img src='assets/my-avatar.png' alt=''/>
                </div>
            </div>
            <div className='intro-right'>
                <div className='intro-wrapper'>
                    <h2>Hi There, I'm </h2>
                    <h1>Chotan Sharma</h1>
                    <h3>Full Stack <span>Web Developer</span></h3>
                </div>
                <a href='#portfolio'>
                    <ArrowDownwardIcon className='arrow'></ArrowDownwardIcon>
                </a>
            </div>
        </div>
    )
    
}

export default Intro;

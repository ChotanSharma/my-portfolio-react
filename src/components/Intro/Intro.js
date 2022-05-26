import React from 'react';
import "./intro.css";

function Intro ()  {
    return (
        <div className="intro" id='intro'>
            <div className='intro-left'>
                <div className='imageContainer'>
                    <img src='assets/my-avatar.png' alt=''/>
                </div>
            </div>
            <div className='intro-right'></div>
        </div>
    )
    
}

export default Intro;

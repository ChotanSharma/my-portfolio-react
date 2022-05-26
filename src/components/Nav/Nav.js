import React from 'react';
import "./nav.css";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

function Nav ({menusOpen, setMenusOpen})  {
    return (
        <div className= {"nav " + (menusOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Chotan Sharma</a>
                    <div className='itemContainer'>
                        <PersonIcon className='icon'></PersonIcon>
                        <span>616-304-0735</span>
                    </div>
                    <div className='itemContainer'>
                        <EmailIcon className='icon'></EmailIcon>
                        <span className='leftSpan'>chotansharma@yahoo.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenusOpen(!menusOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default Nav;


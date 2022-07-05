import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';
import "./contact.css";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Contact ()  {
    const formRef = useRef();
    const [done, setdone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vy1azos', 'template_1pkj538', formRef.current, 'hwWXqKgFVoCrEBCim')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <div className="contact" id='contact'>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss our projects and ideas:</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <PhoneIphoneIcon className='c-icon'/>
                            +1 616 304 0735
                        </div>
                        <div className='c-info-item'>
                            <EmailIcon  className='c-icon'/>
                            chotansharma@yahoo.com
                        </div>
                        <div className='c-info-item'>
                            <PersonIcon className='c-icon'/>
                            3865 Yorkland Dr NW, Comstock Park, MI-49321, USA
                        </div>
                        <div className='c-info-item'>
                            <GitHubIcon className='c-icon'/>
                            <a href='https://github.com/ChotanSharma/' target="_blank">My GitHub link:</a>
                        </div>
                        <div className='c-info-item'>
                            <LinkedInIcon  className='c-icon'/>
                            <a href='https://linkedin.com/in/chotansharma' target="_blank">My linkedin page:</a>
                        </div>

                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-descript'>
                        <span className='c-span'>What's your story?</span><br></br>Get in touch. I'm always open to accept a challenge if the right one comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name'></input>
                        <input type='text' placeholder='Subject' name='user_subject'></input>
                        <input type='text' placeholder='Email' name='user_email'></input>
                        <textarea rows= '5' placeholder='Message' name='message'></textarea>
                        <button>Submit</button>
                        {done && "Thank you. I'll reply ASAP."}
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Contact;

import React from 'react'
import './Footer.css'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { ImMail4 } from 'react-icons/im'

const Footer = () => {
  return (
    <div id='contact' className='footer_area'>
        <div className="footer_flex">
            <div className="footer_container">
                <div className="copyright">
                    <div className="copyright_header">
                        <h3>Szymon</h3>
                        <h3>Bosiak</h3>
                    </div>
                    <p>© 2022, Built and designed</p>
                    <p>by Szymon Bosiak</p>
                </div>

                <div className="contact">
                    <p>Get in touch:</p>
                    <div className="contact_icons">
                        <a href="https://github.com/szymon-bosiak" target="_blank" rel="noreferrer"><i className='social_content_item footer_icon'><BsGithub /></i></a>
                        <a href="https://www.linkedin.com/in/szymon-bosiak-b228151a4/" target="_blank" rel="noreferrer"><i className='social_content_item footer_icon'><BsLinkedin /></i></a>
                        <a href="https://www.facebook.com/szymon.bosiak/" target="_blank" rel="noreferrer"><i className='social_content_item footer_icon'><BsFacebook /></i></a>
                        <a href="mailto:szymon.bosiak.99@gmail.com"><i className='social_content_item footer_icon'><ImMail4 /></i></a>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
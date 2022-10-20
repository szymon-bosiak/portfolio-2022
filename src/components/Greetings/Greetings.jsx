import React from 'react'
import './Greetings.css'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'

const Gratings = () => {
  return (
    <div className='hero'>
      <div className="greetings_flex">
        <div className='greatings_area'>
            <div className='hello'>
                <p>Hi, I'm Szymon |</p>
                <div className="decoration_dark">
                   <p>Frontend developer</p>
                </div>
            </div>

            <div className='social'>
              <div className='social_content'>
                <a href="https://github.com/szymon-bosiak" target="_blank"><i className='social_content_item greetings_icon'><BsGithub /></i></a>
                <a href="https://www.linkedin.com/in/szymon-bosiak-b228151a4/" target="_blank"><i className='social_content_item greetings_icon'><BsLinkedin /></i></a>
                <a href="https://www.facebook.com/szymon.bosiak/" target="_blank"><i className='social_content_item greetings_icon'><BsFacebook /></i></a>
              </div>  
            </div>

          <div className='about_me'>
            <p>I love creating pretty things 🏛️ I'm a lifelong learner 🎓</p>
            <p>and I wish there was a soundtrack to real life 🎧</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gratings
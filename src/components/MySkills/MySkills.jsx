import React from 'react'
import './MySkills.css'
import profile from '../../assets/profile.jpg'
import { BsSquareFill, BsSquare, BsGithub } from 'react-icons/bs'
import { DiJavascript1, DiReact, DiCss3Full } from 'react-icons/di'
import { GiResize } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'

const MySkills = () => {
  return (
    <div id='about' className='my_skills'>
      <div className="my_skills_bg">
        <div className="my_skills_container">
          
          <div className="profile_header">
            <div className="profile_header_txt">
              <h1>My <div className='decoration_white'> skills</div></h1>
            </div>
            <img src={profile} alt="portrait of me" />
          </div>

          <div className="knowledge">

            <div className="knowledge_component">
              <div className="technology">
                <div className="icon_bg">
                  <i><DiJavascript1 /></i>
                </div>
                <p>JavaScript</p>
              </div>
              <div className="level">
                <div className="level_points">
                    <BsSquareFill />
                    <BsSquareFill />
                    <BsSquareFill />
                    <BsSquare />
                    <BsSquare />
                </div>
                <div className="level_desc">
                  <p>regular</p>
                </div>
              </div>
            </div>

            <div className="knowledge_component">
              <div className="technology">
                <div className="icon_bg">
                  <i><DiReact /></i>
                </div>
                <p>React</p>
              </div>
              <div className="level">
                <div className="level_points">
                    <BsSquareFill />
                    <BsSquareFill />
                    <BsSquareFill />
                    <BsSquare />
                    <BsSquare />
                </div>
                <div className="level_desc">
                  <p>regular</p>
                </div>
              </div>
            </div>

            <div className="knowledge_component">
              <div className="technology">
                <div className="icon_bg">
                  <i><DiCss3Full /></i>
                </div>
                <p>CSS</p>
              </div>
              <div className="level">
                <div className="level_points">
                    <BsSquareFill />
                    <BsSquareFill />
                    <BsSquareFill />
                  <BsSquareFill />
                    <BsSquare />
                </div>
                <div className="level_desc">
                  <p>advanced</p>
                </div>
              </div>
            </div>

            <div className="knowledge_component">
              <div className="technology">
                <div className="icon_bg">
                  <i><GiResize /></i>
                </div>
                <p>RWD</p>
              </div>
              <div className="level">
                <div className="level_points">
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquare />
                </div>
                <div className="level_desc">
                  <p>advanced</p>
                </div>
              </div>
            </div>

            <div className="knowledge_component">
              <div className="technology">
                <div className="icon_bg">
                  <i><BsGithub /></i>
                </div>
                <p>Git & GitHub</p>
              </div>
              <div className="level">
                <div className="level_points">
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquare />
                  <BsSquare />
                </div>
                <div className="level_desc">
                  <p>regular</p>
                </div>
              </div>
            </div>

            <div className="knowledge_component">
              <div className="technology">
                <div className="icon_bg">
                  <i><BiSearchAlt /></i>
                </div>
                <p>Googling</p>
              </div>
              <div className="level">
                <div className="level_points">
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquareFill />
                  <BsSquareFill />
                </div>
                <div className="level_desc">
                  <p>expert</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills
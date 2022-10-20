import React from 'react'
import './Projects.css'
import starbucks from '../../assets/starbucks2.png'
import thing from '../../assets/Thing.png'
import chrust from '../../assets/Chrust.png'
import delicious from '../../assets/delicious.png'
import prev from '../../assets/prev_portfolio.png'

const Projects = () => {
  return (
    <div id='projects' className='projects_area'>
        <div className="projects_container">
            <div className="Projects_flex">
                <div className="projects_header">
                    <h1>Projects</h1>
                </div>

                <div className="project">
                    <div className="project_img">
                        <img src={starbucks} alt="screenshot of project" />
                    </div>
                    <div className="project_txt">
                        <div className="project_name">
                            <h3>Starbucks lookalike</h3>
                        </div>
                        <div className="project_desc">
                            <p>I created website that is imitating starbucks official domain</p>
                            <p>In this project I tested my skills in styling websites and added a bit of JS functionalities.</p>
                        </div>
                        <div className="project_btn">
                              <a href="https://github.com/szymon-bosiak/starbucks" target="_blank" rel="noopener noreferrer"><button>View code</button></a>
                        </div>
                    </div>
                </div>

                  <div className="project">
                      <div className="project_img">
                          <img src={thing} alt="screenshot of projec" />
                      </div>
                      <div className="project_txt">
                          <div className="project_name">
                              <h3>Things counter</h3>
                          </div>
                          <div className="project_desc">
                              <p>In this project I wanted to learn about React Hooks and custom Hooks.</p>
                          </div>
                          <div className="project_btn">
                              <a href="https://github.com/szymon-bosiak/things-counter" target="_blank" rel="noopener noreferrer"><button>View code</button></a>
                          </div>
                      </div>
                  </div>

                  <div className="project">
                      <div className="project_img">
                          <img src={chrust} alt="screenshot of projec" />
                      </div>
                      <div className="project_txt">
                          <div className="project_name">
                              <h3>Chrust+ application form</h3>
                          </div>
                          <div className="project_desc">
                              <p>In this project I put into practice form creation in React.</p>
                              <p>The form is functional and does have input validation.</p>
                          </div>
                          <div className="project_btn">
                              <a href="https://github.com/szymon-bosiak/chrust-form-app" target="_blank" rel="noopener noreferrer"><button>View code</button></a>
                          </div>
                      </div>
                  </div>

                  <div className="project">
                      <div className="project_img">
                          <img src={delicious} alt="screenshot of projec" />
                      </div>
                      <div className="project_txt">
                          <div className="project_name">
                              <h3>Cookbook</h3>
                          </div>
                          <div className="project_desc">
                              <p>Here I was creating an App with use of an API.</p>
                          </div>
                          <div className="project_btn">
                              <a href="https://github.com/szymon-bosiak/cookbook-app" target="_blank" rel="noopener noreferrer"><button>View code</button></a>
                          </div>
                      </div>
                  </div>

                  <div className="project">
                      <div className="project_img">
                          <img src={prev} alt="screenshot of projec" />
                      </div>
                      <div className="project_txt">
                          <div className="project_name">
                              <h3>Portfolio</h3>
                          </div>
                          <div className="project_desc">
                              <p>Sample portfolio where I implemented a few React lablaries.</p>
                          </div>
                          <div className="project_btn">
                              <a href="https://github.com/szymon-bosiak/portfolio-react" target="_blank" rel="noopener noreferrer"><button>View code</button></a>
                          </div>
                      </div>
                  </div>

                
            </div>
        </div>
    </div>
  )
}

export default Projects
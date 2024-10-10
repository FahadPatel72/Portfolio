import React from 'react'
import '../About/About.css'
import avatar from '../../assets/Avatars1.png'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
            <img src={avatar} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm a passionate fullstack developer and final year Computer Science student. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building dynamic web applications using modern frameworks like REACTJS and managing data with SQL Server and MongoDB. Proficient in Node.js and Express, I thrive on crafting scalable backend solutions and integrating robust APIs.</p>
                    <p> My expertise extends to state management with Redux, ensuring seamless user experiences. Eager to contribute my skills and creativity to innovative projects, I am dedicated to continuous learning and pushing the boundaries of what's possible in web development.</p>
                </div>
                {/* <div className="about-skills">
                    <div className="about-skill"><p>Html & Css</p><hr style={{width:"72%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"66%"}}/></div>
                    <div className="about-skill"><p>ASP.NET Core</p><hr style={{width:"66%"}}/></div>
                    <div className="about-skill"><p>Web API</p><hr style={{width:"66%"}}/></div>
                    <div className="about-skill"><p>ReactJs</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>NodeJs</p><hr style={{width:"67%"}}/></div>
                    <div className="about-skill"><p>Express</p><hr style={{width:"67%"}}/></div>
                    <div className="about-skill"><p>MongoDb</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>Redux</p><hr style={{width:"60%"}}/></div>
                    
                </div> */}

<div className="center">
  <h1>My Skills</h1>

  <div className="skillBox">
    <p>Html & Css</p>
    <p>80%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '80%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>Javascript</p>
    <p>60%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '60%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>Web API</p>
    <p>72%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '72%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>ReactJs</p>
    <p>75%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '75%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>NodeJs</p>
    <p>69%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '69%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>Express</p>
    <p>78%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '78%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>MongoDb</p>
    <p>75%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '75%' }}></div>
    </div>
  </div>

  <div className="skillBox">
    <p>SQL Server</p>
    <p>72%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '72%' }}></div>
    </div>
  </div>
  <div className="skillBox">
    <p>Redux</p>
    <p>65%</p>
    <div className="skill">
      <div className="skill_level" style={{ width: '65%' }}></div>
    </div>
  </div>

  


</div>





            </div>
        </div>   
           
    </div>
  )
}

export default About

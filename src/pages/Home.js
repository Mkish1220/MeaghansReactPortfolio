import React from 'react';
import water from '../assests/water.mp4';
// import cat from '../../assests/cat.mp4'
// import ink from '../../assests/ink.mp4'
// import water from '../../assests/water.mp4'
import portPic from '../assests/fb1.img'

 function Home() {
  return (
  
    <div className='home'>
     <div className='overlay'></div>
      <video src={water} autoPlay loop muted />
      <div className="content"> 
      <img src={portPic} />
        <h1>Hello, I'm <span>Meaghan</span></h1>
      <h1>Come check out what I'm working on</h1>
      {/* <button class>View My Work</button> */}
      <p>
        {/* Front-end web developer leveraging Science of Nursing background to build a more intuitive user
        friendly web experience. Recent graduate of UCF's coding boot camp and earned a certificate in full-stack
        web development. Innovative problem-solver passionate about developing web apps; focused on design and
        development. Strengths in creativity, teamwork, and building projects from ideation to execution.
        Frontend: HTML, CSS, JQuery,  Javascript, Bootstrap, AJAX, SASS
        Backend: MySQL, MonogoDB, Express, ReactJS, Node, Handlebars, Firebase, AWS, Webpack, Gulp, Git, Github, */}
      </p>
    </div>
  </div>
  )
}
export default Home
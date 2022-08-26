import React from 'react';
import cat from '../../assests/cat.mp4'
export default function Home() {
  return (
    <div className='home'>
      <div className='overlay'></div>
      <video src={cat} autoPlay loop muted />
      <div className="content">
      <h1>Welcome To Meaghan's Portfolio</h1>
      <button>View My Work</button>
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

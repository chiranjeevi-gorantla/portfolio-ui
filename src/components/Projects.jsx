import React from 'react';

const Projects = () => {
  return (
    <section id='projects' class='border border-1 border-danger'>
      <p>Browse My Recent</p>
      <h1 class='title  border border-1 border-danger'>Projects</h1>
      <div className='projects-container'>
        <div className='project-card  border border-1 border-danger'>
          <img src='' alt='Project 1' />
          <h2>Project One</h2>
          <div className='btn-container  border border-1 border-danger'>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className='project-card border border-1 border-danger'>
          <img src='' alt='Project 2' />
          <h2>Project Two</h2>
          <div className='btn-container border border-1 border-danger'>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className='project-card border border-1 border-danger'>
          <img src='' alt='Project 3' />
          <h2>Project Three</h2>
          <div className='btn-container border border-1 border-danger'>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className='project-card border border-1 border-danger'>
          <img src='' alt='Project 4' />
          <h2>Project Four</h2>
          <div className='btn-container border border-1 border-danger'>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className='project-card border border-1 border-danger'>
          <img src='' alt='Project 5' />
          <h2>Project Five</h2>
          <div className='btn-container border border-1 border-danger'>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className='project-card border border-1 border-danger'>
          <img src='' alt='Project 6' />
          <h2>Project Six</h2>
          <div className='btn-container border border-1 border-danger'>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

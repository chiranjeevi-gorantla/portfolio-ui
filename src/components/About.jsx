import React from 'react';
import about_image from '../assets/about-pic.png';
import education from '../assets/education.png';
import experience from '../assets/experience.png';

const About = () => {
  return (
    <section id='about' class='border border-1 border-danger'>
      <p>Get To Know More</p>
      <h1 class='title  border border-1 border-danger'>About Me</h1>
      <div className='about-container  border border-1 border-danger'>
        <div class='about-pic-container  border border-1 border-danger'>
          <img
            className='w-50  border border-1 border-danger'
            src={about_image}
            alt='Chiranjeevi Gorantla profile_picture'
          />
        </div>
        <div className='exp-edu-container  border border-1 border-danger'>
          <div className='about-experience-container  border border-1 border-danger'>
            <img src={experience} alt='Experienece icon' width='50px' />
            <h3>Experience</h3>
            <p>
              "4+ yaers " <br />
              "Full Stack Development"
            </p>
          </div>
          <div className='about-education-container  border border-1 border-danger'>
            <img src={education} alt='Education icon' width='50px' />
            <h3>Education</h3>
            <p>
              "M.Sc Masters Degree" <br />
              "B.Sc Bachelors Degree"
            </p>
          </div>
        </div>
      </div>
      <div className='about-text-container  border border-1 border-danger'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default About;

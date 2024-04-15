import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import profileImage from '../assets/profile.png';

const Profile = () => {
  return (
    <section id='profile' class='border border-1 border-danger'>
      <div class='profile-image  border border-1 border-danger'>
        <img
          className='w-50'
          src={profileImage}
          alt='Chiranjeevi Gorantla profile_picture'
        />
      </div>
      <div class='profile-text  border border-1 border-danger'>
        <p>Hello, I'm</p>
        <h1 class='title  border border-1 border-danger'>
          Chiranjeevi Gorantla
        </h1>
        <p>
          I'm a Full Stack Developer (Java & React)
          {/* with a focus on creating
          (and occasionally designing) exceptional digital experiences that are
          fast, accessible, visually appealing, and responsive. Even though I
          have been creating web applications for over 7 years, I still love it
          as if it was something new. */}
        </p>
        <div className='btn-container border border-1 border-danger'>
          <button
            type='button'
            class='btn btn-light  border border-1 border-danger'
          >
            Download CV
          </button>
          <button
            type='button'
            class='btn btn-dark  border border-1 border-danger'
          >
            Contact Info
          </button>
        </div>
        <div className='socials-container  border border-1 border-danger'>
          <FaLinkedin />
          <SiGithub />
        </div>
      </div>
    </section>
  );
};

export default Profile;

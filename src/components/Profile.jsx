import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import profileImage from '../assets/profile.png';

const Profile = () => {
  return (
    <section id='profile' class='border border-1 border-danger'>
      <div class='profile-image border border-1 border-danger'>
        <img
          className='profile-image'
          src={profileImage}
          alt='Chiranjeevi Gorantla profile_picture'
        />
      </div>
      <div class='profile-text section-text border border-1 border-danger'>
        <p class='section-text-p1'>Hello, I'm</p>
        <h1 class='title  border border-1 border-danger'>
          Chiranjeevi Gorantla
        </h1>
        <p class='section-text-p2'>
          Full Stack Developer
          {/* with a focus on creating
          (and occasionally designing) exceptional digital experiences that are
          fast, accessible, visually appealing, and responsive. Even though I
          have been creating web applications for over 7 years, I still love it
          as if it was something new. */}
        </p>
        <div className='btn-container'>
          <button type='button' class='btn btn-light  border border-1'>
            Download CV
          </button>
          <button type='button' class='btn btn-dark ms-2'>
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

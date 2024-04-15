import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';

const Contact = () => {
  return (
    <section id='contact'>
      <p className='text-center'>Get in Touch</p>
      <h1 className='mb-4 text-center'>Contact Me</h1>
      <div className='row'>
        <div className='col-md-6'>
          <form>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='subject' className='form-label'>
                Subject
              </label>
              <input
                type='text'
                className='form-control'
                id='subject'
                placeholder='Enter subject'
              />
            </div>
            <div className='mb-3 '>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='message'
                rows='3'
                placeholder='Enter your message'
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
          <div className='socials-container'>
            <MdEmail />
            <FaLinkedin />
            <SiGithub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

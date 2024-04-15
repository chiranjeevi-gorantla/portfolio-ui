import React from 'react';

const Contact = () => {
  return (
    <section id='contact' class='border border-1 border-danger'>
      <p>Get in Touch</p>
      <h1 className='mb-4  border border-1 border-danger'>Contact Me</h1>
      <div className='row  border border-1 border-danger'>
        <div className='col-md-6  border border-1 border-danger'>
          <form>
            <div className='mb-3  border border-1 border-danger'>
              <label
                htmlFor='name'
                className='form-label  border border-1 border-danger'
              >
                Name
              </label>
              <input
                type='text'
                className='form-control  border border-1 border-danger'
                id='name'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='email'
                className='form-label border border-1 border-danger'
              >
                Email address
              </label>
              <input
                type='email'
                className='form-control border border-1 border-danger'
                id='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-3 border border-1 border-danger'>
              <label
                htmlFor='subject'
                className='form-label border border-1 border-danger'
              >
                Subject
              </label>
              <input
                type='text'
                className='form-control border border-1 border-danger'
                id='subject'
                placeholder='Enter subject'
              />
            </div>
            <div className='mb-3 border border-1 border-danger'>
              <label
                htmlFor='message'
                className='form-label border border-1 border-danger'
              >
                Message
              </label>
              <textarea
                className='form-control border border-1 border-danger'
                id='message'
                rows='3'
                placeholder='Enter your message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='btn btn-primary border border-1 border-danger'
            >
              Submit
            </button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='col-md-6 border border-1 border-danger'>
            <h2>Contact Information</h2>
            <p>Email: example@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

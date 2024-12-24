// EmailSignup.js
import React from 'react';
import Button from './Button';

function EmailSignup() {
  return (
    <div>
      <form className='email-signup-form' onSubmit={handleSubmit}>
        <label htmlFor='email-input' className='email-input-label'>
          Email Address
        </label>
        <input
          type='email'
          id='email-input'
          className='email-input'
          placeholder='email@company.com'
          value={email}
        
        />
        <Button text='Subscribe to monthly newsletter' className='subscribe-btn' />
      </form>
    </div>
  );
}

export default EmailSignup;
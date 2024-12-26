// EmailSignup.js
import React, {useState} from 'react';
import { Button, SignupField } from '../'

function EmailSignup() {

  const [email, setEmail] = useState('');

  const onChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form className='signup-field' onSubmit={handleSubmit}>
        <SignupField
          labelText='Email Address'
          type='email'
          id='email-signup'
          className='email-signup'
          placeholder='email@company.com'
          value={email}
          onChange={onChange}
        />
        <Button text='Subscribe to monthly newsletter' className='subscribe-btn' />
        </form>
    </div>
  );
}

export default EmailSignup;
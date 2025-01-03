// EmailSignup.js
import React, {useState} from 'react';
import { Button, SignupField } from '../';
import './EmailSignup.scss';

function EmailSignup({ setEmail, setSubscribed }) {
  const [error, setError] = useState('');
  const [email, setLocalEmail] = useState('');

  const onChange = (event) => {
    setLocalEmail(event.target.value);
    setError('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailRegex.test(email)) {
      setError('Valid email required');
    }
    else {
      setError('');
      setEmail(email);
      setSubscribed(true);
    }
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  return (
    <div>
      <form className='signup-field' onSubmit={handleSubmit}>
        <SignupField
          labelText='Email Address'
          errorText={error}
          type='email'
          id='email-signup'
          className={`email-signup ${error ? 'invalid' : ''}`}
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
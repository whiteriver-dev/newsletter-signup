import React from 'react';
import './SignupField.scss'

function SignupField({labelText, inputType = "text", id, className, placeholder, value, onChange}) {
    return (
    <div>
        <div className='label-container'>
          <label htmlFor={id} className='signup-field-label'>
            {labelText}
          </label>
        </div>
        <input
          type={inputType}
          id={id}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </div>
    )
}

export default SignupField;
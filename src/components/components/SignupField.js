import React from 'react';

function SignupField({labelText, inputType = "text", id, className, placeholder, value, onChange, handleSubmit}) {
    return (
    <div>
        <label htmlFor={id} className='signup-field-label'>
          {labelText}
        </label>
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
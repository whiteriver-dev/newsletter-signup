import React from 'react';
import IconSuccess from '../../assets/images/icon-success.svg';
import { Button } from '../';
import './ThankYou.scss';
import '../primitives/Button.scss';


// This is a non-reusable component

function ThankYou({ email, resetForm }) {
    return (
        <div className='thank-you'>
            <div className='text-container'>
                <div className='text'>
                    <img class='success-icon' src={IconSuccess} alt='Success Icon' />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <Button text='Dismiss message' className='dismiss-btn' onClick={resetForm} />
            </div>
        </div>
    )
}

export default ThankYou;

import React from 'react';
import IconSuccess from '../../assets/images/icon-success.svg';
import { Button } from '../';
import './ThankYou.scss';
import '../primitives/Button.scss';


// This is a non-reusable component

function ThankYou({ email }) {
    return (
        <div className='thank-you'>
            <div className='text-container'>
                <img class='success-icon' src={IconSuccess} alt='Success Icon' />
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscribtion.</p>
            </div>
            <Button text='Dismiss message' className='dismiss-btn' />
        </div>
    )
}

export default ThankYou;

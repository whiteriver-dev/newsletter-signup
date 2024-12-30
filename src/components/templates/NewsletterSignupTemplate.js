import React from 'react';
import { EmailSignup } from '..';
import Illustration from '../../assets/images/illustration-sign-up-mobile.svg';
import './NewsletterSignupTemplate.scss';


// This is a non-reusable component

function NewsletterSignupTemplate() {
    return (
        <div class='content-container'>
            <img src={Illustration} alt='Illustration' />
            <div class='text-container'>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <EmailSignup/>
            </div>
        </div>
    )
}

export default NewsletterSignupTemplate;


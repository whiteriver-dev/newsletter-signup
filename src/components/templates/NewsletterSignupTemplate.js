import React from 'react';
import { EmailSignup } from '..';
import MobileIllustration from '../../assets/images/illustration-sign-up-mobile.svg';
import DesktopIllustration from '../../assets/images/illustration-sign-up-desktop.svg'; 
import './NewsletterSignupTemplate.scss';


// This is a non-reusable component

function NewsletterSignupTemplate({setEmail, setSubscribed}) {
    return (
        <div className='content-container'>
            <img class='mobile-illustration' src={MobileIllustration} alt='Mobile Illustration' />
            <div className='text-container'>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <EmailSignup setEmail={setEmail} setSubscribed={setSubscribed}/>
            </div>
            <img class='desktop-illustration' src={DesktopIllustration} alt='Desktop Illustration' />
        </div>
    )
}

export default NewsletterSignupTemplate;


import React from 'react';
import { EmailSignup } from '..';

// This is a non-reusable component

function NewsletterSignupTemplate() {
    return (
        <div>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
            </ul>
            <EmailSignup/>
        </div>
    )
}

export default NewsletterSignupTemplate;
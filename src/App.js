import { NewsletterSignupTemplate, ThankYou} from './components/index.js';
import React, { useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const resetForm = () => {
    setEmail('');
    setSubscribed(false);
  }


  return (
    <div className="App">
      <header className="App-header">
      {subscribed ? (<ThankYou email={email} resetForm={resetForm} />) : (
        <NewsletterSignupTemplate
          setEmail={setEmail}
          setSubscribed={setSubscribed}
        />)}
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { Button } from './components/index.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="Subscribe to monthly newsletter" className='subscribe-btn'/>
      </header>
    </div>
  );
}

export default App;

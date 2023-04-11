import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AboutPage />
        <MyButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyButton(){
  return (
    <button>Testing this button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1 className="blue">About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

export default App;

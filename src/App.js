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
        <Add />
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
  function clicker() {
    alert('You clicked me!');
  }
  return (
    <button onClick={clicker}>Testing this button</button>
  );
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];



function AboutPage() {
  return (
    <>
      <h1 className="blue">About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
function Add(){
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}

export default App;

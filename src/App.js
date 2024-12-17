import logo from './logo.svg';
import './App.css';
import { makeServer } from './mirageServer';
import Navbar from './Components/NavBar';
import Cards from './Components/Cards';
import Charts from './Components/Charts';

makeServer({ environment: process.env.NODE_ENV });



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Cards />
      <Charts />
    </div>
  );
}

export default App;

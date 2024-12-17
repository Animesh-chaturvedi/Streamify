import logo from './logo.svg';
import './App.css';
import { makeServer } from './mirageServer';
import Navbar from './Components/NavBar';
import Cards from './Components/Cards';
import TabsComponent from './Components/TabbedCharts';
import { DataProvider } from './Components/context/DataContext';
import { Row, Col, Container } from "react-bootstrap";
import StreamTable from './Components/StreamTable';


makeServer({ environment: process.env.NODE_ENV });


function App() {

  return (
    <DataProvider>
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

      <Container fluid className="my-5">
      <Row className="align-items-center justify-content-center g-4">
        {/* Cards Section - 50% Width on Desktop */}
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
          <Cards/>
        </Col>

        {/* Tabs Section - 50% Width on Desktop */}
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <div className="tabs-container w-100">
            <TabsComponent />
          </div>
        </Col>
      </Row>
    </Container>
    <StreamTable/>
    </div>
    </DataProvider>
  );
}

export default App;

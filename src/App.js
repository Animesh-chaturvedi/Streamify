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
      <Navbar />
      <Container fluid className="my-5">
      <Row className="align-items-center justify-content-center g-4">
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
          <Cards/>
        </Col>
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

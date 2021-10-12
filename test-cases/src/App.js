import TestCase from './components/test-case';
import ProjectsMenu from './components/projects-menu';
import { testCase, projects } from './assets/mocks';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}><h1>Test cases app</h1></Col>
        </Row>
        <Row>
          <Col md={3}>
            <ProjectsMenu projects={projects} />
          </Col>
          <Col md={9}>
            <TestCase testCase={testCase} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

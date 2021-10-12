import StepTable from "./step-table";
import { Container, Row, Col, Badge } from 'react-bootstrap';

const TestCase = ({ testCase }) => {

  const { name, description, preconditions, tags, steps } = testCase

  const mapedTags =
    <div>
      {tags.map((tag, index) =>
        <><Badge pill bg="primary" >#{tag}</Badge>{" "}</>
      )}
    </div>
  // <Row xs="auto">
  //   {tags.map((tag, index) =>
  //     <Col><Badge pill bg="primary" >#{tag}</Badge></Col>
  //   )}
  // </Row>


  return (
    <div className="TestCase">
      <Container>
        <Row>
          <Col md={8}><h2>{name}</h2></Col>
          <Col md={4}>
            {mapedTags}
          </Col>
        </Row>
        <Row>
          <Col>
            <p><b>Description:</b> {description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><b>Preconditions:</b> {preconditions}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <StepTable steps={steps} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestCase;

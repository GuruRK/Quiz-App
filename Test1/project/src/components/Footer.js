import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <div>
        <Footer color="blue" className="font-small pt-3 mt-2">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="6">
                <h5 className="title">Quiz App</h5>
                <p>
                  Here you can do anything and here you can check your 
                  score.
                </p>
              </Col>
              <Col md="6">
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Home</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">My Score</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-1">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> QuizApp</a>
            </Container>
          </div>
        </Footer>
      </div>
    );
  }
}

export default FooterPage;

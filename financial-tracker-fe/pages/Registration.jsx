import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Image, Row } from "react-bootstrap";

export const Registration = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Row>
        <Col>
          <Form className="d-flex align-items-center justify-content-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter UserName" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

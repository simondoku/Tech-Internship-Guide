import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const ResumeStep2 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="college1">
        <Row>
          <Col>
            <Form.Control placeholder="College name" />
          </Col>

          <Col>
            <Form.Control placeholder="Course" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="marks1">
        <Row>
          <Col>
            <Form.Control placeholder="Percentage" />
          </Col>

          <Col>
            <Form.Control placeholder="Year of completion" />
          </Col>
        </Row>
      </Form.Group>
      <hr />
      <Form.Group className="mb-3" controlId="college2">
        <Row>
          <Col>
            <Form.Control placeholder="College name" />
          </Col>

          <Col>
            <Form.Control placeholder="Course" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="marks2">
        <Row>
          <Col>
            <Form.Control placeholder="Percentage" />
          </Col>

          <Col>
            <Form.Control placeholder="Year of completion" />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

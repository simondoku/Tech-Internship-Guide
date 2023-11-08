import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const ResumeStep1 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="personal">
        <Row>
          <Col>
            <Form.Control placeholder="Full name" />
          </Col>

          <Col>
            <Form.Control type="email" placeholder="Email address" />
          </Col>
          <Col>
            <Form.Control type="mobile" placeholder="Mobile" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Control placeholder="Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="skills">
        <Form.Control placeholder="Skills" />
      </Form.Group>
    </Form>
  );
};

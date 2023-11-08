import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const ResumeStep3 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="org1">
        <Row>
          <Col>
            <Form.Control placeholder="Organization" />
          </Col>

          <Col>
            <Form.Control placeholder="Position" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="marks1">
        <Row>
          <Col>
            <Form.Control placeholder="From (eg. dd-mm-yyyy)" />
          </Col>

          <Col>
            <Form.Control placeholder="To (eg. dd-mm-yyyy)" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="role1">
        <Row>
          <Col>
            <Form.Control placeholder="Role" />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

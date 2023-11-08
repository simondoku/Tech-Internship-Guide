import React from "react";
import { Card } from "react-bootstrap";

export const Stats = () => {
  return (
    <div className="px-3 text-info border-top border-white">
      <div className="text-center mb-sm-5 mt-4">
        <h3 className="text-primary fs-2 fw-bold">Stats</h3>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-evenly", flex: ".8" }}
        className="m-4"
      >
        <Card>
          <Card.Body>
            <Card.Title>Total Visitors</Card.Title>
            <Card.Text className="text-center">500000</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Total Registrations</Card.Title>
            <Card.Text className="text-center">200000</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

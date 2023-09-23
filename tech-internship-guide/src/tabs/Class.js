import React from "react";
import { Block } from "../components/Block";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ClassRowContent = (props) => {
    const { block1, block2, block3 } = props;
    return(
        <Row className="mb-3">
            <Col>
                {block1 && <Block blockId={block1} />}
            </Col>
            <Col>
                {block2 && <Block blockId={block2} />}
            </Col>
            <Col>
                {block3 && <Block blockId={block3} />}
            </Col>
        </Row>
    );
};

export const Class = () => {
    return(
        <div className="text-light">
            <Container className="mb-5">
                <p>Programming Fundamentals</p>
                <ClassRowContent block1={"w3schools"} block2={"freeCodeCamp"} block3={"codeacademy"} />
            </Container>

            <Container>
                <p>Data Structures and Algorithms</p>
                <ClassRowContent block1={"neetCode"} block2={"coursera"} block3={"geeksforgeeks"} />
            </Container>
        </div>
    );
};

import React from "react";
import { Block } from "../components/Block";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ClassRowContent = (props) => {
    const { block1, block2, block3 } = props;
    return(
        <Row>
            <Col>
                {block1 && <Block blockName={block1} blockLink={""}/>}
            </Col>
            <Col>
                {block2 && <Block blockName={block2} blockLink={""}/>}
            </Col>
            <Col>
                {block3 && <Block blockName={block3} blockLink={""}/>}
            </Col>
        </Row>
    );
};

export const Class = () => {
    return(
        <div className="text-light">
            <Container className="mb-5">
                <p>Programming Fundamentals</p>
                <ClassRowContent block1={"W3schools"} block2={"FreeCodeCamp"} block3={"Codeacademy"} />
            </Container>

            <Container>
                <p>Data Structures and Algorithms</p>
                <ClassRowContent block1={"NeetCode"} block2={"Google"} block3={"Geeks for Geeks"}/>
            </Container>
        </div>
    );
};

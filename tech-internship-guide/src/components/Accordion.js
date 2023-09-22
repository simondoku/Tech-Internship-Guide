import React from "react";
import { Accordion as Accord } from 'react-bootstrap';
import { FAQS } from "../core/block-cores";

const AccordionItem = (props) => {
    const { eventKey, question, answer } = props;
    return(
        <Accord.Item eventKey={eventKey} className="text-dark">
            <Accord.Header>{question}</Accord.Header>
            <Accord.Body>{answer}</Accord.Body>
        </Accord.Item>
    );
};

export const Accordion = () => {
    return(
        <Accord className="mb-3" style={{width: '70vw'}}>
            {FAQS.map((item, index) => (
                <AccordionItem eventKey={index} key={index} question={item?.question} answer={item?.answer}/>
            ))}
        </Accord>
    );
};
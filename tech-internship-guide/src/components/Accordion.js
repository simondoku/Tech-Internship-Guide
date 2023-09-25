import React, { useState } from "react";
import { Accordion as Accord } from 'react-bootstrap';
import { FAQS } from "../core/block-cores";

const AccordionItem = (props) => {
    const { eventKey, question, answer } = props;
    return (
        <Accord.Item eventKey={eventKey} className="text-dark">
            <Accord.Header>{question}</Accord.Header>
            <Accord.Body>{answer}</Accord.Body>
        </Accord.Item>
    );
};

export const Accordion = () => {
    // State to track whether the third item is expanded
    const [isThirdItemExpanded, setThirdItemExpanded] = useState(false);

    return (
        <Accord className="mb-3" style={{ width: '70vw' }}>
            {FAQS.map((item, index) => (
                // Check if it's the fourth item (index 3) and apply custom manipulation
                index === 3 ? (
                    <div key={index}>
                        <Accord.Item eventKey={index} className="text-dark">
                            <Accord.Header
                                onClick={() => setThirdItemExpanded(!isThirdItemExpanded)}
                                // Add a class to style the header differently when expanded
                                className={`cursor-pointer ${isThirdItemExpanded ? 'active' : ''}`}
                            >
                                {item?.question}
                            </Accord.Header>
                            <Accord.Body
                                // Show the list when the third item is expanded
                                style={{ display: isThirdItemExpanded ? 'block' : 'none' }}
                            >
                                {item.answer.map((qa, qaIndex) => (
                                    <div key={qaIndex} className="">
                                        <p><strong>{qa.question}</strong></p>
                                        <p>{qa.answer}</p>
                                    </div>
                                ))}
                            </Accord.Body>
                        </Accord.Item>
                    </div>
                ) : (
                    // For other items, use the AccordionItem component
                    <AccordionItem eventKey={index} key={index} question={item?.question} answer={item?.answer} />
                )
            ))}
        </Accord>
    );
};

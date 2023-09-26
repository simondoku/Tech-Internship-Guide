import React from "react";
import { Block } from "../components/Block";
import Container from 'react-bootstrap/Container';
import { BLOCK_SECTIONS } from "../core/block-cores";

const ClassSection = (props) => {
    const { sectionName, sectionId } = props;

    return(
        <Container className="mb-3">
            <p>{sectionName}</p>
            <div style={{display: 'flex', overflowX: 'auto'}}>
                {BLOCK_SECTIONS?.[sectionId].map((item, index) => (
                    <div className="me-5 pb-3">
                        <Block blockId={item} key={index}/>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export const Class = () => {
    return(
        <div className="text-light">
            <ClassSection sectionName={"Programming Fundamentals"} sectionId={'pFundamentals'}/>
            <ClassSection sectionName={'Data Structures and Algorithm'} sectionId={'dSA'}/>
        </div>
    );
};

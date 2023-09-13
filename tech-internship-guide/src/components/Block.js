import React from "react";
import Card from 'react-bootstrap/Card';

export const Block = (props) => {
    const {blockName, blockLink} = props;

    return(
        <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }} className="mb-2 text-light">
            <div style={{backgroundColor: "#eeeeee", margin: '10px', height: '10rem'}} className="rounded">
                <Card.Img className="img-fluid" variant="top" src=""/>
            </div>
            <div style={{display: 'flex'}} className="pb-1 px-2">
                {blockName} {blockLink}
            </div>          
        </Card>
    );
};
import React from "react";
import Card from 'react-bootstrap/Card';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import { Button } from "react-bootstrap";

const IconButtonWrapper = (props) => {
    const { children } = props;
    return(
        <Button variant="dark" size="sm">
            {children}
        </Button>
    ); 
};

export const Block = (props) => {
    const {blockName, blockLink} = props;

    return(
        <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }} className="mb-2 text-light">
            <div style={{backgroundColor: "#eeeeee", margin: '10px', height: '9rem'}} className="rounded">
                <Card.Img className="img-fluid" variant="top" src=""/>
            </div>
            <div style={{display: 'flex', flex: '1', justifyContent: 'space-between'}} className="pb-1 px-2">
                <div>
                    {blockName} {blockLink}
                </div>
                <div>
                    <IconButtonWrapper>
                        <RemoveRedEyeOutlinedIcon fontSize="small"/>
                    </IconButtonWrapper>
                    <IconButtonWrapper>
                        <LaunchIcon fontSize="small"/>  
                    </IconButtonWrapper>
                </div>
            </div>          
        </Card>
    );
};
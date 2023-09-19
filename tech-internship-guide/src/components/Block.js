import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import { Button } from "react-bootstrap";
import { InfoModal, ModalContent } from "./InfoModal";

const IconButtonWrapper = (props) => {
    const { children, clickAction } = props;
    return(
        <Button variant="dark" size="sm" onClick={clickAction}>
            {children}
        </Button>
    ); 
};

export const Block = (props) => {
    const [show, setShow] = useState(false);
    const {blockName, blockLink} = props;
    const handleInfoClick = () => {
        setShow(true);
    };

    return(
        <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white' }} className="mb-2 text-light">
            <div style={{backgroundColor: "#eeeeee", margin: '10px', height: '9rem'}} className="rounded">
                <Card.Img className="img-fluid" variant="top" src=""/>
            </div>
            <div style={{display: 'flex', flex: '1', justifyContent: 'space-between'}} className="pb-1 px-2">
                <div>
                    {blockName}
                </div>
                <div>
                    <IconButtonWrapper clickAction={handleInfoClick}>
                        <RemoveRedEyeOutlinedIcon fontSize="small"/>
                    </IconButtonWrapper>
                    {<InfoModal show={show} setShow={setShow}>
                        <ModalContent modalBodyContent={'Tella'} modalTitle={blockName}/>
                     </InfoModal>
                    }
                    <a href={(blockLink && 'https://www.'+ blockLink) || null} target="_blank" rel="noreferrer">
                        <IconButtonWrapper>
                        
                            <LaunchIcon fontSize="small"/>                     
                        </IconButtonWrapper>
                    </a>
                </div>
            </div>          
        </Card>
    );
};
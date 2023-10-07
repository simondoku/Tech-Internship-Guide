import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import { Button } from "react-bootstrap";
import { InfoModal, ModalContent } from "./InfoModal";
import { BLOCK_CONTENTS, BLOCK_SECTIONS } from "../core/block-cores";
import Container from 'react-bootstrap/Container';

const IconButtonWrapper = (props) => {
    const { children, clickAction } = props;
    return(
        <Button variant="dark" size="sm" onClick={clickAction}>
            {children}
        </Button>
    ); 
};

export const BlockSection = (props) => {
    const { sectionName, sectionId } = props;

    return(
        <Container className="mb-3">
            <p>{sectionName}</p>
            <div style={{display: 'flex', overflowX: 'auto'}}>
                {BLOCK_SECTIONS?.[sectionId].map((item, index) => (
                    <div className="me-5 pb-2">
                        <Block blockId={item} key={index}/>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export const Block = (props) => {
    const [show, setShow] = useState(false);
    const { blockId, blockWidth, blockHeight } = props;
    const handleInfoClick = () => {
        setShow(true);
    };

    return(
        <Card style={{ width: blockWidth ? blockWidth : '24vw', minWidth: '14rem', backgroundColor: 'black', color: 'white' }} className="mb-2 text-light">
            <div style={{backgroundColor: "#eeeeee", margin: '10px', height: blockHeight ? blockHeight : '20vh', minHeight: '9rem'}} className="rounded">
                <Card.Img className="img-fluid" variant="top" src=""/>
            </div>
            <div style={{display: 'flex', flex: '1', justifyContent: 'space-between'}} className="pb-1 px-2">
                <div>
                    {BLOCK_CONTENTS?.[blockId]?.name}
                </div>
                <div>
                    <IconButtonWrapper clickAction={handleInfoClick}>
                        <RemoveRedEyeOutlinedIcon fontSize="small"/>
                    </IconButtonWrapper>
                    {<InfoModal show={show} setShow={setShow}>
                        <ModalContent modalBodyContent={BLOCK_CONTENTS?.[blockId]?.description} modalTitle={BLOCK_CONTENTS?.[blockId]?.name}/>
                     </InfoModal>
                    }
                    <a href={('https://www.'+ BLOCK_CONTENTS?.[blockId]?.link) || null} target="_blank" rel="noreferrer">
                        <IconButtonWrapper>
                        
                            <LaunchIcon fontSize="small"/>                     
                        </IconButtonWrapper>
                    </a>
                </div>
            </div>          
        </Card>
    );
};

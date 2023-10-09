import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { TAB_NAMES } from "../core/tab-names";

const NavItem = (props) => {
  const {tabName, eventKey} = props;
  return(
    <Nav.Item>
      <Nav.Link className="text-light mb-3 rounded-4 px-2 fw-bold" style={{border: '1px solid #9C9B9B',}} eventKey={eventKey}> <img src={require("../images/dot.png")} alt="" className="me-1"/> {tabName}</Nav.Link>
    </Nav.Item>
  );
};

const TabPane = (props) => {
  const {eventKey, content} = props;
  return(
    <Tab.Pane eventKey={eventKey}>{content}</Tab.Pane>
  );
};

export const TabGroup = () => {
    return(
        <Tab.Container id="left-tabs" defaultActiveKey="classes">
          <Row>
            <Col sm={3} style={{display: 'flex', justifyContent: 'center'}}>
              <Nav variant="pills" className="flex-column bg-dark rounded-4 p-4 mt-sm-0 mt-4 mb-5" style={{border: '1px solid #9C9B9B', width: '72%',  justifyContent: 'space-between'}}>
              {TAB_NAMES.map((item, index) => (
                <NavItem key={index} tabName={item?.tabName} eventKey={item?.eventKey}/>
              ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <div style={{overflow: 'auto', height: '68vh'}}>
                <Tab.Content >
                  {TAB_NAMES.map((item, index) => (
                    <TabPane key={index} eventKey={item?.eventKey} content={item?.comp}/>  
                  ))}
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
    );
};
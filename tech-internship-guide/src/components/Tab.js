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
      <Nav.Link className="text-light border rounded-3 mb-3 p-1 px-2" eventKey={eventKey}>{tabName}</Nav.Link>
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
            <Col sm={2}>
              <Nav variant="pills" className="flex-column bg-dark rounded-3 p-2 mt-5 pt-3" style={{border: '1px solid #9C9B9B'}}>
              {TAB_NAMES.map((item, index) => (
                <NavItem key={index} tabName={item?.tabName} eventKey={item?.eventKey}/>
              ))}
              </Nav>
            </Col>
            <Col sm={10}>
              <div style={{overflow: 'auto', height: '70vh'}}>
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
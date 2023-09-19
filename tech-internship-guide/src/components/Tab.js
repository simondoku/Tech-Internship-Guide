import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Class } from "../pages/Class";

const TAB_NAMES = [{tabName: 'Classes', eventKey: 'classes'}, {tabName: 'Projects', eventKey: 'projects'}, {tabName: 'Resume', eventKey: 'resume'}, {tabName: 'Interview', eventKey: 'interview'},{tabName: 'Internships', eventKey: 'internships'},{tabName: 'Notes', eventKey: 'notes'}, {tabName: 'Networking', eventKey: 'networking'},{tabName: 'Stories', eventKey: 'stories'},{tabName: 'FAQs', eventKey: 'faqs'}];

const NavItem = (props) => {
  const {tabName, eventKey} = props;
  return(
    <Nav.Item>
      <Nav.Link className="text-light border rounded-3 mb-2 p-1 px-2" eventKey={eventKey}>{tabName}</Nav.Link>
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
              <Nav variant="pills" className="flex-column bg-dark rounded-3 p-2 border">
              {TAB_NAMES.map((item, index) => (
                <NavItem key={index} tabName={item?.tabName} eventKey={item?.eventKey}/>
              ))}
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                {TAB_NAMES.map((item, index) => (
                  <TabPane key={index} eventKey={item?.eventKey} content={<Class/>}/>  
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    );
};
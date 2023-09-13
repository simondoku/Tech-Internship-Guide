import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar as NavbarBoot } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const Navbar = () => {
    return(
        <NavbarBoot className="bg-dark" data-bs-theme="dark">
            <Container>
                <NavbarBoot.Brand href="#home" className="text-primary">Tech Internship Guide</NavbarBoot.Brand>
                <NavbarBoot.Toggle />
                <NavbarBoot.Collapse className="justify-content-end">
                    <Button variant="primary" size="sm" className="me-2 rounded-pill">This site updates every 30th</Button>
                    <Button variant="primary" size="sm">Share</Button>
                </NavbarBoot.Collapse>
            </Container>
        </NavbarBoot>
    );
};
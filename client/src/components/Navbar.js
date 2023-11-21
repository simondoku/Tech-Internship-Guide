import React from "react";
import { Navbar as NavbarBoot } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className="px-3 fw-bolder">
            <NavbarBoot data-bs-theme="dark">
                <div style={{ flex: '1' }} class="d-grid d-sm-flex">
                    <NavbarBoot.Brand href="#home" className="text-primary text-center">
                        <img src={require("../images/logo.png")} width="25" height="25" className="d-inline-block align-top me-1" alt="" />
                        <b>Tech Internship Guide</b>
                    </NavbarBoot.Brand>
                    <NavbarBoot.Toggle />
                    <NavbarBoot.Collapse className="justify-content-end">
                        {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScbqk5Y9MEuzUoc6jsXUTVzWzs8bEEUhPertu95d1Rau4i1Zw/viewform"
                            target="_blank" rel="noreferrer">
                            <Button variant="info" size="sm" className="rounded-3 me-3 border-white text-white"><b>Add a Site</b></Button>


                        </a> */}
                        <Link to='/'>
                            <Button variant="" size="mm"  className="text-white "><b>Home</b></Button>
                        </Link>
                        <Link to="/resources">
                            <Button variant="" size="mm" className="text-white"><b>Resources</b></Button>
                        </Link>
                        
                        {/* user count STATS - modify */}
                        <Button variant="info" size="sm" className="rounded-3 me-3 border-white text-white"><b>User Count: 235 </b></Button>
                        
                        {/* sign in button - modify */}
                        <div className="bg-primary p-2 px-2 rounded-pill text-center">Sign In</div>
    
                    </NavbarBoot.Collapse>
                </div>
            </NavbarBoot>
            <div className='text-center mb-sm-5 mt-4'>
                <h3 className='text-primary fs-2 fw-bold'>Unlock Your Internship Adventure:<br />Your Ultimate Guide to Tech Success Begins Here!</h3>
                <p className='text-light fs-5'>A collection of all resources you need to land your first Computer Science Internship</p>
            </div>
        </div>
    );
};
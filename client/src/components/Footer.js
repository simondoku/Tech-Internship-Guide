import React from "react";
import { Button } from "react-bootstrap";

export const Footer = () => {
    return(
        <div style={{justifyContent: 'space-between'}} className="d-sm-flex d-grid px-3 py-2 text-white border-top border-white">
            <div className="text-center">
                What is the Tech Internship Guide?<br/>
                It's an open source project that organizes websites and other<br/>
                resources needed for you to land a tech internship
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', flex: '.8'}} className="mt-sm-0 mt-4">
                <Button variant="secondary" size="sm">
                    Edit on Github
                </Button>
                <Button variant="secondary" size="sm">
                    Support this project
                </Button>
                <Button variant="secondary" size="sm">
                    Share this site
                </Button>
            </div>
        </div>
    );
};
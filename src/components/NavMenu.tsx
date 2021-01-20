import React from "react";
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {

return  (
    <div>
        <nav>
        <div className="menu">
                <Dropdown data-align="right">
                    <Dropdown.Toggle variant="light" id="dropdown-basic" size='lg'>
                        ☰
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">About</Dropdown.Item>
                        <Dropdown.Item href="#/resume">Resume</Dropdown.Item>
                        <Dropdown.Item href="/travelmap">Travel Map</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/contact">Contact</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    </div>
);
}

export default withRouter(Menu);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'


const Menu = () => (
            <div>
                <nav>
                <div className="menu">
                        <Dropdown data-align="right">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" size='lg'>
                                ☰
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/about">About</Dropdown.Item>
                                <Dropdown.Item href="#/resume">Resume</Dropdown.Item>
                                <Dropdown.Item href="#/travelmap">Travel Map</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/contact">Contact</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
            </div> 
        );

const Title = () => 
    ( <div className="titleCentered">
                <pre className="mainTitle"> @DINESH VIJAYAKUMAR</pre>
                <pre className="subTitle"> Technologist | Travel Enthusiast| Philanthropist </pre>
            </div>
);


class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <Title />
                <Menu />
                <img className="mainImage" alt="main" src={process.env.PUBLIC_URL + '/images/logo192.png'} />
            </div>
            
        )
    }
}



// ========================================

ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
  );
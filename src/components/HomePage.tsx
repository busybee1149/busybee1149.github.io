import React from "react";
import Menu from './NavMenu';

const Title = () =>
    ( <div className="titleCentered">
                <h1 className="mainTitle"> @Dinesh Vijayakumar </h1>
                <pre className="subTitle"> Technologist | Travel Enthusiast| Philanthropist </pre>
            </div>
);


function HomePage() {
    return (
        <div className="container">
            <Title />
            <Menu />
            <img className="mainImage" alt="main" src={process.env.PUBLIC_URL + '/images/logo192.png'} />
        </div>
    );
}

export default HomePage;

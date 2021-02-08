import React from "react";

function HomePage() {
    return (
        <div className="main">
            <section>
                <h1 className="mainTitle"> @Dinesh Vijayakumar  </h1>
                <pre className="subTitle"> Technologist | Travel Enthusiast| Philanthropist </pre>
             </section>
            <figure className="figurefx pushup">
                <img alt="main" src={process.env.PUBLIC_URL + '/images/logo192.png'} />
                <figcaption>
                    Photo of Dinesh Vijayakumar
                </figcaption>
            </figure>
        </div>
    );
}

export default HomePage;

import React from "react";

function HomePage() {
    return (
        <div className="main">
            <div id="homeTitle" >
                <section>
                    { <h1 className="mainTitle"> @Dinesh Vijayakumar  </h1> }
                    <pre className="subTitle"> Technologist | Travel Enthusiast| Philanthropist </pre>
                </section>
             </div>
            <div id="homeContent"> 
               <div id="homeFigure" >
                    <figure className="figurefx pushup">
                        <img alt="main" src={process.env.PUBLIC_URL + '/images/logo192.png'} />
                        <figcaption>
                            Photo of Dinesh Vijayakumar
                        </figcaption>
                    </figure>
                </div>
               <div id="homeIntro">
                    <p>
                        Hello there!!, I'm Dinesh Vijayakumar, 
                        a technologist working at Amazon, 
                        enthusiastic to travel around the world, 
                        genuinely compassionate at heart,  
                        interested in philanthropy,
                        as well as philosophy.
                    </p>
                </div>
            </div> 
        </div>
    );
}

export default HomePage;

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 fixed-bottom">
        <div className="footer-container">
          <pre className="m-0 text-center text-black ">
              <a href="https://www.linkedin.com/in/dineshvijaykumar"><img alt="main" src={process.env.PUBLIC_URL + '/images/linkedin.png'} /></a>
              <a href="https://github.com/busybee1149"><img alt="main" src={process.env.PUBLIC_URL + '/images/github.png'} /></a>
             <br />
            Copyright &copy; Dinesh Vijayakumar 2021
          </pre>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
import React from 'react';
import './footer.css';

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-5 offset-lg-4">
            <ul className="footer">
              <li className="footer__item">
                <a href="#">
                  <img src="../img/logo/Logo_black.svg" alt="logo"/>
                </a>
              </li>
              <li className="footer__item">
                <a href="#">Our coffee</a>
              </li>
              <li className="footer__item">
                <a href="#">For your pleasure</a>
              </li>
            </ul>
          </div>
        </div>
        <img className="beanslogo" src="../img/logo/Beans_logo_dark.svg" alt="Beans logo"/>
      </div>
    </footer>
  )
}

export default Footer;
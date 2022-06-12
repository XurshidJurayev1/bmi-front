import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__card">
          <div className="footer__container__card_logo_footer" style={{ backgroundImage: `url(${logo}` }} />
        </div>
        <div className="footer__container__card">
          <h3>
            Aloqa ma'lumotlari
          </h3>
          <a>
            Toshkent shahar Yakkasaroy <br /> tumani U.Nosirov ko'chasi 105

          </a>
          <a href="tell:" rel="noreferrer" target="_blank">+998935863877</a>
          <a href="tell:" rel="noreferrer" target="_blank">xjurayev99@gmail.com</a>

        </div>
        <div className="footer__container__card">
          <h3>
            Grafik dizayni
          </h3>
          <Link to="/courses">Amaliy tadqiqotlar</Link>
          <Link to="/courses">Dasturiy ta'minot muhandislig</Link>
          <Link to="/courses">Axborot muhandisligi</Link>
          <Link to="/courses">Tizim muhandisligi</Link>
          <Link to="/courses">Kompyuter muhandisligi</Link>
        </div>
        <div className="footer__container__card">
          <h3>
            Muhandislik
          </h3>
          <Link to="/courses">Amaliy tadqiqotlar</Link>
          <Link to="/courses">Dasturiy ta'minot muhandisligi</Link>
          <Link to="/courses">Axborot muhandisligi</Link>
          <Link to="/courses">Tizim muhandisligi</Link>
          <Link to="/courses">Kompyuter muhandisligi</Link>
        </div>

      </div>
      <div className="footer__footer">
        <div className="footer__footer__container">
          <div className="footer__container__footer__item">
            <p style={{ display: 'flex' }}>
              Copyright ©2022 All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              <a>
                <div style={{
                  backgroundImage: `url(${logo}`,
                  width: '100px',
                  height: '21px',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  marginLeft: '10px',
                }} />
              </a>
            </p>
          </div>
          <div className="footer__container__footer__list">
            <p>
              <a>Terms & Condition</a> |
              <a>Register</a> |
              <a>Privacy</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
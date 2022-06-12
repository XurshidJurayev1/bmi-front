import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/logo.png';

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
          <a>Amaliy tadqiqotlar</a>
          <a>Dasturiy ta'minot muhandisligi</a>
          <a>Axborot muhandisligi</a>
          <a>Tizim muhandisligi</a>
          <a>Kompyuter muhandisligi</a>
        </div>
        <div className="footer__container__card">
          <h3>
            Muhandislik
          </h3>
          <a>Applied Studies</a>
          <a>Software Engeneering</a>
          <a>Informational Engeneering</a>
          <a>System Engeneering</a>
          <a>Computer Engeneering</a>
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
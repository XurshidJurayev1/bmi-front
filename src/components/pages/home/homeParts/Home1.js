import React from 'react';
import './Home1.scss';
import img from '../../../../assets/img/platform_devices.png';
import img2 from '../../../../assets/img/platform_phone_mobile.png';

const Home1 = () => {

  const map = [
    {
      title: 'Tez o\'rganish',
      text: '5 daqiqalik qisqa darslar diqqatni jamlashni va o\'rganganlaringizni eslab qolishni osonlashtiradi',
    },
    {
      title: 'Motivatsiyada qoling',
      text: 'Animatsiyalangan videolar tushunchalarni misollar va hazil bilan jonlantiradi',
    },
    {
      title: 'Aqlliroq o\'qing',
      text: 'Mutaxassis o\'qituvchilar sizga eng muhim narsaga e\'tiboringizni qaratishga yordam beradi, shunda siz o\'zingizga ishonch va tayyor bo\'lasiz',
    },
  ];


  return (
    <div className="home1">
      <div className="home1-container">
        <h3>
          Bizning o'quv platformamiz nimasi bilan ajralib turadi
        </h3>
        <div className="home1-container-flex">
          <div className="home1-container-flex-img" style={{
            backgroundImage: `url(${img})`,
          }} />
          <div className="home1-container-flex-img2" style={{
            backgroundImage: `url(${img2})`,
          }} />
          <div className="home1-container-flex-content">
            {
              map.map((item, idx) => {
                return (
                  <div className="home1-container-flex-content-text">
                    <h4>
                      {item.title}
                    </h4>
                    <p>
                      {item.text}
                    </p>
                  </div>
                );
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
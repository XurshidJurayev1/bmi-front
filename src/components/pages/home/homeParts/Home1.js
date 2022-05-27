import React from 'react';
import './Home1.scss';
import img from '../../../../assets/img/platform_devices.png';
import img2 from '../../../../assets/img/platform_phone_mobile.png';

const Home1 = () => {

  const map = [
    {
      title: 'Learn faster',
      text: 'Short 5-minute lessons make it easier to pay attention and remember what you learned',
    },
    {
      title: 'Stay motivated',
      text: 'Animated videos bring concepts to life with examples and a touch of humor',
    },
    {
      title: 'Study smarter',
      text: 'Expert teachers help you focus on what\'s most important so you are confident and prepared',
    },
  ];


  return (
    <div className="home1">
      <div className="home1-container">
        <h3>
          What makes our learning platform different
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
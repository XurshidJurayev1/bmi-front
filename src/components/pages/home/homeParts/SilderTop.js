import React from 'react';
import './SliderTop.scss';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';
import img from '../../../../assets/img/slider1.jpg';
import img1 from '../../../../assets/img/blog1.png';
import img2 from '../../../../assets/img/blog2.jpg';
import img3 from '../../../../assets/img/blog3.jpg';
import img4 from '../../../../assets/img/blog4.jpg';
import img5 from '../../../../assets/img/blog5.jpg';
import img6 from '../../../../assets/img/blog6.jpg';


const SilderTop = (props) => {

  const map = [
    {
      img: img6,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.',
    },
    {
      img: img1,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.',
    },

    {
      img: img,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n' +
        '\n',
    }, {
      img: img2,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n' +
        '\n',
    }, {
      img: img3,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n' +
        '\n',
    }, {
      img: img4,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n' +
        '\n',
    }, {
      img: img5,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n' +
        '\n',
    }, {
      img: img6,
      title: 'WebLearn',
      text: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n' +
        '\n',
    },


  ];

  return (<div className="slider">
    <AwesomeSlider
      cssModule={AwsSliderStyles}
      bullets="false"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      style={{ height: '100vh' }}
    >
      {map.map((item, idx) => {
        return (<div
          key={idx}
          className="slider__card"
          style={{
            backgroundImage: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
          }}>
          <div className="slider__card__content">
            <h3>
              {item.title}
            </h3>
            <p>
              {item.text}
            </p>
          </div>
        </div>);
      })}


    </AwesomeSlider>
  </div>);
};

export default SilderTop;

// <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
//             aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active" data-bs-interval="10000">
//       <img src="https://preview.colorlib.com/theme/webuni/img/bg.jpg.webp" className="d-block w-100" alt="..." />
//       <div className="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item" data-bs-interval="2000">
//       <img src="https://preview.colorlib.com/theme/webuni/img/bg.jpg.webp" className="d-block w-100" alt="..." />
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src="https://preview.colorlib.com/theme/webuni/img/bg.jpg.webp" className="d-block w-100" alt="..." />
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight"
//           data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
//           data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
{/*  </button>*/
}
{/*</div>*/
}
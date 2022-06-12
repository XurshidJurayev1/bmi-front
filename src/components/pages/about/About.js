import React from 'react';
import './About.scss';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" about1 ">
      <div className="about1__content">
        <h3>
          Hoziroq bizning ham jamiyatimizga qo'shiling!
        </h3>
        <p>

          Har joyda, istalgan vaqtda online darslarimizdan foydalaning. bizning darslarimizni asosiy vaqtingizga ta'sir
          qilmagan holda o'rganishingiz mumkin.
        </p>
        <button
          className="btn btn-primary  "
          onClick={() => navigate('/register')}>
          Hoziroq roʻyxatdan oʻtish
        </button>

      </div>
    </div>
  );
};

export default About;
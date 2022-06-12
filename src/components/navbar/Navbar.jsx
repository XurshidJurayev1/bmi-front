import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      name: 'Asosiy',
      path: '/',
    },
    {
      name: 'Biz haqimizda',
      path: '/about',
    },
    {
      name: 'Kurslar',
      path: '/courses',
    },
    {
      name: 'Yangiliklar',
      path: '/news',
    },
    {
      name: 'Aloqa',
      path: '/contact',
    },
  ];
  console.log(open);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
            <div className="logo_navbar" style={{ backgroundImage: `url(${logo})` }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation" onClick={() => setOpen(true)}>
            <AiOutlineMenu />
            {/*<span className="navbar-toggler-icon"></span>*/}
            {/*<i className="fa-solid fa-ellipsis-vertical"></i>*/}
          </button>
          <div className="collapse navbar-collapse nvb" id="navbarSupportedContent">
            <button className="navbar-toggler nvb-close" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                    style={{ position: 'absolute', right: '20px' }}
                    aria-label="Toggle navigation">
              <AiOutlineCloseSquare />
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                routes.map((item, idx) => {
                  return (
                    <li className="nav-item" key={idx}>
                      <NavLink to={item.path} className="nav-link " activeClassName="nav-link active"
                               aria-current="page">{item.name}</NavLink>
                    </li>
                  );
                })
              }


            </ul>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            </div>


          </div>
          <div className="mobile_navbar"
               style={open ? { display: 'flex' } : { display: 'none' }}
          >
            <button className="navbar-toggler nvb-close" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                    style={{ position: 'absolute' }}
                    aria-label="Toggle navigation">
              <AiOutlineCloseSquare />
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                routes.map((item, idx) => {
                  return (
                    <li className="nav-item" key={idx}>
                      <NavLink to={item.path} className="nav-link " activeClassName="nav-link active"
                               aria-current="page" onClick={() => setOpen(false)}>{item.name}</NavLink>
                    </li>
                  );
                })
              }


            </ul>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={() => navigate('/login')}>Kirish</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;


// import { Link } from "react-router-dom";
// import { React, useState } from "react";
// import logo from "../../images/PayMe_Logo.png";
// import "./navbar.scss";
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBBtn,
//   MDBCollapse,
//   MDBDropdownToggle,
//   MDBDropdown,
//   MDBDropdownItem,
//   MDBDropdownLink,
//   MDBDropdownMenu,
// } from "mdb-react-ui-kit";
//
// const Navbar = () => {
//   const [showBasic, setShowBasic] = useState(false);
//   return (
//     <div>
//       <MDBNavbar className="fixed-top" expand="lg" light bgColor="light">
//         <MDBContainer>
//           <MDBNavbarBrand href="#">
//             <img className="navbar__logo" src={logo} alt="" />
//           </MDBNavbarBrand>
//           <MDBNavbarToggler
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setShowBasic(!showBasic)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//
//           <MDBCollapse navbar show={showBasic}>
//             <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/">
//                   Домой
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/about">
//                   О нас
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/blog">
//                   Новости
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/contact">
//                   Контакты
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/vokansi">
//                   Ваканси
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/paymet">
//                   Оплата
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <MDBDropdown>
//                   <MDBDropdownToggle
//                     tag="a"
//                     className="nav-link nabar__link nabar__link-cursor"
//                   >
//                     Ru
//                     <i className="fas fa-language"></i>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink>UZ</MDBDropdownLink>
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink>EN</MDBDropdownLink>
//                     </MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//
//             <form className="d-flex input-group w-auto">
//               <input
//                 type="search"
//                 className="form-control"
//                 placeholder="поиск по сайту"
//                 aria-label="Search"
//               />
//               <MDBBtn color="primary">поиск</MDBBtn>
//             </form>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </div>
//   );
// };
//
// export default Navbar;


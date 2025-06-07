import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import theme_pattern from '../../assets/theme_pattern.svg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="header">
      <div className='navbar'>
        {/* <img className='logo-img' src={logo} alt="logo" /> */}
        <div className="nav-title">
          <h1> Akhilesh </h1>
          <img src={theme_pattern} alt="" />
        </div>

        <img src={menu_open} onClick={openMenu} alt="image" className='nav-mob-open' />

        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="image" className='nav-mob-close' />

          <li><AnchorLink className='anchor-link' href='#home' > <p onClick={() => setMenu("home")}> Home </p> </AnchorLink> {menu === "home" ? <img src={underline} alt='image' /> : <> </>} </li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about' > <p onClick={() => setMenu("about")}> About Me </p> </AnchorLink> {menu === "about" ? <img src={underline} alt='image' /> : <> </>} </li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services' > <p onClick={() => setMenu("services")}> Services </p> </AnchorLink> {menu === "services" ? <img src={underline} alt='image' /> : <> </>} </li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work' > <p onClick={() => setMenu("portfolio")}> Portfolio </p> </AnchorLink> {menu === "portfolio" ? <img src={underline} alt='image' /> : <> </>} </li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact' > <p onClick={() => setMenu("contact")}> Contact </p> </AnchorLink> {menu === "contact" ? <img src={underline} alt='image' /> : <> </>} </li>
        </ul>

        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' > Connect With Me </AnchorLink></div>
      </div>
    </div>
  )
}

export default Navbar
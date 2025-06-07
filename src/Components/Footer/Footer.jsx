import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img className='akhilesh-logo' src={theme_pattern} alt="iamge" /> */}
                <div className="footer-title">
                    <h1> Akhilesh </h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <p> I am a Software Developer from, MH-30 with the 1 years of experience in Technologies like React JS , Tailwind CSS and Node JS. </p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input" style={{ padding: "17px 20px" }}>
                    <img src={user_icon} alt="image" />
                    <input type="email" placeholder='Enter Your Email .. ' />
                </div>
                <div className="footer-subscribe" style={{ padding: "8px 20px" }}> Subscribe </div>
            </div>
        </div>
        <hr className='footer-hr' />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> @ 2025 Akhilesh Sharma. All rights reserved. </p>
            <div className="footer-bottom-right">
                <p> Terms of Services </p>
                <p> Privacy Policy </p>
                <p> Connect with Me </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;
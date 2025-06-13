import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/new_profile.png';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About Me </h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="about profile image" style={{borderRadius: "10px", height: "33rem"}} />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I am experienced Software Developer with over decade a professional expertise in the field. Throughout my career, I have the privilage of collaborating with prestigious organizations, contributing to their success and growth. </p>
                    <p> My passion for software development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project.  </p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"> <p> HTML & CSS </p> <hr style={{width: "40%"}} /> </div>
                    <div className="about-skill"> <p> JavaScript </p> <hr style={{width: "70%"}} /> </div>
                    <div className="about-skill"> <p> React JS </p> <hr style={{width: "50%"}} /> </div>
                    <div className="about-skill"> <p> Angular JS </p> <hr style={{width: "2%"}} /> </div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1> 1+ </h1>
                <p> YEARS of EXPERIENCE </p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1> 20+ </h1>
                <p> PROJECTS COMPLETED </p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1> 0+ </h1>
                <p> HAPPY CLIENTS </p>
            </div>
        </div>
    </div>
  )
}

export default About;
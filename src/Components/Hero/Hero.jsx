import React from 'react';
import './Hero.css';
import profile_img from '../../assets/new_profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="image" style={{borderRadius: "50%", height: "20rem", width: "20rem", objectFit: "cover"}} />

      <h1> <span> I'm Akhilesh Sharma, </span> Software Developer from in MH-30. </h1>

      <p> I am Software Developer from Akola, MH-30 with 1 years of experience in multiple technologies like <br /><br />
        <span> React </span>
        <span> Tailwind CSS </span>
        <span> Redux </span>
      </p>

      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' > Connect with me </AnchorLink> </div>
        <div className="hero-resume"> My resume </div>
      </div>
    </div>
  )
}

export default Hero
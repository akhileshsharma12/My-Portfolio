import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1> My Services </h1>
        <img src={theme_pattern} alt="image" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3> {service.s_no} </h3>
            <h2> {service.s_name} </h2>
            <p> {service.s_desc} </p>
            <button
              className="services-readmore"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <span>Read More</span>
              <img src={arrow_icon} alt="arrow" />
            </button>
            {selected === index && (
              <div className="service-detail">
                <h4>Details:</h4>
                <p>
                  {/* You can add more detailed content here if you want */}
                  {service.s_desc}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
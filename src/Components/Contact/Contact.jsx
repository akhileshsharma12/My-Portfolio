import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "68ec8cdc-0549-4f79-9c4d-b4d5eb7caad0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1> Get In Touch </h1>
                <img src={theme_pattern} alt="image" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1> Let's Taik </h1>
                    <p> I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="image" />
                            <p> akhileshsh421@gmail.com </p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="image" />
                            <p> +91 8830947118 </p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="image" />
                            <p> At Post Unknown Location. </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=""> Your Name </label>
                    <input type="text" placeholder='Enter Name ... ' name='name' />

                    <label htmlFor=""> Your Email </label>
                    <input type="email" name="email" placeholder='Enter Email ... ' />

                    <label htmlFor=""> Enter Contact </label>
                    <input type="tel" name="contact" placeholder='Enter Contact ... ' />

                    <label htmlFor=""> Write Your Message </label>
                    <textarea name="message" rows='8' placeholder='Enter Your Message ... ' ></textarea>

                    <button type='submit' className="contact-submit"> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
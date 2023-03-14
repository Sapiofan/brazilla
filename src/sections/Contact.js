import React from 'react';
import { useNav } from '../customHooks/useNav';
import Bean from '../media/bean.png';
import Telegram from '../media/telegram.png';
import Instagram from '../media/instagram.png';
import Facebook from '../media/facebook.png';

const Contact = () => {
	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<div className='bean' style={{bottom: "-10%", left: "10%"}}>
				<img src={Bean} style={{transform: "rotate(-100deg)"}}></img>
			</div>
			<div className='bean' style={{bottom: "-10%", left: "10%"}}>
				<img src={Bean} style={{transform: "rotate(-100deg)"}}></img>
			</div>
			<div className='bean' style={{bottom: "-10%", left: "10%"}}>
				<img src={Bean} style={{transform: "rotate(-100deg)"}}></img>
			</div>
			<h1><span className='gold'>Contact</span> us</h1>
			<div className='form-data'>
				<div className='message-text'>
					<p>If you want, you can give feedback, suggest what you want to see in our shop or site, 
					or just share your coffee story. We are always happy when you write us ;) </p>
					<div className='socials'>
						<a className='social'>
							<img src={Telegram}></img>
						</a>
						<a className='social'>
							<img src={Instagram}></img>
						</a>
						<a className='social'>
							<img src={Facebook}></img>
						</a>
					</div>
				</div>
				<form>
					<div className='row-input'>
						<input type={Text} className="contact-input row-input"></input>
						<input type={Text} className="contact-input row-input"></input>
					</div>
					<input type={Text} className="contact-input subject"></input>
					<input type={Text} className="contact-input message"></input>
					<button type='submit' className='golden-button contact-button'>Send</button>
				</form>

			</div>
		</section>
	);
};

export default Contact;
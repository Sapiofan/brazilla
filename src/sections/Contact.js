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
			<div className='bean' style={{top: "8%", left: "20%"}}>
				<img src={Bean} style={{transform: "rotate(-80deg)"}}></img>
			</div>
			<div className='bean' style={{top: "45%", right: "2%"}}>
				<img src={Bean} style={{transform: "rotate(70deg)"}}></img>
			</div>
			<div className='bean' style={{bottom: "10%", left: "35%"}}>
				<img src={Bean} style={{transform: "rotate(140deg)"}}></img>
			</div>
			<h1><span className='gold'>Contact</span> us</h1>
			<div className='form-data'>
				<div className='message-text'>
					<h4>Shoot us a message</h4>
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
						<div className="floating-label-group" style={{marginRight: "20px"}}>
							<input type="text" className="form-control contact-input row-input-text" autocomplete="off" 
							autofocus required />
							<label class="floating-label">Name</label>
						</div>
						<div className="floating-label-group">
							<input type="text" className="form-control contact-input row-input-text" autocomplete="off" 
							autofocus required />
							<label className="floating-label">Email</label>
						</div>
					</div>
					<div class="floating-label-group">
						<input type="text" className="form-control contact-input subject" autocomplete="off" autofocus required />
						<label className="floating-label">Subject</label>
					</div>
					<textarea className="contact-input message" placeholder='Message' required></textarea>
					<div className='center-send-button'>
						<button type='submit' className='golden-button contact-button'>Send</button>
					</div>
				</form>

			</div>
		</section>
	);
};

export default Contact;
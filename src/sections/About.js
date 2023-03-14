import React from 'react';
import { useNav } from '../customHooks/useNav';
import Bean from '../media/bean.png';
import BlackCoffee from '../media/black-coffee.jpg';

const About = () => {
	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div className='sun'></div>
			<div className='bean' style={{bottom: "-10%", left: "10%"}}>
				<img src={Bean} style={{transform: "rotate(-100deg)"}}></img>
			</div>
			<h1><span className='gold-text'>About</span> us</h1>
			<div className='about-part'>
				<div className='about-pic-container'>
					<img
						src={BlackCoffee}
						alt='black coffee'
					/>
				</div>
				<div className='text-part'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Donec dictum ipsum quis risus euismod varius. 
					Donec faucibus placerat turpis eu dictum. Sed varius tempor dolor ut pretium. 
					Nunc commodo tortor elit, et pulvinar sem luctus vitae. Integer congue sapien sed nibh 
					tristique bibendum quis non ante. Nulla ornare aliquet suscipit. Nam hendrerit, 
					felis sit amet blandit interdum, mi lorem volutpat augue, eu ornare odio massa lobortis nulla. 
					Nulla justo ipsum, maximus sit amet urna quis, vulputate viverra sapien. 
					Nam at urna ac justo commodo vehicula vitae a lacus.</p>
				</div>
			</div>
		</section>
	);
};

export default About;
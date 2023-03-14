import React from 'react';
import { useNav } from '../customHooks/useNav';
import Bean from '../media/bean.png';
import Smoke from '../media/smoke.png';
import Story from './Story';

const Stories = () => {
	const storiesRef = useNav('Stories');
	return (
		<section ref={storiesRef} id='storiesContainer'>
			<div className='bean' style={{top: "15%", left: "65%"}}>
				<img src={Bean} style={{transform: "rotate(140deg)"}}></img>
			</div>
			<div className='bean' style={{top: "60%", left: "30%"}}>
				<img src={Bean} style={{transform: "rotate(-10deg)"}}></img>
			</div>
			<div className='bean' style={{bottom: "5%", left: "3%"}}>
				<img src={Bean} style={{transform: "rotate(150deg)"}}></img>
			</div>
			<div className='bean' style={{bottom: "10%", left: "75%"}}>
				<img src={Bean} style={{transform: "rotate(50deg)"}}></img>
			</div>
			<h1>Stories</h1>
			<div className='stories'>
				<Story />
				<Story />
				<Story />
			</div>
			<div className='center-view-button'>
			<div>
				<div className='smoke-container'>
					<div className='smoke-img'>
							<img src={Smoke}></img>
					</div>
				</div>
				<button className='golden-button stories-button'>View other</button>
			</div>
			</div>
		</section>
	);
};

export default Stories;
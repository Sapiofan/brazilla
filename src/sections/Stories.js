import React from 'react';
import { useNav } from '../customHooks/useNav';
import Bean from '../media/bean.png';
import Story from './Story';

const Stories = () => {
	const storiesRef = useNav('Stories');
	return (
		<section ref={storiesRef} id='storiesContainer'>
			<div className='bean'><img src={Bean} style={{transform: "rotate(100deg)"}}></img></div>
			<div className='bean'><img src={Bean} style={{transform: "rotate(100deg)"}}></img></div>
			<div className='bean'><img src={Bean} style={{transform: "rotate(100deg)"}}></img></div>
			<div className='bean'><img src={Bean} style={{transform: "rotate(100deg)"}}></img></div>
			<h1>Stories</h1>
			<div className='stories'>
				<Story />
				<Story />
				<Story />
			</div>
			<button className='stories-button'>View other</button>
		</section>
	);
};

export default Stories;
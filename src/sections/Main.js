import React from 'react';
import { Image, Discounts, Offers, About, Stories, Event, Contact } from './';
import './Main.css';

const Main = () => (
	<main>
		<Image />
		<Discounts />
		<Offers />
		<About />
        <Stories />
		<Event />
        <Contact />
	</main>
);

export default Main;
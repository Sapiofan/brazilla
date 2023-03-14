import React from 'react';
import { useNav } from '../customHooks/useNav';

const Offers = () => {
	const offersRef = useNav('Offers');
	return (
		<section ref={offersRef} id='discountsContainer'>
			<h1>Offers</h1>
		</section>
	);
};

export default Offers;
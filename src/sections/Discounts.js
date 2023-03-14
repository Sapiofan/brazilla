import React from 'react';
import { useNav } from '../customHooks/useNav';

const Discounts = () => {
	const discountsRef = useNav('Discounts');
	return (
		<section ref={discountsRef} id='discountsContainer'>
			<h1>Discounts</h1>
		</section>
	);
};

export default Discounts;
import React from 'react';
import { useNav } from '../customHooks/useNav';
import Banner from '../media/banner.png';

const Offers = () => {
	const offersRef = useNav('Offers');
	return (
		<section ref={offersRef} id='offersContainer'>
			<h1>Offers</h1>
			<div className='banners'>
				<div className='banner'>
					<img src={Banner}></img>
				</div>
				<div className='banner'>
					<img src={Banner}></img>
				</div>
			</div>
		</section>
	);
};

export default Offers;
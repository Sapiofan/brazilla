import React from 'react';
import './Main.css';
import CoffeeMaking from '../media/coffee-making.jpg';

const Image = () => {

	return (
		<section id='coffeeMakingContainer'>
            <div className='coffee-making-pic-container'>
                <img
                    src={CoffeeMaking}
                    alt='Coffee making'
                    className='coffee-making-pic'
                />
            </div>
			<div className='model-pic'>
				<h3>You are here and it proves that you love coffee as much as we do :)</h3>
                    <h3>To see all our offers visit our main site:</h3>
				<h3><a href=''>https://www.brazilla.com</a></h3>
			</div>
		</section>
	);
};

export default Image;
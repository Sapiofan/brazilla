import React from 'react';
import Latte from '../media/latte.png';

const Story = () => {
	return (
		<div className='story'>
            <div className='story-img'>
                <img src={Latte}></img>
            </div>
            <h3>Header of the coffee-story</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec dictum ipsum quis risus euismod varius. Donec faucibus placerat turpis eu dictum.</p>
            <button className='golden-button story-button'>Read</button>
		</div>
	);
};

export default Story;
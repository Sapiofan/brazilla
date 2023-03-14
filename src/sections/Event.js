import React from 'react';
import Bean from '../media/bean.png';
import Beverage from '../media/beverage.png';
import Sun from '../media/sun.png';
import { useNav } from '../customHooks/useNav';

const Event = () => {
    const eventRef = useNav('Event');
	return (
		<section ref={eventRef} id='eventContainer'>
			<div className='bean' style={{bottom: "15%", left: "55%"}}>
				<img src={Bean} style={{transform: "rotate(50deg)"}}></img>
			</div>
            <div className='beverage' style={{bottom: "25%", right: "5%"}}>
				<img src={Beverage}></img>
			</div>
            <div className='event-part'>
				<div className='event-pic-container'>
					<img
						src={Sun}
						alt='event label'
					/>
				</div>
				<div className='text-part-event'>
                    <h4 className='aladin'>Buy a big cup of coffee all next month and 
                    collect <span className='gold aladin'>“Brazilla Sun”</span> labels.</h4>
					<p>In the end of month you can exchange labels on pleasent gifts:</p>
                    <p><span className='gold labels'>120 labels</span> - iPhone 13 Pro Max</p>
                    <p><span className='gold labels'>100 labels</span> - Apple Airpods</p>
                    <p><span className='gold labels'>80 labels</span> - 3 packages of any type of coffee that costs less than 50$</p>
                    <button className='golden-button details'>Details</button>
				</div>
			</div>
		</section>
	);
};

export default Event;
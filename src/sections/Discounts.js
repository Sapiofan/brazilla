import React from 'react';
import { useNav } from '../customHooks/useNav';
import Product from '../media/product.png';
import Carousel from './Carousel';

const Discounts = () => {
	const discountsRef = useNav('Discounts');
	return (
		<section ref={discountsRef} id='discountsContainer'>
			<h1>Discounts</h1>
			<Carousel
                show={3}
                infiniteLoop
            >
                <div>
                    <div style={{padding: 18}} className='zoom'>
                        <img src={Product} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 18}} className='zoom'>
                        <img src={Product} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 18}} className='zoom'>
                        <img src={Product} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 18}} className='zoom'>
                        <img src={Product} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 18}} className='zoom'>
                        <img src={Product} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 18}} className='zoom'>
                        <img src={Product} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
		</section>
	);
};

export default Discounts;
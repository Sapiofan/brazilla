import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './NavLinks';
import './Nav.css';

const Nav = () => {
	return (
		<div className='header'>
		<div className='center-logo'>
			<div className='logo'>Brazilla</div>
		</div>
			<nav>
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
						<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
					))}
			</nav>
		</div>
	);
};

export default Nav;
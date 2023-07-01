/** @format */

import { Logo } from '../index';
export const NavBar = ({ children }) => {
	return (
		<nav className='nav-bar'>
			<Logo />
			{children}
		</nav>
	);
};

import React from 'react';
import Style from './Header.module.css';

function Header() {
	return (
		<header className = {Style.header__wrapper}>
        	<img src="https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png" alt="placeholder+image" />
     	</header>
	)
}

export default Header;
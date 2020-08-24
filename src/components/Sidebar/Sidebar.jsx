import React from 'react';
import Style from './Sidebar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from 'react-router-dom';

function Sidebar(props) {
	let sidebarFriends = props.State.Friends.map( f => <Friends name={f.name} img={f.img} />);
	return (
		<div className = {Style.sidebar__wrapper}>
			Friends
			<div className = {Style.friends__wrapper}>
				{sidebarFriends}
			</div>
		</div>
	)
}

export default Sidebar;
import React from 'react';
import Style from './../Sidebar.module.css';
import {NavLink} from 'react-router-dom';

function Friends(props) {
	return (
		<div className = {Style.friends__block}>
			<img src={props.img} alt="placeholder+image" />
			<p>{props.name}</p>
		</div>
	)
}

export default Friends;
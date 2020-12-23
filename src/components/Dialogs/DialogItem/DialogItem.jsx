import React from 'react';
import Style from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
	let path = "/dialogs/" + props.id;
	return (
		<div className={Style.dialog + ' ' + Style.active}>

			<NavLink to={path}><img src={props.img} alt="placeholder+image" />{props.name}</NavLink>
		</div>
	);
};

export default DialogItem;
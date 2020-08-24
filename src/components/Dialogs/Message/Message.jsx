import React from 'react';
import Style from './../Dialogs.module.css';

function Message(props) {
	return (
		<div className={Style.message}>{props.message}</div>
	)
}

export default Message;
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function Dialogs(props) {
	let state = props.dialogsPage;
	let dialogElements = state.Dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img} />);
	let messageElements = state.Messages.map( m => <Message key={m.id} message={m.message} />);

	let newMessageText = state.newMessageText;

	let addMessage = () => {
		props.addMessage();
	}

	let onMessageChange = (e) => {
		let text = e.target.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={Style.dialogs}>
			<div className={Style.dialogs__items}>
				{dialogElements}
			</div>
			<div className={Style.messages}>
				{messageElements}
				<div>
					<textarea onChange={onMessageChange} value={newMessageText} />
				</div>
				<div>
					<button onClick = {addMessage}>Add Message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
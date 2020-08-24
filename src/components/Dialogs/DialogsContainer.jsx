import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import Style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			let action = updateNewMessageTextActionCreator(text);
			dispatch(action);
		},
		addMessage: () => {
			dispatch(addMessageActionCreator());
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs );

export default DialogsContainer;
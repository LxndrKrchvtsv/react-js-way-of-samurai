import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Style from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";

function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogElements = state.Dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>);
    let messageElements = state.Messages.map(m => <Message key={m.message} message={m.message}/>);

    const onSubmitMessage = (formData) => {
    	console.log(formData);
		props.addMessage(formData.newMessageBody);
	}

    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogs__items}>
                {dialogElements}
            </div>
            <div className={Style.messages}>
				<div>
					{messageElements}
				</div>
                <div>
					<AddMessageReduxForm onSubmit={onSubmitMessage} />
				</div>
            </div>
        </div>
    );
};

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your new message"}
                       validate={[maxLength100]}/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "addMessageForm"})(AddMessageForm)

export default Dialogs;
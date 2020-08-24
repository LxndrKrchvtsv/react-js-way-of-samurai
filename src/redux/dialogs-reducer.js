const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    Dialogs: [
        {id: 1, name: 'Dima', img: 'https:\/\/icdn.lenta.ru/images/2020/02/25/12/20200225122133261/detail_94bd195f0e4f6b887b5377e045742b76.jpg'},
        {id: 2, name: 'Darya', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 3, name: 'Yarik', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 4, name: 'Sofia', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 5, name: 'Sasha', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 6, name: 'Alexander', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'}
    ],

    Messages: [
        {message: 'Hi'},
        {message: 'How is your it-camasutra?'},
        {message: 'It\'s good!'},
        {message: 'YaY'}
    ],

    newMessageText: 'First message here!'
 };

const dialogsReducer =  (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
	    case ADD_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                Messages: [...state.Messages, {message: newMessage}]
            };
        }
		default:
			return state;
	};
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newMessage: text
});

export default dialogsReducer;
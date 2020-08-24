const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostData: [
        {id: 1, message: 'Do yourself way better!', like: 15},
        {id: 2, message: 'Let\'s go!', like: 10},
        {id: 3, message: 'Let\'s go! Y', like: 10},
        {id: 4, message: 'Let\'s go! E', like: 10},
        {id: 5, message: 'Let\'s go! P', like: 10},
        {id: 6, message: 'Let\'s go! OH', like: 10},
        {id: 7, message: 'Let\'s go! NEVER GIVE UP', like: 2021}
    ],
    newPostText: 'Never give up! Canada2021.'
};

const profileReducer =  (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
	    	let newPost = {
		        id: 8,
		        message: state.newPostText,
		        like: 0
		    };
		    return {
		    	...state,
		    	PostData: [...state.PostData, newPost],
		    	newPostText: ''
		    };
		}
	    case UPDATE_NEW_POST_TEXT: {
	    	return {
	    		...state,
	    		newPostText: action.newText
	    	};
		}
		default:
			return state;
	};
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
});

export default profileReducer;
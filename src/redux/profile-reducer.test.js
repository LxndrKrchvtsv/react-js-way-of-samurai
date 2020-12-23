import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
	PostData: [
		{id: 1, message: 'Do yourself way better!', like: 15},
		{id: 2, message: 'Let\'s go! NEVER GIVE UP', like: 2021}
	]
};

test('Length of posts should be incremented', () => {
	let action = addPostActionCreator("It-kamasutra.com");
	let newState = profileReducer(state, action);

	expect(newState.PostData.length).toBe(3);
});

test('Message of new posts should be correct', () => {
	let action = addPostActionCreator("It-kamasutra.com");
	let newState = profileReducer(state, action);

	expect(newState.PostData[2].message).toBe("It-kamasutra.com");
});

test('After deleting length of messages should be decrement', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);

	expect(newState.PostData.length).toBe(1);
});

test(`After deleting length shouldn't be decrement if id is incorrect`, () => {
	let action = deletePost(1000);
	let newState = profileReducer(state, action);

	expect(newState.PostData.length).toBe(2);
});

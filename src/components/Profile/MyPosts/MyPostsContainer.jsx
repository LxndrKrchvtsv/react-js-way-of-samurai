import React from 'react';
import {addPostActionCreator} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		PostData: state.profilePage.PostData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostBody) => {
			dispatch(addPostActionCreator(newPostBody));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
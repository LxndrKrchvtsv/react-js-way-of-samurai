import React from 'react';
import Style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	//debugger;
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;
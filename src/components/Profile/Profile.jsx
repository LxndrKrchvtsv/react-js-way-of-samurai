import React from 'react';
import Style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div>
			<ProfileInfo saveAvatar={props.saveAvatar}
						 isOwner={props.isOwner}
						 profile={props.profile}
						 status={props.status}
						 updateUserStatus={props.updateUserStatus}
						 saveProfile={props.saveProfile}
			/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile;
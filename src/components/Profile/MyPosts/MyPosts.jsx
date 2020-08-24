import React from 'react';
import Style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';

function MyPosts(props) {

	let postElemets = props.PostData.map(p => <Post message={p.message} like={p.like} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
	<div className={Style.posts__block}>
		<h3>My Posts</h3>
		<div>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
			</div>
			<div>
				<button onClick = {onAddPost}>Add Post</button>
			</div>
		</div>
		<div className = {Style.posts}>
			{postElemets}
		</div>
	</div>
	)
}

export default MyPosts;
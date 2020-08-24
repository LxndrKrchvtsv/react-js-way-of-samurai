import React from 'react';
import Style from './Post.module.css';

function Post(props) {
	return (
		<div className = {Style.item}>
			<img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" />
			{props.message}
			<div>
				<span>{props.like} likes</span>
			</div>
		</div>
	)
}

export default Post;
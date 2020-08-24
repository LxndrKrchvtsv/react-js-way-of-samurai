import React from 'react';
import Style from './MyPosts.module.css';

function MyPosts() {
	return (
/*<div className = {Style.content__wrapper}>
	<div>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjcyq46P-2OYlgZakIJfr4NpEWYaGCm7TKPNpBWeybjeNyb7GyQ&s" alt="testttt" />
		Main Content
	</div>
	<div>
		ava + discription
	</div>*/
	<div>
		my posts
		<div>
			new_post
		</div>
		<div className = {Style.posts}>
			<div className = {Style.item}>
				post1
			</div>
			<div className = {Style.item}>
				post2
			</div>
		</div>
	</div>
// </div>
	)
}

export default MyPosts;
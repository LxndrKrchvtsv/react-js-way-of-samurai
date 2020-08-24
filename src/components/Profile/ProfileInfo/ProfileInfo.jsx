import React from 'react';
import Style from './ProfileInfo.module.css';

function ProfileInfo() {
	return (
		<div>
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjcyq46P-2OYlgZakIJfr4NpEWYaGCm7TKPNpBWeybjeNyb7GyQ&s" alt="testttt" />
				Main Content
			</div>
			<div className={Style.description__block}>
				ava + discription
			</div>
		</div>
	)
}

export default ProfileInfo;
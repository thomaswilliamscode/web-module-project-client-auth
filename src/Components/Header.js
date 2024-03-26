import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

	const headerStyle = {
		display: 'flex',
		borderBottom: '3px solid grey',
		justifyContent: 'space-between',
	};

	const aStyle = {
		display: 'flex',
		justifyContent: 'space-around',
		width: '40%',
		alignItems: 'center',
	};

	const linkStyle = {
		
	}



	return (
		<div className='header' style={headerStyle}>
			<h2>Friends DataBase</h2>
			<div style={aStyle}>
				<button><Link to='/login'>Login</Link></button>
				<button><Link to='/friendlist'>FriendList</Link></button>
				<button><Link to='/addfriend'>AddFriend</Link></button>
				<button><Link to='/logout'>LogOut</Link></button>
			</div>
		</div>
	);
}

export default Header
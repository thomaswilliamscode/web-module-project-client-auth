import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getFriends } from '../actionCreators/friendsListCreator.js'
import { grabFriends } from '../reducers/friendsListReducer.js'

import { useNavigate } from 'react-router-dom';

// * [ ] When the component mounts, make a call to the api retrieving all friends. Remember that this is a protected route.




// * [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends`
// * [ ] In your login component, add code to your submission code the ability to redirect to your friendslist component.

const FriendsList = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const friendsList = useSelector( (state) => state.friendsList.friendsList )
	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

	// on mount call api
	useEffect( () => {
		let token = localStorage.getItem('token')
		if(token.length > 0){
			getFriends(dispatch);
		}
	}, [])

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/login');
		}
	}, [isLoggedIn]);


	return (
		<div>
			<h1>FriendsList</h1>
			<div>
				{friendsList.length > 0 ? friendsList.map( (friend) => {
					const { id, name, email, age} = friend
					return (
							<p key={id}>-{name.toUpperCase()}  -{email.toUpperCase()}</p>
					)
				}) : null}
			</div>
		</div>
	);
}

export default FriendsList;
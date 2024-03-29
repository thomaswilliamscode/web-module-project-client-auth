import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getFriends } from '../actionCreators/friendsListCreator.js'
import { grabFriends } from '../reducers/friendsListReducer.js'

// * [ ] When the component mounts, make a call to the api retrieving all friends. Remember that this is a protected route.




// * [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends`
// * [ ] In your login component, add code to your submission code the ability to redirect to your friendslist component.

const FriendsList = () => {
	const friendsList = useSelector( (state) => state.friendsList.friendsList )

	// on mount call api
	useEffect( () => {
		getFriends()
	}, [])

	useEffect( () => {
		console.log('we are in the useEffect FriendsList', friendsList)
	}, [friendsList]) 

	return (
		<h1>In The FriendsList</h1>
	);
}

export default FriendsList;
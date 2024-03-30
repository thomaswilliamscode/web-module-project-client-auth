import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getFriends } from '../actionCreators/friendsListCreator.js'
import { grabFriends } from '../reducers/friendsListReducer.js'
// import { axiosWithAuth } from "../utility/axiosWithAuth.js";
// import { testing } from '../reducers/friendsListReducer.js'

// import { baseURL, friends} from '../utility/urlInfo.js'

// * [ ] When the component mounts, make a call to the api retrieving all friends. Remember that this is a protected route.




// * [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends`
// * [ ] In your login component, add code to your submission code the ability to redirect to your friendslist component.

const FriendsList = () => {

	const dispatch = useDispatch()

	const friendsList = useSelector( (state) => state.friendsList.friendsList )

	// on mount call api
	useEffect( () => {
		getFriends(dispatch)
	}, [])

	// const getFriends = () => {
	// 	const friendUrl = baseURL + friends;

	// 	let header = axiosWithAuth();

	// 	header
	// 		.get(friendUrl)
	// 		.then((res) => {
	// 			console.log('In the Axios Call', res.data);
	// 			grabFriends();
	// 			dispatch(testing())
	// 			console.log('after testing');
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

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
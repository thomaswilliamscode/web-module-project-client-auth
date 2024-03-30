import React from "react";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

import { baseURL, logIn, logOut, friends } from '../utility/urlInfo.js';
import { axiosWithAuth } from '../utility/axiosWithAuth.js'
import { grabFriends, testing } from '../reducers/friendsListReducer.js'


// - **[GET]** to `/api/friends`: returns the list of friends.

export  const getFriends = (dispatch) => {

	const friendUrl = baseURL + friends

	let header = axiosWithAuth()

	header.get(friendUrl)
		.then( (res) => {
			dispatch(grabFriends(res.data))
		})
		.catch( (err) => {
			console.log(err)
		})
}
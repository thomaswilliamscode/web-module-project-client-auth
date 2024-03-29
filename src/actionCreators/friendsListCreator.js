import React from "react";
import axios from 'axios'

import { baseURL, logIn, logOut, friends } from '../utility/urlInfo.js';
import { axiosWithAuth } from '../utility/axiosWithAuth.js'
import { grabFriends, testing } from '../reducers/friendsListReducer.js'


// - **[GET]** to `/api/friends`: returns the list of friends.

export  const getFriends = () => {

	const friendUrl = baseURL + friends

	let header = axiosWithAuth()

	header.get(friendUrl)
		.then( (res) => {
			console.log('In the Axios Call', res.data)
			grabFriends()
			testing()
			console.log('after testing')
		})
		.catch( (err) => {
			console.log(err)
		})
}
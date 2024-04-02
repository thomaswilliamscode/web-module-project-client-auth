import React from 'react'

import { useDispatch, } from 'react-redux'

import logOutAxios from '../actionCreators/logOutCreator.js'
import { logOut } from '../reducers/logOutReducer.js'


// redirect every page when no token available

const LogOut = () => {

	const dispatch = useDispatch()

	const onClick = () => {
		// - **[POST]** * to `/api/logout`: removes a token from active use. Returns the inactive token.
		logOutAxios()
		dispatch(logOut())

		// erase token from localStorage


	}



	return (
		<div>
			<h1>In LogOut Component</h1>
			<p>Would You Like To Log Out?</p>
			<button onClick={onClick} >LogOut</button>
		</div>
	)
}

export default LogOut
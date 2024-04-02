import React, {useEffect} from 'react'

import { useDispatch, useSelector} from 'react-redux'

import logOutAxios from '../actionCreators/logOutCreator.js'
import { logOut } from '../reducers/logOutReducer.js'
import { useNavigate } from 'react-router-dom';

import { logOutUser } from '../reducers/loginReducer.js'



// redirect FriendList, AddFriend, LogOut page  to logIn page when no token available

const LogOut = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);


	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/login');
		}
	}, [isLoggedIn]);

	const onClick = () => {
		logOutAxios()
		dispatch(logOut())
		dispatch(logOutUser())
		// navigate('/login')
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
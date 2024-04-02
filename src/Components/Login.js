import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setLoginInfo, logoutUser, sendingInfo } from '../reducers/loginReducer'
import { axiosWithAuth } from '../actionCreators/loginCreator.js'
import { useNavigate } from 'react-router-dom'
import {tryLogin} from '../actionCreators/loginCreator.js'
import { useEffect} from 'react'

import { formStyle, formItem, inputStyle} from '../Styles/styles.js'


const Login = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const getLogin = useSelector( (state) => state.login )
	const loginStatus = useSelector((state) => state.login.isLoggedIn);
	const userName = useSelector( (state) => state.login.userName )
	const password = useSelector((state) => state.login.password);



	useEffect(() => {

		if (loginStatus) {
			navigate('/friends-list');
		} 
	}, [loginStatus]);

	
	const onChange = (e) => {
		const {id, value} = e.target
		let userName= ''
		let password = ''
		if (id === 'username') {
			userName = value
		} else if (id === 'password') {
			password = value
		}

		const payload = {userName: userName, password: password,}
		dispatch(setLoginInfo(payload))
	}


	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(tryLogin(userName, password))
	}



	return (
		<div>
			<h2>Login</h2>
			<form style={formStyle} onSubmit={onSubmit}>
				<label style={formItem} htmlFor='username' type='text'>
					Username
				</label>
				<input style={inputStyle} id='username' onChange={onChange}></input>
				<label style={formItem} htmlFor='password' type='password'>
					Password
				</label>
				<input style={inputStyle} id='password' onChange={onChange}></input>
				<button style={formItem} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Login
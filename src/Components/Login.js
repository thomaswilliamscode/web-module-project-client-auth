import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setLoginInfo, logoutUser, sendingInfo } from '../reducers/loginReducer'
import { axiosWithAuth } from '../actionCreators.js/loginCreator.js'
import { useNavigate } from 'react-router-dom'
import {tryLogin} from '../actionCreators.js/loginCreator.js'


const Login = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const getLogin = useSelector( (state) => state.login )
	const loginStatus = useSelector((state) => state.login.isLoggedIn);
	const userName = useSelector( (state) => state.login.userName )
	const password = useSelector((state) => state.login.password);

	const formStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const formItem = {
		width: '50%',
	};

	const inputStyle = {
		width: '50%',
		marginBottom: '10px',
	};

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


	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			await dispatch(tryLogin(userName, password))
			console.log('Im in the middle: ',loginStatus)
			
		} catch{
			console.log('error in the submit')
		}
			redirect(loginStatus);
	}


		const redirect = (loginStatus) => {
			// console.log('basic login info: ', getLogin)
			console.log('Login Status Is: ', loginStatus);

			if (loginStatus) {
				navigate('friends-list');
			} else {
				console.log('sorry wrong info submitted');
			}
		};


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
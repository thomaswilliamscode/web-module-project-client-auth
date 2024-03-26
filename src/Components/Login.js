import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setLoginInfo, logoutUser, sendingInfo } from '../reducers/loginReducer'
import { axiosWithAuth } from '../Axios/loginAxios.js'

// still need to use axios with auth, also save token to local storage. 

const Login = () => {

	const dispatch = useDispatch()
	const getLogin = useSelector( (state) => state.login )

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

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(sendingInfo());
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
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stateUpdate, friendCheck, resetValues } from '../reducers/addFriendsReducer.js'
import  sendFriendData from '../actionCreators/addFriendsCreator.js'

import { formStyle, formItem, inputStyle } from '../Styles/styles.js';
import Login from './Login';

import { useNavigate } from 'react-router-dom';



const AddFriends = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const isValid = useSelector((state) => state.addFriends.isValid);
	const nameValue = useSelector((state) => state.addFriends.name);
	const emailValue = useSelector((state) => state.addFriends.email);
	const isLoggedIn = useSelector( (state) => state.login.isLoggedIn )

	useEffect( () => {
		if (!isLoggedIn) {
			navigate('/login')
		}
	}, [isLoggedIn])



	const onChange = (e) => {
		const { id, value } = e.target
		let action = {type: id, payload: value}

		dispatch(stateUpdate(action))
	}

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(friendCheck());
		if (isValid) {
			const data = {
				name: nameValue,
				email: emailValue,
			};
			sendFriendData(data)
			dispatch(resetValues())
		}

		// sendFriendData(data)
	}



	return (
		<>
			<h1> In Add Friends Component</h1>
			{isValid ? null : 'Please Input Name & Email'}
			<form onSubmit={onSubmit} style={formStyle}>
				<label htmlFor='name' style={formItem}>
					Friend Name
				</label>
				<input
					type='text'
					id='name'
					onChange={onChange}
					style={inputStyle}
					value={nameValue}
				></input>

				<label htmlFor='email' style={formItem}>
					Friend Email
				</label>
				<input
					type='email'
					id='email'
					onChange={onChange}
					style={inputStyle}
					value={emailValue}
				></input>

				<button type='submit'>Submit</button>
			</form>
		</>
	);
}

export default AddFriends;
import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react';
import { loginUser, sendingInfo, doneSendingInfo } from '../reducers/loginReducer.js'
import { useNavigate } from 'react-router-dom'

const baseURL = 'http://localhost:9000';
const logIn = '/api/login';
const logOut = '/api/logout';
const friends = '/api/friends';

export const tryLogin = (userName, password ) => (dispatch) => {
		try {
			dispatch(sendingInfo())
			let url = baseURL + logIn;
			let info = { username: userName, password: password };

			Axios.post(url, info)
				.then((res) => {
					// save token to local storage
					console.log(res.data.token)
					localStorage.setItem('token', res.data.token);
					// redirect to friendsList
					dispatch(loginUser());
					dispatch(doneSendingInfo())
				})
				.catch((err) => console.log(err.message));
		} catch (error) {
			console.log(error);
			dispatch(doneSendingInfo());
		}
	
	
	
}
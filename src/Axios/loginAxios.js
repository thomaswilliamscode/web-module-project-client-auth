import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseURL = 'http://localhost:9000';
const logIn = '/api/login';
const logOut = '/api/logout';
const friends = '/api/friends';

export const tryLogin = async (userName, password, dispatch) => {
	try {
		let url = baseURL + logIn
		let info = { username: userName, password: password }

		await Axios.post(url, info)
			.then( (res) => {
				console.log(res.data)
			} )
			.catch( (err) => console.log(err.message) )
	}
	catch (error) {
		console.log(error)
	}
	
}
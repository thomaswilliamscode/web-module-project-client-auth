import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
}

const logOutSlice = createSlice({
	name: 'logOut',
	initialState,
	reducers: {
		logOut(state) {
			localStorage.setItem('token', '')
			state.isLoggedIn = false;
		}, 
		logIn(state) {
			state.isLoggedIn = true;
		}
	}
})

export const { logOut, } = logOutSlice.actions

export default logOutSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
}

const logOutSlice = createSlice({
	name: 'logOut',
	initialState,
	reducers: {
		logOut(state) {
			console.log('Inside the slice')
		}
	}
})

export const { logOut, } = logOutSlice.actions

export default logOutSlice.reducer

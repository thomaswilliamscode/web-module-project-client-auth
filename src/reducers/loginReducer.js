import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userName: null,
	password: null,
	isLoggedIn: false,
	sendingInfo: false
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLoginInfo( state, action) {
			const { userName, password } = action.payload
			if (userName) {
				state.userName = userName
			} else {
				state.password = password
			}
			
		}, 
		logoutUser(state) {
			state.userName = null
			state.password = null
			state.isLoggedIn = false;
			state.sendingInfo = false;
		},
		sendingInfo(state) {
			state.sendingInfo = true;

		}, loginUser(state) {
			console.log('Inside the login user Reducer')
			state.isLoggedIn = true;
			console.log('State is: ', state.isLoggedIn)

		}, doneSendingInfo(state) {
			state.sendingInfo = false;
		}
	},
});

export const { setLoginInfo, logoutUser, sendingInfo, loginUser, doneSendingInfo } = loginSlice.actions



export default loginSlice.reducer;
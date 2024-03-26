import { createSlice } from '@reduxjs/toolkit'
import { tryLogin } from '../Axios/loginAxios.js';

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
			tryLogin(state.userName, state.password)
			state.sendingInfo = false;

		}
	},
});

export const { setLoginInfo, logoutUser, sendingInfo } = loginSlice.actions
export default loginSlice.reducer;
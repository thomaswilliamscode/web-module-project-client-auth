import { createSlice } from '@reduxjs/toolkit'

import sendFriendData from '../actionCreators/addFriendsCreator.js';

const initialState = { 
	name: '',
	email: '',
	isValid: true,
}

const addFriendsSlice = createSlice({
	name: 'addFriends',
	initialState,
	reducers: {
		stateUpdate(state, action) {
			const { payload } = action.payload;
			switch(action.payload.type) {
				case 'name':
					state.name = payload
					break
				case 'email':
					state.email = payload;
					break
				default:
					console.log('womp womp')
					break
			}
		},
		friendCheck(state) {
			if(state.name === '' || state.email === '') {
				state.isValid = false
			} else {
				state.isValid = true
				// const data = {
				// 	name: state.name,
				// 	email: state.email,
				// }
				// sendFriendData(data, dispatch)
			}
		},
		resetValues(state) {
			return {...initialState}
		},
	}
})

export const { stateUpdate, friendCheck, resetValues } = addFriendsSlice.actions 

export default addFriendsSlice.reducer

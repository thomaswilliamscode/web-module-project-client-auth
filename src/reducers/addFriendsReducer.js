import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
	name: '',
	email: '',
}

const addFriendsSlice = createSlice({
	name: 'addFriends',
	initialState,
	reducers: {
		stateUpdate(state, action) {
			console.log(action)
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
	}
})

export const { stateUpdate } = addFriendsSlice.actions 

export default addFriendsSlice.reducer

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	friendsList: [],

}

const friendsListSlice = createSlice({
	name: 'friendsList',
	initialState,
	reducers: {
		grabFriends( state, action ) {
			state.friendsList = action.payload
		}, 
		testing() {
			console.log('yo we made it into our Slice')
		}
	}
}) 


export const { grabFriends, testing } = friendsListSlice.actions



export default friendsListSlice.reducer;